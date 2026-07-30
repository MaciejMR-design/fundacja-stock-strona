/* One-time migration: pull editable content out of the code into content/.
   - PAGE_I18N dicts from each root HTML  -> content/pages/<page>.json
     (the inline dict is wrapped in CONTENT markers that build-langs.mjs re-injects)
   - articles from assets/articles.js     -> content/articles/<id>.json
   Run once:  node extract-content.mjs   (idempotent: skips already-migrated files) */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { createRequire } from 'module';
import vm from 'vm';

const ROOT = import.meta.dirname;
const SRC = join(ROOT, 'design-v2');
const PAGES = ['index.html', 'about-us.html', 'news.html', 'article.html', 'statute.html', 'board-council.html', 'person.html', 'contact.html', 'privacy-policy.html'];

mkdirSync(join(ROOT, 'content', 'pages'), { recursive: true });
mkdirSync(join(ROOT, 'content', 'articles'), { recursive: true });

/* ---- pages: extract PAGE_I18N ---- */
for (const page of PAGES) {
  const file = join(SRC, page);
  let html = readFileSync(file, 'utf8');
  if (html.includes('/* CONTENT:PAGE_I18N */')) { console.log(page, '- already migrated'); continue; }
  const m = html.match(/const PAGE_I18N = (\{[\s\S]*?\n\});/);
  if (!m) { console.log(page, '- PAGE_I18N not found!'); continue; }
  const dict = vm.runInNewContext('(' + m[1] + ')');
  const jsonName = page.replace('.html', '') + '.json';
  writeFileSync(join(ROOT, 'content', 'pages', jsonName), JSON.stringify(dict, null, 2) + '\n', 'utf8');
  html = html.replace(m[0], 'const PAGE_I18N = /* CONTENT:PAGE_I18N */{}/* /CONTENT */;');
  writeFileSync(file, html, 'utf8');
  console.log(page, '->', 'content/pages/' + jsonName, Object.keys(dict).join(','));
}

/* ---- articles: split articles.js ---- */
const require = createRequire(import.meta.url);
global.window = {};
require(join(SRC, 'assets', 'articles.js'));
for (const a of global.window.ARTICLES) {
  writeFileSync(join(ROOT, 'content', 'articles', a.id + '.json'), JSON.stringify(a, null, 2) + '\n', 'utf8');
}
console.log('articles:', global.window.ARTICLES.length, '-> content/articles/*.json');
