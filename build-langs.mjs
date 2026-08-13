/* Static language builds for the Stock Foundation site.
   English lives at the root (default), pl/cz/it/sk/de/fr in subdirectories.
   Run:  node build-langs.mjs
   Idempotent — safe to re-run after any content change.
   NOTE: SITE must match the production domain at launch. */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

/* Editable content lives in content/ (managed via the /admin CMS panel):
   - content/articles/<id>.json  -> generates design-v2/assets/articles.js
   - content/people/<id>.json    -> generates design-v2/assets/people.js
   - content/documents.json      -> injected into statute.html
   - content/pages/<page>.json   -> injected as PAGE_I18N into each page */
const CONTENT = join(import.meta.dirname, 'content');
const stripBom = s => s.replace(/^﻿/, '');
const readJson = (...p) => JSON.parse(stripBom(readFileSync(join(CONTENT, ...p), 'utf8')));
const readJsonDir = dir => readdirSync(join(CONTENT, dir))
  .filter(f => f.endsWith('.json'))
  .map(f => {
    const data = readJson(dir, f);
    /* Adres wpisu bierze się z nazwy pliku, którą panel tworzy z tytułu —
       redaktor nie wpisuje go ręcznie. Starsze wpisy mają jeszcze pole „id"
       w treści i ono ma pierwszeństwo, żeby opublikowane adresy się nie
       zmieniły; gdy panel przy kolejnym zapisie to pole usunie, nazwa pliku
       daje dokładnie tę samą wartość. */
    if (!data.id) data.id = f.replace(/\.json$/, '');
    // nazwa pliku tylko do komunikatów walidacji — niewidoczna dla JSON.stringify
    Object.defineProperty(data, '_file', { value: `content/${dir}/${f}`, enumerable: false });
    return data;
  });

const ARTICLES = readJsonDir('articles').sort((a, b) => (b.ts || '').localeCompare(a.ts || ''));
/* Council & board members. `order` decides the position within a group — the
   Chairman first — so it does not depend on file names. */
const PEOPLE = readJsonDir('people')
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name));
/* Statute + yearly reports shown on statute.html. */
const DOCUMENTS = readJson('documents.json');

/* Allowed values — keep in step with the select options in
   design-v2/admin/config.yml, which is what the editor actually picks from. */
const CATEGORIES = ['art', 'training', 'scholar', 'grant', 'volunteer', 'therapy'];
const PERSON_GROUPS = ['council', 'board'];

/* Content coming from the /admin panel is checked before anything is written.
   A broken entry must stop the build with a message the person who edited it
   can act on — on Vercel a failed build keeps the previous deployment, which
   beats publishing a page with a blank card or a dead PDF link. */
function validateContent(srcDir) {
  const problems = [];
  const filePath = p => join(srcDir, String(p).replace(/^\//, ''));
  const missingFile = p => p && !/^https?:/i.test(p) && !existsSync(filePath(p));
  const seen = new Map();

  for (const a of ARTICLES) {
    const where = a._file || `wpis „${a.id}”`;
    if (!a.id || !/^[a-z0-9-]+$/.test(a.id)) problems.push(`${where}: identyfikator „${a.id}” — dozwolone tylko małe litery, cyfry i myślniki`);
    if (seen.has(a.id)) problems.push(`${where}: identyfikator „${a.id}” jest już użyty w ${seen.get(a.id)} — dwa wpisy nie mogą mieć tego samego`);
    else seen.set(a.id, where);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a.ts || '') || Number.isNaN(new Date(`${a.ts}T00:00:00Z`).getTime()))
      problems.push(`${where}: data wydarzenia „${a.ts}” nie jest poprawną datą (oczekiwane RRRR-MM-DD)`);
    /* Kategoria jest opcjonalna — wpisy w rodzaju sprawozdania rocznego czy
       statusu OPP nie należą do żadnego programu i pokazują się bez etykiety
       (łapie je tylko filtr „Wszystkie”). Podana kategoria musi być z listy. */
    if (a.cat && !CATEGORIES.includes(a.cat)) problems.push(`${where}: kategoria „${a.cat}” — dozwolone: ${CATEGORIES.join(', ')} albo brak kategorii`);
    for (const key of ['title', 'lead', 'body']) {
      for (const l of ['pl', 'en']) {
        const v = a[key]?.[l];
        if (!v || (Array.isArray(v) && v.length === 0)) problems.push(`${where}: brakuje pola „${key}” w języku ${l.toUpperCase()}`);
      }
    }
    if (!a.img) problems.push(`${where}: brak zdjęcia głównego`);
    else if (missingFile(a.img)) problems.push(`${where}: plik zdjęcia ${a.img} nie istnieje w repozytorium`);
    for (const img of a.images || []) if (missingFile(img)) problems.push(`${where}: plik z galerii ${img} nie istnieje w repozytorium`);
  }

  const people = new Map();
  for (const p of PEOPLE) {
    const where = p._file || `osoba „${p.id}”`;
    if (!p.id || !/^[a-z0-9-]+$/.test(p.id)) problems.push(`${where}: identyfikator „${p.id}” — dozwolone tylko małe litery, cyfry i myślniki`);
    if (people.has(p.id)) problems.push(`${where}: identyfikator „${p.id}” jest już użyty w ${people.get(p.id)}`);
    else people.set(p.id, where);
    if (!p.name) problems.push(`${where}: brak imienia i nazwiska`);
    if (!PERSON_GROUPS.includes(p.group)) problems.push(`${where}: organ „${p.group}” — dozwolone: ${PERSON_GROUPS.join(', ')}`);
    if (!p.role?.pl || !p.role?.en) problems.push(`${where}: brak funkcji po polsku lub angielsku`);
    if (!p.photo) problems.push(`${where}: brak zdjęcia`);
    else if (missingFile(p.photo)) problems.push(`${where}: plik zdjęcia ${p.photo} nie istnieje w repozytorium`);
  }

  const docs = [
    ['statut', DOCUMENTS.statuteFile],
    ...(DOCUMENTS.reports || []).flatMap(r => [
      [`sprawozdanie z działalności ${r.year}`, r.activityFile],
      [`bilans ${r.year}`, r.balanceFile],
      [`rachunek zysków i strat ${r.year}`, r.pnlFile]
    ])
  ];
  if (!DOCUMENTS.statuteFile) problems.push('content/documents.json: brak pliku statutu');
  for (const [label, p] of docs) if (missingFile(p)) problems.push(`content/documents.json: ${label} — plik ${p} nie istnieje w repozytorium`);
  for (const r of DOCUMENTS.reports || []) {
    if (!/^\d{4}$/.test(String(r.year || ''))) problems.push(`content/documents.json: rok „${r.year}” — oczekiwane cztery cyfry`);
    if (!r.activityFile && !r.balanceFile && !r.pnlFile) problems.push(`content/documents.json: rok ${r.year} nie ma żadnego pliku PDF — usuń go z listy albo dodaj dokument`);
  }

  if (problems.length) {
    console.error(`\nTreść z panelu wymaga poprawy — build zatrzymany (${problems.length}):`);
    for (const p of problems) console.error('  • ' + p);
    console.error('\nPoprawka w panelu /admin (albo w plikach content/) i zapis uruchomi build ponownie.\n');
    process.exit(1);
  }
  console.log(`content sprawdzony: ${ARTICLES.length} wpisów, ${PEOPLE.length} osób, ${(DOCUMENTS.reports || []).length} lat sprawozdań`);
}

