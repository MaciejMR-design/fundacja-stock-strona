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
const CATEGORIES = ['art', 'community', 'scholar'];
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
    if (!CATEGORIES.includes(a.cat)) problems.push(`${where}: kategoria „${a.cat}” — dozwolone: ${CATEGORIES.join(', ')}`);
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

const SITE = 'https://fundacjastock.pl';
/* og:image must resolve TODAY (social-share preview), so it points at the live
   deployment. When the site moves to fundacjastock.pl, set OG_SITE = SITE. */
const OG_SITE = 'https://fundacja-stock-design.vercel.app';
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
    en: ['Council & Board — Stock Foundation',
      'Meet the Council and the Board of Directors of the Stock Foundation.'],
    pl: ['Rada i Zarząd — Fundacja Stock',
      'Poznaj Radę i Zarząd Fundacji Stock.'],
    cz: ['Rada a představenstvo — Nadace Stock',
      'Poznejte radu a představenstvo Nadace Stock.'],
    it: ['Consiglio e direzione — Fondazione Stock',
      'Il Consiglio e la direzione della Fondazione Stock.'],
    sk: ['Rada a predstavenstvo — Nadácia Stock',
      'Spoznajte radu a predstavenstvo Nadácie Stock.'],
    de: ['Stiftungsrat & Vorstand — Stiftung Stock',
      'Lernen Sie den Stiftungsrat und den Vorstand der Stiftung Stock kennen.'],
    fr: ['Conseil et direction — Fondation Stock',
      'Découvrez le Conseil et la direction de la Fondation Stock.']
  },
  'person.html': {
    en: ['Council & Board — Stock Foundation', 'Council and Board of the Stock Foundation.'],
    pl: ['Rada i Zarząd — Fundacja Stock', 'Rada i Zarząd Fundacji Stock.'],
    cz: ['Rada a představenstvo — Nadace Stock', 'Rada a představenstvo Nadace Stock.'],
    it: ['Consiglio e direzione — Fondazione Stock', 'Consiglio e direzione della Fondazione Stock.'],
    sk: ['Rada a predstavenstvo — Nadácia Stock', 'Rada a predstavenstvo Nadácie Stock.'],
    de: ['Stiftungsrat & Vorstand — Stiftung Stock', 'Stiftungsrat und Vorstand der Stiftung Stock.'],
    fr: ['Conseil et direction — Fondation Stock', 'Conseil et direction de la Fondation Stock.']
  },
  'contact.html': {
    en: ['Contact — Stock Foundation',
      'Contact the Stock Foundation in Lublin — address, phone and e-mail.'],
    pl: ['Kontakt — Fundacja Stock',
      'Skontaktuj się z Fundacją Stock w Lublinie — adres, telefon i e-mail.'],
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
    en: ['Privacy and Cookies — Stock Foundation', 'Privacy and cookie policy of the Stock Foundation website.'],
    pl: ['Prywatność i cookies — Fundacja Stock', 'Polityka prywatności i cookies strony Fundacji Stock.'],
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
const pageUrl = (lang, page) => SITE + '/' + DIR[lang] + (page === 'index.html' ? '' : page);

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
      contactType: 'customer service', email: 'pawel.jablonski@stockspirits.com',
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
  if (art) { title = `${art.title} — Stock Foundation`; desc = art.desc; page = `article-${art.id}.html`; }
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
  const alt = ['<!-- lang-alternates -->',
    ...(published ? [] : ['<meta name="robots" content="noindex,follow">']),
    `<link rel="canonical" href="${pageUrl(lang, page)}">`,
    ...PUBLIC_LANGS.map(l => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${pageUrl(l, page)}">`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl('en', page)}">`,
    '<!-- /lang-alternates -->'].join('\n');
  h = h.replace(/(<meta name="twitter:card" content="[^"]*">)/, `$1\n${alt}`);

  // per-URL language marker (read by main.js and page scripts before render)
  h = h.replace(/<script data-fs-lang>[\s\S]*?<\/script>\n?/, '');
  h = h.replace(/(<link rel="icon")/,
    `<script data-fs-lang>window.FS_LANG='${lang}';window.FS_PUBLIC_LANGS=${JSON.stringify(PUBLIC_LANGS)};try{localStorage.setItem('fs-lang','${lang}')}catch(e){}</script>\n$1`);
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

  // inject the document list from content/documents.json (statute page only)
  if (tplPage === 'statute.html') {
    h = fillBlock(h, 'STATUTE_DOC', statuteDocHtml());
    h = fillBlock(h, 'DOCS', docsGridHtml(lang));
  }
  return h;
}

/* Marker-based HTML injection: <!-- CONTENT:NAME -->…<!-- /CONTENT --> is
   replaced on every run, so the build stays idempotent even though the EN pass
   writes back over the root templates it just read. */
function fillBlock(html, name, inner) {
  return html.replace(
    new RegExp(`<!-- CONTENT:${name} -->[\\s\\S]*?<!-- /CONTENT -->`),
    `<!-- CONTENT:${name} -->\n${inner}\n      <!-- /CONTENT -->`);
}

function statuteDocHtml() {
  return [
    `        <a href="${esc(DOCUMENTS.statuteFile)}" class="doc-link" target="_blank" rel="noopener">`,
    '          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 2 h7 l3 3 v11 h-10 Z M11 2 v3 h3 M6.5 9 h5 M6.5 12 h5" stroke="#CD9E0C" stroke-width="1.5" stroke-linejoin="round"></path></svg>',
    '          <span data-i18n="statutePdf"></span>',
    '        </a>'
  ].join('\n');
}

/* Activity reports first, then financial statements — each group by year,
   oldest first. A year shows up in a group only if it has the files for it. */
function docsGridHtml(lang) {
  const byYear = [...DOCUMENTS.reports].sort((a, b) => String(a.year).localeCompare(String(b.year)));
  const text = (o, l) => o?.[l] || o?.en || o?.pl || '';
  const card = (year, headingKey, descHtml, links) => [
    '        <div class="doc-card reveal">',
    `          <span class="year">${escText(year)}</span>`,
    `          <h3 data-i18n="${headingKey}"></h3>`,
    ...(descHtml ? [`          <p>${descHtml}</p>`] : []),
    ...links,
    '        </div>'
  ].join('\n');

  const cards = [];
  for (const r of byYear.filter(r => r.activityFile)) {
    cards.push(card(r.year, 'activityReport', escText(text(r.activityDesc, lang)), [
      `          <a href="${esc(r.activityFile)}" class="dl" target="_blank" rel="noopener">↓ <span data-i18n="download"></span> (PDF)</a>`
    ]));
  }
  for (const r of byYear.filter(r => r.balanceFile || r.pnlFile)) {
    const links = [
      ...(r.balanceFile ? [`            <a href="${esc(r.balanceFile)}" class="dl" target="_blank" rel="noopener">↓ <span data-i18n="balance"></span></a>`] : []),
      ...(r.pnlFile ? [`            <a href="${esc(r.pnlFile)}" class="dl" target="_blank" rel="noopener">↓ <span data-i18n="pnl"></span></a>`] : [])
    ];
    cards.push(card(r.year, 'financials', escText(text(r.finDesc, lang)),
      ['          <div style="display:flex;gap:18px;flex-wrap:wrap;">', ...links, '          </div>']));
  }
  return cards.join('\n');
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
const urls = PUBLIC_LANGS.flatMap(l => [
  ...PAGES.map(p => pageUrl(l, p)),
  ...ARTICLES.map(a => pageUrl(l, `article-${a.id}.html`))
]);
const sm = ['<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(u => `  <url><loc>${u}</loc></url>`),
  '</urlset>', ''].join('\n');
writeFileSync(join(SRC, 'sitemap.xml'), sm, 'utf8');
/* /admin is the editing panel, not a page of the site — it also carries a
   noindex tag, but keeping crawlers out of it entirely is tidier. */
writeFileSync(join(SRC, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');

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
