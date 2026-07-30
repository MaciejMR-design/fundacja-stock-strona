/* Static language builds for the Stock Foundation site.
   English lives at the root (default), pl/cz/it in subdirectories.
   Run:  node build-langs.mjs
   Idempotent — safe to re-run after any content change.
   NOTE: SITE must match the production domain at launch. */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

/* Editable content lives in content/ (managed via the /admin CMS panel):
   - content/articles/<id>.json  -> generates design-v2/assets/articles.js
   - content/pages/<page>.json   -> injected as PAGE_I18N into each page */
const CONTENT = join(import.meta.dirname, 'content');
const stripBom = s => s.replace(/^﻿/, '');
const ARTICLES = readdirSync(join(CONTENT, 'articles'))
  .filter(f => f.endsWith('.json'))
  .map(f => JSON.parse(stripBom(readFileSync(join(CONTENT, 'articles', f), 'utf8'))))
  .sort((a, b) => (b.ts || '').localeCompare(a.ts || ''));
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
const LANGS = ['en', 'pl', 'cz', 'it'];                     // en = root
const DIR = { en: '', pl: 'pl/', cz: 'cz/', it: 'it/' };
const HTML_LANG = { en: 'en', pl: 'pl', cz: 'cs', it: 'it' };
const HREFLANG = { en: 'en', pl: 'pl', cz: 'cs', it: 'it' };
const OG_LOCALE = { en: 'en_GB', pl: 'pl_PL', cz: 'cs_CZ', it: 'it_IT' };

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
      'La Fondazione Stock (fond. 2022, Lublino) aiuta rifugiati e comunità locali e promuove l’arte come terapia. Scopri le nostre ultime azioni e notizie.']
  },
  'about-us.html': {
    en: ['About us — Stock Foundation',
      'The story of the Stock Foundation — from emergency aid for Ukrainian refugees in Lublin to art, scholarships and community programs.'],
    pl: ['O nas — Fundacja Stock',
      'Historia Fundacji Stock — od pomocy doraźnej dla uchodźców z Ukrainy w Lublinie po sztukę, stypendia i programy społeczne.'],
    cz: ['O nás — Nadace Stock',
      'Příběh Nadace Stock — od nouzové pomoci ukrajinským uprchlíkům v Lublinu po umění, stipendia a komunitní programy.'],
    it: ['Chi siamo — Fondazione Stock',
      'La storia della Fondazione Stock — dall’aiuto d’emergenza per i rifugiati ucraini a Lublino ad arte, borse di studio e programmi sociali.']
  },
  'news.html': {
    en: ['News — Stock Foundation',
      'Latest news and recurring actions from the Stock Foundation — Art Encounters, scholarships, training and community initiatives, updated regularly.'],
    pl: ['Aktualności — Fundacja Stock',
      'Aktualności i cykliczne akcje Fundacji Stock — spotkania ze sztuką dla seniorów w Lublinie, stypendia, szkolenia i inicjatywy społeczne.'],
    cz: ['Novinky — Nadace Stock',
      'Novinky a pravidelné akce Nadace Stock — setkání s uměním, stipendia, školení a komunitní iniciativy.'],
    it: ['Notizie — Fondazione Stock',
      'Notizie e azioni ricorrenti della Fondazione Stock — incontri con l’arte, borse di studio, formazione e iniziative per la comunità.']
  },
  'article.html': {
    en: ['News — Stock Foundation',
      'News and stories from the Stock Foundation — helping refugees and communities and promoting art as therapy.'],
    pl: ['Aktualności — Fundacja Stock',
      'Aktualności i historie Fundacji Stock — pomoc uchodźcom i społecznościom oraz sztuka jako terapia.'],
    cz: ['Novinky — Nadace Stock',
      'Novinky a příběhy Nadace Stock — pomoc uprchlíkům a komunitám a umění jako terapie.'],
    it: ['Notizie — Fondazione Stock',
      'Notizie e storie della Fondazione Stock — aiuto a rifugiati e comunità e arte come terapia.']
  },
  'statute.html': {
    en: ['Statute & Reports — Stock Foundation',
      'Statute, annual reports and financial statements of the Stock Foundation — full transparency.'],
    pl: ['Statut i sprawozdania — Fundacja Stock',
      'Statut, sprawozdania roczne i finansowe Fundacji Stock — pełna przejrzystość.'],
    cz: ['Statut a zprávy — Nadace Stock',
      'Statut, výroční zprávy a účetní závěrky Nadace Stock — plná transparentnost.'],
    it: ['Statuto e rapporti — Fondazione Stock',
      'Statuto, rapporti annuali e bilanci della Fondazione Stock — piena trasparenza.']
  },
  'board-council.html': {
    en: ['Council & Board — Stock Foundation',
      'Meet the Council and the Board of Directors of the Stock Foundation.'],
    pl: ['Rada i Zarząd — Fundacja Stock',
      'Poznaj Radę i Zarząd Fundacji Stock.'],
    cz: ['Rada a představenstvo — Nadace Stock',
      'Poznejte radu a představenstvo Nadace Stock.'],
    it: ['Consiglio e direzione — Fondazione Stock',
      'Il Consiglio e la direzione della Fondazione Stock.']
  },
  'person.html': {
    en: ['Council & Board — Stock Foundation', 'Council and Board of the Stock Foundation.'],
    pl: ['Rada i Zarząd — Fundacja Stock', 'Rada i Zarząd Fundacji Stock.'],
    cz: ['Rada a představenstvo — Nadace Stock', 'Rada a představenstvo Nadace Stock.'],
    it: ['Consiglio e direzione — Fondazione Stock', 'Consiglio e direzione della Fondazione Stock.']
  },
  'contact.html': {
    en: ['Contact — Stock Foundation',
      'Contact the Stock Foundation in Lublin — address, phone and e-mail.'],
    pl: ['Kontakt — Fundacja Stock',
      'Skontaktuj się z Fundacją Stock w Lublinie — adres, telefon i e-mail.'],
    cz: ['Kontakt — Nadace Stock',
      'Kontaktujte Nadaci Stock v Lublinu — adresa, telefon a e-mail.'],
    it: ['Contatti — Fondazione Stock',
      'Contatta la Fondazione Stock a Lublino — indirizzo, telefono ed e-mail.']
  },
  'privacy-policy.html': {
    en: ['Privacy and Cookies — Stock Foundation', 'Privacy and cookie policy of the Stock Foundation website.'],
    pl: ['Prywatność i cookies — Fundacja Stock', 'Polityka prywatności i cookies strony Fundacji Stock.'],
    cz: ['Soukromí a cookies — Nadace Stock', 'Zásady ochrany soukromí a cookies webu Nadace Stock.'],
    it: ['Privacy e cookie — Fondazione Stock', 'Informativa privacy e cookie del sito della Fondazione Stock.']
  }
};

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const pageUrl = (lang, page) => SITE + '/' + DIR[lang] + (page === 'index.html' ? '' : page);

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

  // canonical + hreflang alternates
  h = h.replace(/<!-- lang-alternates -->[\s\S]*?<!-- \/lang-alternates -->\n?/, '');
  const alt = ['<!-- lang-alternates -->',
    `<link rel="canonical" href="${pageUrl(lang, page)}">`,
    ...LANGS.map(l => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${pageUrl(l, page)}">`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl('en', page)}">`,
    '<!-- /lang-alternates -->'].join('\n');
  h = h.replace(/(<meta name="twitter:card" content="[^"]*">)/, `$1\n${alt}`);

  // per-URL language marker (read by main.js and page scripts before render)
  h = h.replace(/<script data-fs-lang>[\s\S]*?<\/script>\n?/, '');
  h = h.replace(/(<link rel="icon")/,
    `<script data-fs-lang>window.FS_LANG='${lang}';try{localStorage.setItem('fs-lang','${lang}')}catch(e){}</script>\n$1`);
  // per-URL article marker (static article pages)
  h = h.replace(/<script data-fs-article>[\s\S]*?<\/script>\n?/, '');
  if (art) h = h.replace(/(<link rel="icon")/, `<script data-fs-article>window.FS_ARTICLE='${art.id}';</script>\n$1`);

  // root-absolute assets/uploads so subdirectory pages share one copy
  h = h.replace(/(src|href)="(assets|uploads)\//g, '$1="/$2/');

  // inject the editable PAGE_I18N dictionary from content/pages/<page>.json
  const dict = PAGE_DICTS[tplPage];
  if (dict) {
    const json = JSON.stringify(dict).replace(/<\//g, '<\\/');
    h = h.replace(/\/\* CONTENT:PAGE_I18N \*\/[\s\S]*?\/\* \/CONTENT \*\//,
      `/* CONTENT:PAGE_I18N */${json}/* /CONTENT */`);
  }
  return h;
}

/* generate assets/articles.js from content/articles/*.json */
function writeArticlesJs() {
  const out = '/* GENERATED from content/articles/*.json by build-langs.mjs — do not edit by hand. */\n' +
    'window.ARTICLES = ' + JSON.stringify(ARTICLES, null, 2).replace(/<\//g, '<\\/') + ';\n' +
    "window.ARTICLES.sort(function (a, b) { return (b.ts || '').localeCompare(a.ts || ''); });\n";
  writeFileSync(join(SRC, 'assets', 'articles.js'), out, 'utf8');
}

let written = 0;
writeArticlesJs();
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
    const art = { id: a.id, title: a.title[lang], desc: a.lead[lang], img: a.img };
    writeFileSync(join(SRC, DIR[lang], `article-${a.id}.html`), transform(articleTemplate, 'article.html', lang, art), 'utf8');
    written++;
  }
}

// sitemap + robots
const urls = LANGS.flatMap(l => [
  ...PAGES.map(p => pageUrl(l, p)),
  ...ARTICLES.map(a => pageUrl(l, `article-${a.id}.html`))
]);
const sm = ['<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(u => `  <url><loc>${u}</loc></url>`),
  '</urlset>', ''].join('\n');
writeFileSync(join(SRC, 'sitemap.xml'), sm, 'utf8');
writeFileSync(join(SRC, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');

console.log(`pages written: ${written} (4 langs x [${PAGES.length} pages + ${ARTICLES.length} articles]) + sitemap.xml + robots.txt`);
console.log('root = EN; subdirs: pl/ cz/ it/');