const PAGE_DICTS = {};
for (const f of readdirSync(join(CONTENT, 'pages')).filter(f => f.endsWith('.json'))) {
  PAGE_DICTS[f.replace('.json', '.html')] = JSON.parse(stripBom(readFileSync(join(CONTENT, 'pages', f), 'utf8')));
}

/* Wspólne teksty (nawigacja, stopka itd.) mieszkają w main.js jako
   COMMON_I18N — build czyta je stamtąd, żeby nie utrzymywać drugiej kopii.
   Potrzebne, bo teksty stron wpisujemy do HTML już przy budowaniu (niżej,
   wypelnijTeksty) — bez tego strona na wolnej sieci była niema, dopóki nie
   dojechał JavaScript: PageSpeed pokazywał pierwszy tekst po 4 sekundach. */
const COMMON_I18N = (() => {
  const src = readFileSync(join(import.meta.dirname, 'design-v2', 'assets', 'main.js'), 'utf8');
  const m = src.match(/const COMMON_I18N = (\{[\s\S]*?\n\});/);
  if (!m) throw new Error('Nie znalazłem COMMON_I18N w main.js — zmieniła się jego postać?');
  return new Function('return ' + m[1])();
})();

const SITE = 'https://fundacjastock.pl';
/* Domena przepięta 05.08.2026 — og:image i logo w danych strukturalnych
   wskazują już na docelowy adres. */
const OG_SITE = SITE;
const SRC = join(import.meta.dirname, 'design-v2');
const PAGES = ['index.html', 'about-us.html', 'news.html', 'article.html', 'statute.html', 'board-council.html', 'person.html', 'contact.html', 'privacy-policy.html'];
const LANGS = ['en', 'pl', 'cz', 'it', 'sk', 'de', 'fr'];   // en = root
/* Languages the public may actually switch to. Everything else is still built
   and deployed (translations are finished and ready), but is hidden behind a
   "coming soon" state in the picker, kept out of sitemap/hreflang and marked
   noindex — so search engines do not index a version we have not released yet.
   TO RELEASE A LANGUAGE: add its code here and re-run the build. Nothing else. */
const PUBLIC_LANGS = ['en', 'pl'];
const DIR = { en: '', pl: 'pl/', cz: 'cz/', it: 'it/', sk: 'sk/', de: 'de/', fr: 'fr/' };
const HTML_LANG = { en: 'en', pl: 'pl', cz: 'cs', it: 'it', sk: 'sk', de: 'de', fr: 'fr' };
const HREFLANG = { en: 'en', pl: 'pl', cz: 'cs', it: 'it', sk: 'sk', de: 'de', fr: 'fr' };
const OG_LOCALE = { en: 'en_GB', pl: 'pl_PL', cz: 'cs_CZ', it: 'it_IT', sk: 'sk_SK', de: 'de_DE', fr: 'fr_FR' };
const DATE_LOCALE = { en: 'en-GB', pl: 'pl-PL', cz: 'cs-CZ', it: 'it-IT', sk: 'sk-SK', de: 'de-DE', fr: 'fr-FR' };

/* The date shown on a card ("5 June 2026") is derived from the entry's `ts`,
   so the editor never types it in seven languages — DeepL does not translate
   that field either. `span: 'month'` drops the day for older entries where
   only the month is known ("June 2024"). */
function displayDate(ts, lang, span) {
  const d = new Date(`${ts}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    ...(span === 'month' ? {} : { day: 'numeric' }),
    month: 'long', year: 'numeric', timeZone: 'UTC'
  }).format(d);
}

/* Must run before the fallbacks below, otherwise a missing Polish or English
   text would be quietly filled in from the other language instead of reported. */
validateContent(SRC);

/* Normalise every entry so no page can render blank/undefined:
   - date: generated from `ts` unless the entry carries its own wording
     (the pre-CMS entries do, and keep it),
   - title/lead/body: a missing language falls back to English, then Polish.
   A proper translation may overwrite any of these fields at any time. */
for (const a of ARTICLES) {
  a.date = a.date || {};
  for (const l of LANGS) if (!a.date[l]) a.date[l] = displayDate(a.ts, l, a.dateSpan);
  for (const key of ['title', 'lead']) {
    a[key] = a[key] || {};
    for (const l of LANGS) if (!a[key][l]) a[key][l] = a[key].en || a[key].pl || '';
  }
  a.body = a.body || {};
  for (const l of LANGS) {
    if (!Array.isArray(a.body[l]) || a.body[l].length === 0) a.body[l] = a.body.en || a.body.pl || [];
  }
}

/* page → lang → [title, meta description] */
const META = {
  'index.html': {
    en: ['Stock Foundation — Hope, art & community',
      'Stock Foundation (est. 2022, Lublin) helps refugees and local communities and promotes art as therapy. See our latest actions and news.'],
    pl: ['Fundacja Stock — Nadzieja, sztuka i wspólnota',
      'Fundacja Stock (zał. 2022, Lublin) pomaga uchodźcom i lokalnym społecznościom oraz promuje sztukę jako terapię. Organizujemy spotkania ze sztuką dla seniorów w Lublinie.'],
    cz: ['Nadace Stock — Naděje, umění a komunita',
      'Nadace Stock (zal. 2022, Lublin) pomáhá uprchlíkům a místním komunitám a podporuje umění jako terapii. Podívejte se na naše nejnovější akce a novinky.'],
    it: ['Fondazione Stock — Speranza, arte e comunità',
      'La Fondazione Stock (fond. 2022, Lublino) aiuta rifugiati e comunità locali e promuove l’arte come terapia. Scopri le nostre ultime azioni e notizie.'],
    sk: ['Nadácia Stock — Nádej, umenie a komunita',
      'Nadácia Stock (zal. 2022, Lublin) pomáha utečencom a miestnym komunitám a podporuje umenie ako terapiu. Pozrite si naše najnovšie aktivity a novinky.'],
    de: ['Stiftung Stock — Hoffnung, Kunst & Gemeinschaft',
      'Die Stiftung Stock (gegr. 2022, Lublin) hilft Geflüchteten und lokalen Gemeinschaften und fördert Kunst als Therapie. Entdecken Sie unsere neuesten Aktionen und Nachrichten.'],
    fr: ['Fondation Stock — Espoir, art et communauté',
      'La Fondation Stock (fond. 2022, Lublin) aide les réfugiés et les communautés locales et promeut l’art comme thérapie. Découvrez nos dernières actions.']
  },
  'about-us.html': {
    en: ['About us — Stock Foundation',
      'The story of the Stock Foundation — from emergency aid for Ukrainian refugees in Lublin to art, scholarships and community programs.'],
    pl: ['O nas — Fundacja Stock',
      'Historia Fundacji Stock — od pomocy doraźnej dla uchodźców z Ukrainy w Lublinie po sztukę, stypendia i programy społeczne.'],
    cz: ['O nás — Nadace Stock',
      'Příběh Nadace Stock — od nouzové pomoci ukrajinským uprchlíkům v Lublinu po umění, stipendia a komunitní programy.'],
    it: ['Chi siamo — Fondazione Stock',
      'La storia della Fondazione Stock — dall’aiuto d’emergenza per i rifugiati ucraini a Lublino ad arte, borse di studio e programmi sociali.'],
    sk: ['O nás — Nadácia Stock',
      'Príbeh Nadácie Stock — od núdzovej pomoci ukrajinským utečencom v Lubline po umenie, štipendiá a komunitné programy.'],
    de: ['Über uns — Stiftung Stock',
      'Die Geschichte der Stiftung Stock — von der Nothilfe für ukrainische Geflüchtete in Lublin bis zu Kunst, Stipendien und Gemeinschaftsprogrammen.'],
    fr: ['À propos — Fondation Stock',
      'L’histoire de la Fondation Stock — de l’aide d’urgence aux réfugiés ukrainiens à Lublin à l’art, aux bourses d’études et aux programmes communautaires.']
  },
  'news.html': {
    en: ['News — Stock Foundation',
      'Latest news and recurring actions from the Stock Foundation — Art Encounters, scholarships, training and community initiatives, updated regularly.'],
    pl: ['Aktualności — Fundacja Stock',
      'Aktualności i cykliczne akcje Fundacji Stock — spotkania ze sztuką dla seniorów w Lublinie, stypendia, szkolenia i inicjatywy społeczne.'],
    cz: ['Novinky — Nadace Stock',
      'Novinky a pravidelné akce Nadace Stock — setkání s uměním, stipendia, školení a komunitní iniciativy.'],
    it: ['Notizie — Fondazione Stock',
      'Notizie e azioni ricorrenti della Fondazione Stock — incontri con l’arte, borse di studio, formazione e iniziative per la comunità.'],
    sk: ['Aktuality — Nadácia Stock',
      'Novinky a pravidelné aktivity Nadácie Stock — stretnutia s umením, štipendiá, školenia a komunitné iniciatívy.'],
    de: ['Aktuelles — Stiftung Stock',
      'Neuigkeiten und regelmäßige Aktionen der Stiftung Stock — Kunstbegegnungen, Stipendien, Schulungen und Gemeinschaftsinitiativen.'],
    fr: ['Actualités — Fondation Stock',
      'Actualités et actions récurrentes de la Fondation Stock — rencontres avec l’art, bourses d’études, formations et initiatives communautaires.']
  },
  'article.html': {
    en: ['News — Stock Foundation',
      'News and stories from the Stock Foundation — helping refugees and communities and promoting art as therapy.'],
    pl: ['Aktualności — Fundacja Stock',
      'Aktualności i historie Fundacji Stock — pomoc uchodźcom i społecznościom oraz sztuka jako terapia.'],
    cz: ['Novinky — Nadace Stock',
      'Novinky a příběhy Nadace Stock — pomoc uprchlíkům a komunitám a umění jako terapie.'],
    it: ['Notizie — Fondazione Stock',
      'Notizie e storie della Fondazione Stock — aiuto a rifugiati e comunità e arte come terapia.'],
    sk: ['Aktuality — Nadácia Stock',
      'Novinky a príbehy Nadácie Stock — pomoc utečencom a komunitám a umenie ako terapia.'],
    de: ['Aktuelles — Stiftung Stock',
      'Nachrichten und Geschichten der Stiftung Stock — Hilfe für Geflüchtete und Gemeinschaften und Kunst als Therapie.'],
    fr: ['Actualités — Fondation Stock',
      'Actualités et histoires de la Fondation Stock — aide aux réfugiés et aux communautés, l’art comme thérapie.']
  },
  'statute.html': {
    en: ['Statute & Reports — Stock Foundation',
      'Statute, annual reports and financial statements of the Stock Foundation — full transparency.'],
    pl: ['Statut i sprawozdania — Fundacja Stock',
      'Statut, sprawozdania roczne i finansowe Fundacji Stock — pełna przejrzystość.'],
    cz: ['Statut a zprávy — Nadace Stock',
      'Statut, výroční zprávy a účetní závěrky Nadace Stock — plná transparentnost.'],
    it: ['Statuto e rapporti — Fondazione Stock',
      'Statuto, rapporti annuali e bilanci della Fondazione Stock — piena trasparenza.'],
    sk: ['Štatút a správy — Nadácia Stock',
      'Štatút, výročné správy a účtovné závierky Nadácie Stock — plná transparentnosť.'],
    de: ['Satzung & Berichte — Stiftung Stock',
      'Satzung, Jahresberichte und Jahresabschlüsse der Stiftung Stock — volle Transparenz.'],
    fr: ['Statuts et rapports — Fondation Stock',
      'Statuts, rapports annuels et états financiers de la Fondation Stock — transparence totale.']
  },
  'board-council.html': {
    en: ['Foundation Board — Stock Foundation',
      'Meet the people behind the Stock Foundation — the Board, their roles and what each of them brings to the foundation.'],
    pl: ['Zarząd — Fundacja Stock',
      'Poznaj ludzi, którzy tworzą Fundację Stock — skład Zarządu, pełnione funkcje i doświadczenie każdej z tych osób.'],
    cz: ['Představenstvo — Nadace Stock',
      'Poznejte představenstvo Nadace Stock.'],
    it: ['Consiglio di Amministrazione — Fondazione Stock',
      'La direzione della Fondazione Stock.'],
    sk: ['Predstavenstvo — Nadácia Stock',
      'Spoznajte predstavenstvo Nadácie Stock.'],
    de: ['Vorstand — Stiftung Stock',
      'Lernen Sie den Vorstand der Stiftung Stock kennen.'],
    fr: ['Direction — Fondation Stock',
      'Découvrez la direction de la Fondation Stock.']
  },
  'person.html': {
    en: ['Foundation Board — Stock Foundation', 'Board of the Stock Foundation.'],
    pl: ['Zarząd — Fundacja Stock', 'Zarząd Fundacji Stock.'],
    cz: ['Představenstvo — Nadace Stock', 'Představenstvo Nadace Stock.'],
    it: ['Consiglio di Amministrazione — Fondazione Stock', 'La direzione della Fondazione Stock.'],
    sk: ['Predstavenstvo — Nadácia Stock', 'Predstavenstvo Nadácie Stock.'],
    de: ['Vorstand — Stiftung Stock', 'Vorstand der Stiftung Stock.'],
    fr: ['Direction — Fondation Stock', 'Direction de la Fondation Stock.']
  },
  'contact.html': {
    en: ['Contact — Stock Foundation',
      'Contact the Stock Foundation in Lublin — address, phone and e-mail for partnerships, media and volunteering, plus Stock offices across Europe.'],
    pl: ['Kontakt — Fundacja Stock',
      'Skontaktuj się z Fundacją Stock w Lublinie — adres, telefon i e-mail w sprawach współpracy, mediów i wolontariatu. Także mapa oddziałów Stock w Europie.'],
    cz: ['Kontakt — Nadace Stock',
      'Kontaktujte Nadaci Stock v Lublinu — adresa, telefon a e-mail.'],
    it: ['Contatti — Fondazione Stock',
      'Contatta la Fondazione Stock a Lublino — indirizzo, telefono ed e-mail.'],
    sk: ['Kontakt — Nadácia Stock',
      'Kontaktujte Nadáciu Stock v Lubline — adresa, telefón a e-mail.'],
    de: ['Kontakt — Stiftung Stock',
      'Kontaktieren Sie die Stiftung Stock in Lublin — Adresse, Telefon und E-Mail.'],
    fr: ['Contact — Fondation Stock',
      'Contactez la Fondation Stock à Lublin — adresse, téléphone et e-mail.']
  },
  'privacy-policy.html': {
    en: ['Privacy and Cookies — Stock Foundation', 'How the Stock Foundation website handles personal data and cookies — what we collect, why, and how you can change your consent at any time.'],
    pl: ['Prywatność i cookies — Fundacja Stock', 'Jak strona Fundacji Stock postępuje z danymi osobowymi i plikami cookie — co zbieramy, po co i jak w każdej chwili zmienić swoją zgodę.'],
    cz: ['Soukromí a cookies — Nadace Stock', 'Zásady ochrany soukromí a cookies webu Nadace Stock.'],
    it: ['Privacy e cookie — Fondazione Stock', 'Informativa privacy e cookie del sito della Fondazione Stock.'],
    sk: ['Súkromie a cookies — Nadácia Stock', 'Zásady ochrany súkromia a cookies webu Nadácie Stock.'],
    de: ['Datenschutz und Cookies — Stiftung Stock', 'Datenschutz- und Cookie-Richtlinie der Website der Stiftung Stock.'],
    fr: ['Confidentialité et cookies — Fondation Stock', 'Politique de confidentialité et de cookies du site de la Fondation Stock.']
  }
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
/* for text nodes built from CMS input — a stray < must not open a tag */
const escText = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/* Adresy bez rozszerzenia .html — Vercel ma włączone cleanUrls (vercel.json),
   więc /statute serwuje statute.html, a /statute.html przekierowuje na /statute.
   Stąd jedno miejsce, w którym rozszerzenie jest ucinane: pilnuje adresów
   kanonicznych, powiązań językowych, danych strukturalnych i mapy strony.
   Strona główna języka to „/” albo „/pl” — bez ukośnika na końcu, zgodnie
   z trailingSlash: false. */
const bezRozszerzenia = page => String(page).replace(/\.html$/, '');
const pageUrl = (lang, page) =>
  page === 'index.html' || page === 'index'
    ? SITE + '/' + DIR[lang].replace(/\/$/, '')
    : SITE + '/' + DIR[lang] + bezRozszerzenia(page);

/* To samo, ale jako ścieżka od korzenia — do odnośników wewnątrz stron.
   Bezwzględnie od korzenia, a nie względnie, bo strona główna języka ma adres
   „/pl” (bez ukośnika) i odnośnik względny szukałby wtedy sąsiada w korzeniu. */
const pageHref = (lang, page) =>
  page === 'index.html' || page === 'index'
    ? (lang === 'en' ? '/' : '/' + DIR[lang].replace(/\/$/, ''))
    : '/' + DIR[lang] + bezRozszerzenia(page);

/* ---- structured data (schema.org) ----
   Localised names for the JSON-LD blocks. The breadcrumb labels mirror
   COMMON_I18N in main.js — keep them in step if those ever change. */
const ORG_NAME = {
  en: 'Stock Foundation', pl: 'Fundacja Stock', cz: 'Nadace Stock', it: 'Fondazione Stock',
  sk: 'Nadácia Stock', de: 'Stiftung Stock', fr: 'Fondation Stock'
};
const HOME_LABEL = {
  en: 'Home', pl: 'Strona główna', cz: 'Úvod', it: 'Home',
  sk: 'Domov', de: 'Startseite', fr: 'Accueil'
};
const NEWS_LABEL = {
  en: 'News', pl: 'Aktualności', cz: 'Novinky', it: 'Notizie',
  sk: 'Aktuality', de: 'Aktuelles', fr: 'Actualités'
};

const ld = obj => '<script type="application/ld+json">' +
  JSON.stringify(obj).replace(/</g, '\\u003c') + '</script>';

/* One Organization block, on the home page of each language. Everything here
   is already public on the site itself (contact page, footer, financial
   statements), so nothing new is being disclosed. */
function orgLd(lang) {
  return {
    '@context': 'https://schema.org', '@type': 'NGO',
    '@id': SITE + '/#organization',
    name: ORG_NAME[lang],
    legalName: 'Fundacja Stock',
    alternateName: 'Stock Foundation',
    url: pageUrl(lang, 'index.html'),
    logo: OG_SITE + '/uploads/logo-footer.svg',
    foundingDate: '2022',
    taxID: '9462718618',
    description: META['index.html'][lang][1],
    address: {
      '@type': 'PostalAddress', streetAddress: 'Spółdzielcza 6',
      postalCode: '20-402', addressLocality: 'Lublin', addressCountry: 'PL'
    },
    contactPoint: {
      '@type': 'ContactPoint', telephone: '+48538183916',
      /* Jedyny publiczny adres fundacji — decyzja klienta z 12.08.2026
         (prywatny numer i adres stockspirits.com zdjęte ze strony Kontakt,
         więc znikają też z danych strukturalnych dla Google). */
      contactType: 'customer service', email: 'wolontariat@fundacjastock.pl',
      availableLanguage: PUBLIC_LANGS.map(l => HTML_LANG[l])
    },
    sameAs: ['https://www.facebook.com/fundacjastock/', 'https://www.instagram.com/fundacja_stock']
  };
}

function articleLd(lang, art, page) {
  return {
    '@context': 'https://schema.org', '@type': 'NewsArticle',
    headline: art.title,
    description: art.desc,
    image: [OG_SITE + art.img],
    datePublished: art.ts,
    inLanguage: HTML_LANG[lang],
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl(lang, page) },
    author: { '@id': SITE + '/#organization' },
    publisher: { '@id': SITE + '/#organization' }
  };
}

function breadcrumbLd(lang, page, art) {
  const items = [{ '@type': 'ListItem', position: 1, name: HOME_LABEL[lang], item: pageUrl(lang, 'index.html') }];
  if (art) {
    items.push({ '@type': 'ListItem', position: 2, name: NEWS_LABEL[lang], item: pageUrl(lang, 'news.html') });
    items.push({ '@type': 'ListItem', position: 3, name: art.title });
  } else {
    items.push({ '@type': 'ListItem', position: 2, name: META[page][lang][0].split(' — ')[0] });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

/* art (optional): { id, title, desc, img } — per-article overrides */
function transform(src, page, lang, art) {
  const tplPage = page; // template name (content dict lookup) — `page` may become article-<id>.html
  let [title, desc] = META[page][lang];
  /* Tytuł artykułu z dopiskiem nazwy fundacji często przekraczał ~60 znaków,
     po których Google ucina tytuł w wynikach — a ucina wtedy właśnie nazwę.
     Dopisek dokładamy więc tylko wtedy, gdy się mieści; przy dłuższych
     tytułach sam tytuł niesie więcej niż jego obcięty ogon. */
  if (art) {
    const zDopiskiem = `${art.title} — Stock Foundation`;
    title = zDopiskiem.length <= 60 ? zDopiskiem : art.title;
    desc = art.desc;
    page = `article-${art.id}.html`;
  }
  if (desc.length > 300) desc = desc.slice(0, 297).replace(/\s+\S*$/, '') + '…';
  let h = src;

  h = h.replace(/<html lang="[^"]*">/, `<html lang="${HTML_LANG[lang]}">`);
  h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  h = h.replace(/(<meta name="description" content=")[^"]*(">)/, `$1${esc(desc)}$2`);
  h = h.replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${esc(title)}$2`);
  h = h.replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${esc(desc)}$2`);
  h = h.replace(/(<meta property="og:image" content=")[^"]*(">)/, `$1${OG_SITE}${art ? art.img : '/uploads/about-festyn.jpg'}$2`);
  if (art) h = h.replace(/(<meta property="og:type" content=")[^"]*(">)/, '$1article$2');
  h = h.replace(/<meta property="og:url" content="[^"]*">\n?/, '');
  h = h.replace(/<meta property="og:locale" content="[^"]*">\n?/, '');
  h = h.replace(/(<meta property="og:image" content="[^"]*">)/,
    `$1\n<meta property="og:url" content="${pageUrl(lang, page)}">\n<meta property="og:locale" content="${OG_LOCALE[lang]}">`);

  // canonical + hreflang alternates (unreleased languages stay out of both)
  h = h.replace(/<!-- lang-alternates -->[\s\S]*?<!-- \/lang-alternates -->\n?/, '');
  const published = PUBLIC_LANGS.includes(lang);
  /* Strony-szablony trzymamy poza wyszukiwarką. „article.html” bez wpisu to
     zapasowy adres dla starych odnośników z kotwicą (#id) — każdy artykuł ma
     własną stronę. „person.html” pokazuje profil dobierany kotwicą, więc dla
     robota jest jedną stroną z przypadkową osobą, na dodatek pod tytułem
     skopiowanym z listy Rady i Zarządu. Obie zostają dostępne dla ludzi. */
  const szablonBezTresci = (tplPage === 'article.html' && !art) || tplPage === 'person.html';
  const alt = ['<!-- lang-alternates -->',
    ...(published && !szablonBezTresci ? [] : ['<meta name="robots" content="noindex,follow">']),
    `<link rel="canonical" href="${pageUrl(lang, page)}">`,
    ...PUBLIC_LANGS.map(l => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${pageUrl(l, page)}">`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl('en', page)}">`,
    '<!-- /lang-alternates -->'].join('\n');
  h = h.replace(/(<meta name="twitter:card" content="[^"]*">)/, `$1\n${alt}`);

  // per-URL language marker (read by main.js and page scripts before render)
  h = h.replace(/<script data-fs-lang>[\s\S]*?<\/script>\n?/, '');
  h = h.replace(/(<link rel="icon")/,
    `<script data-fs-lang>window.FS_LANG='${lang}';window.FS_PUBLIC_LANGS=${JSON.stringify(PUBLIC_LANGS)};try{localStorage.setItem('fs-lang','${lang}')}catch(e){}${wczesnaSciana()}</script>\n$1`);
  // per-URL article marker (static article pages)
  h = h.replace(/<script data-fs-article>[\s\S]*?<\/script>\n?/, '');
  if (art) h = h.replace(/(<link rel="icon")/, `<script data-fs-article>window.FS_ARTICLE='${art.id}';</script>\n$1`);

  // root-absolute assets/uploads so subdirectory pages share one copy
  h = h.replace(/(src|href)="(assets|uploads)\//g, '$1="/$2/');

  /* Point each page at the single-language article bundle (see writeArticlesJs).
     Matches an already-rewritten name too: the EN pass overwrites the root
     templates, so later languages read output, not the pristine source. */
  h = h.replace(/\/assets\/articles(-[a-z]{2})?\.js/, `/assets/articles-${lang}.js`);

  /* structured data — rebuilt from scratch on every run so re-running the
     build never stacks duplicate blocks in the root templates */
  h = h.replace(/<!-- ld-json -->[\s\S]*?<!-- \/ld-json -->\n?/, '');
  const bloki = [];
  if (tplPage === 'index.html') bloki.push(orgLd(lang));
  else bloki.push(breadcrumbLd(lang, tplPage, art));
  if (art) bloki.push(articleLd(lang, art, page));
  h = h.replace('</head>',
    '<!-- ld-json -->\n' + bloki.map(ld).join('\n') + '\n<!-- /ld-json -->\n</head>');

  // inject the editable PAGE_I18N dictionary from content/pages/<page>.json
  const dict = PAGE_DICTS[tplPage];
  if (dict) {
    const json = JSON.stringify(dict).replace(/<\//g, '<\\/');
    h = h.replace(/\/\* CONTENT:PAGE_I18N \*\/[\s\S]*?\/\* \/CONTENT \*\//,
      `/* CONTENT:PAGE_I18N */${json}/* /CONTENT */`);
  }

  /* Kafel „1,5% podatku” w pierwszym ekranie — wersja polska i angielska.
     Odliczenie dotyczy wyłącznie rozliczających PIT w Polsce, więc w wersjach
     cz/it/sk/de/fr kafel byłby szumem obok głównego przycisku. Angielska
     zostaje, bo pod głównym adresem (fundacjastock.pl, bez /pl/) serwowana
     jest właśnie ona i nie ma przekierowania po języku przeglądarki — to tam
     ląduje większość odwiedzających, w tym polskich. Status OPP i numer KRS
     są niezależnie od tego w stopce, we wszystkich językach. */
  const OPP_LANGS = ['pl', 'en'];
  if (tplPage === 'index.html') {
    h = fillBlock(h, 'HERO_OPP', OPP_LANGS.includes(lang) ? heroOppHtml() : '');
    h = fillBlock(h, 'HOME_STATUTE', statuteDocHtml(lang, 'statuteLink1'));
  }

  // inject the document list from content/documents.json (statute page only)
  if (tplPage === 'statute.html') {
    h = fillBlock(h, 'STATUTE_DOC', statuteDocHtml(lang));
    h = fillBlock(h, 'DOCS', docsGridHtml(lang));
  }
  h = przepiszOdnosniki(h, lang);
  h = wypelnijTeksty(h, lang, PAGE_DICTS[tplPage]);
  /* Najpierw usuwamy kartę z poprzedniego przebiegu (build czyta własny wynik),
     potem wstawiamy świeżą — albo żadnej, gdy tryb konserwacji jest wyłączony. */
  h = h.replace(/(<body>)\s*<div class="fs-gate">[\s\S]*?<\/div>\s*/i, '$1\n');
  const karta = kartaSciany();
  if (karta) h = h.replace(/<body>/i, '<body>\n' + karta + '\n');
  return h;
}

/* Teksty w języku strony trafiają do HTML już przy budowaniu. Wcześniej
   elementy z data-i18n były puste, a wypełniał je dopiero main.js — ostatni
   skrypt na stronie. Na wolnym łączu (pomiar PageSpeed, telefon + 4G) tekst
   pojawiał się więc po ~4 s, bo czekał na JavaScript konkurujący o pasmo ze
   zdjęciami. Teraz strona czyta się od razu po dojściu arkusza stylów,
   działa też bez JavaScriptu, a applyLang() w main.js nadpisuje te same
   wartości — bez migotania (chyba że zwiedzający ma zapamiętany inny język).

   Najpierw czyścimy poprzednią zawartość (build nadpisuje szablony wersją
   angielską i przy kolejnym przebiegu czyta własny wynik), potem wpisujemy
   świeżą. Elementy data-i18n zawierają wyłącznie tekst (JS ustawia
   textContent), więc regex na czystym tekście jest bezpieczny. */
function wypelnijTeksty(h, lang, dict) {
  const t = Object.assign({}, COMMON_I18N.en, dict?.en || {}, COMMON_I18N[lang] || {}, dict?.[lang] || {});
  h = h.replace(/(<([a-z0-9]+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)[^<]*(<\/\2>)/g,
    (calosc, otwarcie, tag, klucz, zamkniecie) =>
      t[klucz] !== undefined ? otwarcie + escText(String(t[klucz])) + zamkniecie : otwarcie + zamkniecie);
  /* opisy zdjęć: data-i18n-alt steruje atrybutem alt */
  h = h.replace(/<img\b[^>]*\bdata-i18n-alt="([^"]+)"[^>]*>/g, znacznik => {
    const klucz = znacznik.match(/data-i18n-alt="([^"]+)"/)[1];
    if (t[klucz] === undefined) return znacznik;
    return znacznik.replace(/\balt="[^"]*"/, `alt="${escText(String(t[klucz]))}"`);
  });
  return h;
}

/* Adresy, które są stronami tego serwisu — tylko takie odnośniki przepisujemy.
   Wszystko inne (mailto:, tel:, /uploads/…, adresy zewnętrzne) zostaje. */
const STRONY = new Set([...PAGES.map(bezRozszerzenia), ...ARTICLES.map(a => `article-${a.id}`)]);
const KATALOGI_JEZYKOW = LANGS.filter(l => l !== 'en').join('|');

/* Odnośniki wewnętrzne zapisujemy jako ścieżki od korzenia (/pl/news), osobno
   dla każdej wersji językowej. Względne nie wchodzą w grę: strona główna języka
   ma adres „/pl” bez ukośnika na końcu, więc „news” szukałoby sąsiada
   w korzeniu, nie w katalogu języka.

   Przepisywanie musi znieść wielokrotne uruchomienie: build nadpisuje szablony
   wersją angielską i przy kolejnym przebiegu czyta własny wynik. Dlatego wzorce
   rozpoznają zarówno pierwotne „about-us.html”, jak i gotowe „/pl/about-us”. */
function przepiszOdnosniki(html, lang) {
  const domowy = pageHref(lang, 'index');
  return html
    // strona główna: „index.html”, „/”, „/pl” — wszystko sprowadzamy do jednego
    .replace(new RegExp(`href="(?:index\\.html|\\/(?:${KATALOGI_JEZYKOW})?)"`, 'g'), `href="${domowy}"`)
    /* Pozostałe podstrony. Przedrostek jest opcjonalny i ma trzy postaci:
       brak („news.html” w pierwotnym szablonie), katalog języka („/pl/news”)
       oraz sam ukośnik („/news”, czyli wersja angielska zapisana w szablonie
       przez poprzedni przebieg). Wszystkie trzeba rozpoznać, bo inaczej strony
       artykułów odziedziczyłyby angielskie odnośniki po przebiegu dla EN. */
    .replace(new RegExp(`href="(?:\\/(?:${KATALOGI_JEZYKOW})\\/|\\/)?([a-z0-9][a-z0-9-]*)(?:\\.html)?((?:#[^"]*)?)"`, 'g'),
      (dopasowanie, nazwa, kotwica) =>
        STRONY.has(nazwa) ? `href="${pageHref(lang, nazwa)}${kotwica}"` : dopasowanie);
}

/* Marker-based HTML injection: <!-- CONTENT:NAME -->…<!-- /CONTENT --> is
   replaced on every run, so the build stays idempotent even though the EN pass
   writes back over the root templates it just read. */
function fillBlock(html, name, inner) {
  return html.replace(
    new RegExp(`<!-- CONTENT:${name} -->[\\s\\S]*?<!-- /CONTENT -->`),
    `<!-- CONTENT:${name} -->\n${inner}\n      <!-- /CONTENT -->`);
}

/* Dokumenty otwierają się w oknie podglądu (assets/docviewer.js), a nie jako
   plik do pobrania — stąd <button data-doc> zamiast <a href>. W kodzie strony
   nie ma wtedy adresu pliku, więc menu pod prawym przyciskiem nie ma czego
   zapisać. Prośba klienta: dokumenty mają być do obejrzenia, nie do pobrania. */
const EYE_SVG = '<svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M1.5 9s2.8-4.6 7.5-4.6S16.5 9 16.5 9s-2.8 4.6-7.5 4.6S1.5 9 1.5 9Z M9 11.1a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z" stroke="#CD9E0C" stroke-width="1.4" stroke-linejoin="round"></path></svg>';

/* Podpis na belce okna podglądu — składany w buildzie, bo musi być w języku
   strony, a przycisk nosi tylko klucz tłumaczenia. */
function docTitle(lang, key, year) {
  const d = PAGE_DICTS['statute.html'] || {};
  const label = (d[lang] || {})[key] || (d.en || {})[key] || key;
  return year ? `${label} ${year}` : label;
}

/* Tryb konserwacji: zasłona musi wejść PRZED pierwszym malowaniem strony.
   Ścianę rysuje main.js, który idzie z „defer", więc przeglądarka zdążała
   pokazać stronę, zanim skrypt ją zasłonił — odwiedzający (a teraz: Zarząd)
   widział błysk treści przed prośbą o hasło. Pomiar Lighthouse 11.08.2026
   pokazywał to wprost: elementem LCP było zdjęcie hero, mimo włączonej ściany.

   Ten fragment idzie do skryptu w <head>, czyli przed CSS i przed treścią.
   Dokłada klasę „fs-locked” od razu, o ile odwiedzający nie ma zapisanego
   hasła. Znacznik i odcisk czytamy z main.js, żeby nie utrzymywać drugiej
   kopii — po przestawieniu MAINTENANCE na false build przestaje cokolwiek
   wstawiać. Bez JavaScriptu strona zostaje widoczna, tak jak dotąd: to
   zasłona przed przypadkowym gościem, nie zamek. */
const MAIN_JS = readFileSync(join(SRC, 'assets', 'main.js'), 'utf8');
const TRYB_KONSERWACJI = /const MAINTENANCE = true;/.test(MAIN_JS);

function wczesnaSciana() {
  if (!TRYB_KONSERWACJI) return '';
  const odcisk = (MAIN_JS.match(/const REVIEW_DIGEST = '([a-f0-9]+)'/) || [])[1];
  if (!odcisk) throw new Error('Tryb konserwacji włączony, ale nie znalazłem REVIEW_DIGEST w main.js');
  return `try{if(localStorage.getItem('fs-review')!=='${odcisk}')document.documentElement.classList.add('fs-locked')}catch(e){}`;
}

/* Karta z prośbą o hasło wprost w kodzie strony — treść bierzemy z main.js
   (FS_GATE_MAINTENANCE), żeby nie utrzymywać drugiej kopii. Dzięki temu karta
   maluje się zaraz po arkuszu stylów, zamiast czekać na pobranie i wykonanie
   main.js: pomiar PageSpeed z 11.08 pokazywał z tego powodu pierwszy render
   dopiero po 4 s. Karta jest ukryta przez CSS, dopóki nie ma klasy
   „fs-locked" — kto zna hasło, w ogóle jej nie zobaczy. */
function kartaSciany() {
  if (!TRYB_KONSERWACJI) return '';
  const m = MAIN_JS.match(/const FS_GATE_MAINTENANCE = `([\s\S]*?)`;/);
  if (!m) throw new Error('Nie znalazłem FS_GATE_MAINTENANCE w main.js');
  return `<div class="fs-gate">${m[1]}</div>`;
}

/* Kafel OPP obok głównego przycisku na stronie głównej (tylko PL).
   Znak zostaje w oryginalnych barwach na białym kaflu — to oficjalne
   oznaczenie i nie przemalowujemy go pod paletę strony. KRS bez spacji,
   żeby kopiował się prosto do zeznania; czytelność daje rozstrzelenie w CSS. */
function heroOppHtml() {
  return [
    '          <div class="hero-opp">',
    '            <span class="opp-mark"><img src="/uploads/opp-1-5-procent.png" alt="Organizacja pożytku publicznego" width="729" height="308" loading="lazy" decoding="async"></span>',
    '            <span class="opp-txt">',
    '              <span class="opp-label" data-i18n="oppLabel"></span>',
    '              <span class="opp-krs">KRS <b>0000980058</b></span>',
    '            </span>',
    '          </div>'
  ].join('\n');
}

/* Przycisk otwierający statut w oknie podglądu. Ten sam element stoi na
   podstronie „Statut i sprawozdania” i na stronie głównej — różni je tylko
   klucz etykiety, bo teksty tych sekcji są osobne. */
function statuteDocHtml(lang, kluczEtykiety = 'statutePdf') {
  return [
    `        <button type="button" class="doc-link" data-doc="${esc(DOCUMENTS.statuteFile)}" data-doc-title="${escText(docTitle(lang, 'statuteTitle'))}">`,
    `          ${EYE_SVG}`,
    `          <span data-i18n="${kluczEtykiety}"></span>`,
    '        </button>'
  ].join('\n');
}

/* Jeden rok = jeden kafelek, ze wszystkim, co za ten rok mamy: sprawozdanie
   z działalności, bilans, rachunek zysków i strat. Wcześniej rok z kompletem
   dokumentów rozpadał się na dwa kafelki, przez co przy czterech latach
   podstrona pokazywała ich sześć. Najnowszy rok pierwszy. */
function docsGridHtml(lang) {
  const byYear = [...DOCUMENTS.reports].sort((a, b) => String(b.year).localeCompare(String(a.year)));
  const text = (o, l) => o?.[l] || o?.en || o?.pl || '';
  const button = (file, key, year) =>
    `            <button type="button" class="dl" data-doc="${esc(file)}" data-doc-title="${escText(docTitle(lang, key, year))}">` +
    `${EYE_SVG} <span data-i18n="${key}"></span></button>`;

  return byYear.map(r => {
    const maDzialalnosc = !!r.activityFile;
    const maFinanse = !!(r.balanceFile || r.pnlFile);
    if (!maDzialalnosc && !maFinanse) return '';
    const naglowek = maDzialalnosc && maFinanse ? 'docsBoth' : (maDzialalnosc ? 'activityReport' : 'financials');
    const opisy = [
      ...(maDzialalnosc ? [escText(text(r.activityDesc, lang))] : []),
      ...(maFinanse ? [escText(text(r.finDesc, lang))] : [])
    ].filter(Boolean);

    return [
      '        <div class="doc-card reveal">',
      `          <span class="year">${escText(r.year)}</span>`,
      `          <h3 data-i18n="${naglowek}"></h3>`,
      ...opisy.map(o => `          <p>${o}</p>`),
      '          <div class="dl-list">',
      ...(r.activityFile ? [button(r.activityFile, 'activityReport', r.year)] : []),
      ...(r.balanceFile ? [button(r.balanceFile, 'balance', r.year)] : []),
      ...(r.pnlFile ? [button(r.pnlFile, 'pnl', r.year)] : []),
      '          </div>',
      '        </div>'
    ].join('\n');
  }).filter(Boolean).join('\n');
}

/* generate assets/articles.js from content/articles/*.json
   Plus one slimmed file per language: a built page only ever renders its own
   language (switching languages navigates to another URL), so shipping all
   seven costs ~284 kB per page load for nothing. The full file stays for the
   un-built root templates used in local development. */
function writeArticlesJs() {
  mkdirSync(join(SRC, 'assets'), { recursive: true });
  const head = '/* GENERATED from content/articles/*.json by build-langs.mjs — do not edit by hand. */\n';
  const tail = "window.ARTICLES.sort(function (a, b) { return (b.ts || '').localeCompare(a.ts || ''); });\n";
  const dump = a => 'window.ARTICLES = ' + JSON.stringify(a, null, 2).replace(/<\//g, '<\\/') + ';\n';

  writeFileSync(join(SRC, 'assets', 'articles.js'), head + dump(ARTICLES) + tail, 'utf8');

  for (const lang of LANGS) {
    const slim = ARTICLES.map(a => ({
      id: a.id, ts: a.ts, cat: a.cat, img: a.img, images: a.images,
      date: { [lang]: a.date[lang] }, title: { [lang]: a.title[lang] },
      lead: { [lang]: a.lead[lang] }, body: { [lang]: a.body[lang] }
    }));
    writeFileSync(join(SRC, 'assets', `articles-${lang}.js`), head + dump(slim) + tail, 'utf8');
  }
}

/* generate assets/people.js from content/people/*.json — the single source for
   board-council.html and person.html. Unlike articles this file is small
   (6 members), so there is no per-language variant to split out. */
function writePeopleJs() {
  mkdirSync(join(SRC, 'assets'), { recursive: true });
  const people = PEOPLE.map(p => {
    const role = {}, bio = {};
    for (const l of LANGS) {
      role[l] = p.role?.[l] || p.role?.en || p.role?.pl || '';
      const b = p.bio?.[l];
      bio[l] = Array.isArray(b) && b.length ? b : (p.bio?.en || p.bio?.pl || []);
    }
    return { id: p.id, name: p.name, group: p.group, photo: p.photo, role, bio };
  });
  writeFileSync(join(SRC, 'assets', 'people.js'),
    '/* GENERATED from content/people/*.json by build-langs.mjs — do not edit by hand. */\n' +
    'window.PEOPLE = ' + JSON.stringify(people, null, 2).replace(/<\//g, '<\\/') + ';\n', 'utf8');
}

/* Zminifikowana kopia arkusza stylów. Źródłem pozostaje czytelny style.css —
   strony wskazują style.min.css, który powstaje tutaj przy każdym buildzie.
   Minifikacja zachowawcza (komentarze + białe znaki), bez dotykania spacji
   wewnątrz wartości — calc() wymaga spacji wokół +/- i ma je zachować. */
function writeMinCss() {
  const src = readFileSync(join(SRC, 'assets', 'style.css'), 'utf8');
  const min = src
    .replace(/\/\*[\s\S]*?\*\//g, '')      // komentarze
    .replace(/\s*\n\s*/g, '')              // nowe linie z wcięciami
    .replace(/\s*([{};,>])\s*/g, '$1')     // spacje wokół znaków składni
    .replace(/;}/g, '}');
  writeFileSync(join(SRC, 'assets', 'style.min.css'), min, 'utf8');
  return [src.length, min.length];
}
const [cssPrzed, cssPo] = writeMinCss();

/* Zminifikowane kopie skryptów. Źródłem pozostają czytelne, mocno
   skomentowane pliki — strony wskazują wersje .min.js budowane tutaj.

   Świadomie NIE sklejamy linii i nie skracamy nazw: usuwamy tylko komentarze
   oraz wcięcia. Skracanie nazw wymagałoby prawdziwego narzędzia (a build ma
   zero zależności, co jest jego zaletą), a sklejanie linii grozi zmianą
   znaczenia kodu tam, gdzie średnik jest dopisywany automatycznie. Same
   komentarze to w tych plikach ponad połowa objętości.

   Przechodzimy tekst znak po znaku, pilnując, czy jesteśmy w tekście
   („…", '…', `…`) albo w wyrażeniu regularnym — inaczej „//" w adresie
   https:// zostałoby wzięte za początek komentarza i ucięło resztę linii. */
function minifyJs(src) {
  let out = '';
  let i = 0;
  const n = src.length;
  let ostatniZnaczacy = '';           // ostatni niebiały znak — rozstrzyga / jako regex czy dzielenie
  while (i < n) {
    const c = src[i], d = src[i + 1];
    if (c === '/' && d === '/') { while (i < n && src[i] !== '\n') i++; continue; }
    if (c === '/' && d === '*') { i += 2; while (i < n && !(src[i] === '*' && src[i + 1] === '/')) i++; i += 2; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const cudzyslow = c; out += c; i++;
      while (i < n) {
        out += src[i];
        if (src[i] === '\\') { out += src[i + 1] ?? ''; i += 2; continue; }
        if (src[i] === cudzyslow) { i++; break; }
        i++;
      }
      ostatniZnaczacy = cudzyslow;
      continue;
    }
    if (c === '/' && /[(,=:[!&|?{};+\-*%~^<>]/.test(ostatniZnaczacy || '(')) {
      out += c; i++;                  // wyrażenie regularne — przepisujemy dosłownie
      let wKlasie = false;
      while (i < n) {
        out += src[i];
        if (src[i] === '\\') { out += src[i + 1] ?? ''; i += 2; continue; }
        if (src[i] === '[') wKlasie = true;
        else if (src[i] === ']') wKlasie = false;
        else if (src[i] === '/' && !wKlasie) { i++; break; }
        i++;
      }
      while (i < n && /[gimsuy]/.test(src[i])) { out += src[i]; i++; }
      ostatniZnaczacy = '/';
      continue;
    }
    out += c;
    if (!/\s/.test(c)) ostatniZnaczacy = c;
    i++;
  }
  return out.split('\n').map(l => l.trim()).filter(Boolean).join('\n');
}

function writeMinJs(nazwa) {
  const src = readFileSync(join(SRC, 'assets', nazwa + '.js'), 'utf8');
  const min = minifyJs(src);
  writeFileSync(join(SRC, 'assets', nazwa + '.min.js'), min, 'utf8');
  return [nazwa, src.length, min.length];
}
const JS_MIN = ['main', 'docviewer'].map(writeMinJs);

let written = 0;
const removed = [];
writeArticlesJs();
writePeopleJs();
const articleTemplate = readFileSync(join(SRC, 'article.html'), 'utf8');
for (const lang of LANGS) {
  if (lang !== 'en') mkdirSync(join(SRC, DIR[lang]), { recursive: true });
  for (const page of PAGES) {
    const src = readFileSync(join(SRC, page), 'utf8'); // root files are the templates
    writeFileSync(join(SRC, DIR[lang], page), transform(src, page, lang), 'utf8');
    written++;
  }
  // one static page per article: article-<id>.html
  for (const a of ARTICLES) {
    const art = { id: a.id, title: a.title[lang], desc: a.lead[lang], img: a.img, ts: a.ts };
    writeFileSync(join(SRC, DIR[lang], `article-${a.id}.html`), transform(articleTemplate, 'article.html', lang, art), 'utf8');
    written++;
  }
  /* Deleting an entry in the panel removes content/articles/<id>.json, but its
     already-generated page would stay on the server and keep answering at its
     old URL. Sweep those away — the article template (article.html, no dash)
     is not touched. */
  for (const f of readdirSync(join(SRC, DIR[lang] || '.'))) {
    const id = /^article-(.+)\.html$/.exec(f)?.[1];
    if (id && !ARTICLES.some(a => a.id === id)) {
      rmSync(join(SRC, DIR[lang], f));
      removed.push(`${DIR[lang]}${f}`);
    }
  }
}

/* 404.html is hand-written (Vercel serves it for any unmatched path, so it
   cannot be built per language — it detects the language from the URL).
   Only its released-language list is kept in step with PUBLIC_LANGS here. */
const notFound = join(SRC, '404.html');
writeFileSync(notFound,
  readFileSync(notFound, 'utf8').replace(
    /window\.FS_PUBLIC_LANGS = \[[^\]]*\];/,
    `window.FS_PUBLIC_LANGS = ${JSON.stringify(PUBLIC_LANGS)};`),
  'utf8');

// sitemap + robots — released languages only
/* article.html i person.html to szablony (patrz noindex w transform) — do mapy
   strony trafiają tylko adresy, które mają własną, samodzielną treść. */
const STRONY_W_MAPIE = PAGES.filter(p => p !== 'article.html' && p !== 'person.html');
const urls = PUBLIC_LANGS.flatMap(l => [
  ...STRONY_W_MAPIE.map(p => pageUrl(l, p)),
  ...ARTICLES.map(a => pageUrl(l, `article-${a.id}.html`))
]);
const sm = ['<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(u => `  <url><loc>${u}</loc></url>`),
  '</urlset>', ''].join('\n');
writeFileSync(join(SRC, 'sitemap.xml'), sm, 'utf8');
/* /admin is the editing panel, not a page of the site — it also carries a
   noindex tag, but keeping crawlers out of it entirely is tidier.
   Bez ukośnika na końcu: „Disallow: /admin/” nie obejmuje samego „/admin”,
   a od przejścia na adresy bez rozszerzenia panel odpowiada właśnie tam. */
writeFileSync(join(SRC, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');

console.log(`pages written: ${written} (${LANGS.length} langs x [${PAGES.length} pages + ${ARTICLES.length} articles]) + sitemap.xml + robots.txt`);
if (removed.length) console.log(`pages removed (entry no longer exists): ${removed.join(', ')}`);
console.log('root = EN; subdirs: pl/ cz/ it/ sk/ de/ fr/');
console.log(`released to the public: ${PUBLIC_LANGS.join(', ')} (${urls.length} URLs in sitemap)`);
console.log(`built but hidden ("coming soon", noindex): ${LANGS.filter(l => !PUBLIC_LANGS.includes(l)).join(', ') || 'none'}`);
/* Widoczne w logu każdego builda na Vercelu, dopóki nie zniknie powód —
   po przepięciu domeny łatwo o tym zapomnieć, a og:image i logo w danych
   strukturalnych zostałyby wtedy na adresie *.vercel.app. */
if (OG_SITE !== SITE) {
  console.log(`\nDO ZROBIENIA PO PRZEPIECIU DOMENY: og:image i logo wskazuja na ${OG_SITE},`);
  console.log(`a strona na ${SITE}. Gdy ${SITE} juz odpowiada, ustaw OG_SITE = SITE`);
  console.log('i podmien site_url + base_url w design-v2/admin/config.yml. Szczegoly: PRZEPIECIE-DOMENY.md\n');
}
