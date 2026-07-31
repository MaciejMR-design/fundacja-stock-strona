/* Automatyczne tłumaczenie brakujących wersji językowych wpisów (DeepL API).
   Zasada: polski jest źródłem prawdy. Dla każdego wpisu w content/articles/
   uzupełnia PUSTE pola en/cz/it/sk/de/fr tłumaczeniem z pl. Pola już wypełnione
   (ręcznie lub wcześniej przetłumaczone) nie są nadpisywane.
   Wymaga zmiennej środowiskowej DEEPL_API_KEY (darmowy plan: 500k znaków/mies.).
   Uruchamiane przez GitHub Action (.github/workflows/translate.yml) lub ręcznie:
     DEEPL_API_KEY=... node translate-content.mjs */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const KEY = process.env.DEEPL_API_KEY;
if (!KEY) { console.log('Brak DEEPL_API_KEY — pomijam tłumaczenie.'); process.exit(0); }
const API = KEY.endsWith(':fx') ? 'https://api-free.deepl.com/v2/translate' : 'https://api.deepl.com/v2/translate';
const TARGETS = { en: 'EN-GB', cz: 'CS', it: 'IT', sk: 'SK', de: 'DE', fr: 'FR' };
/* nazwy własne, których DeepL ma nie ruszać */
const GLOSSARY = ['Fundacja Stock', 'Stock Foundation', 'Spirit of Ukraine', 'Flavours of Change', 'Homo Faber', 'Stock Polska', 'Stock Spirits Group'];

async function translate(texts, target) {
  const masked = texts.map(t => { let s = t; GLOSSARY.forEach((g, i) => { s = s.split(g).join(`<x id="${i}"/>`); }); return s; });
  const r = await fetch(API, {
    method: 'POST',
    headers: { 'Authorization': `DeepL-Auth-Key ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: masked, source_lang: 'PL', target_lang: target, tag_handling: 'xml', ignore_tags: ['x'] })
  });
  if (!r.ok) throw new Error(`DeepL ${r.status}: ${await r.text()}`);
  const data = await r.json();
  return data.translations.map(t => { let s = t.text; GLOSSARY.forEach((g, i) => { s = s.split(`<x id="${i}"/>`).join(g); }); return s; });
}

const dir = join(import.meta.dirname, 'content', 'articles');
let changed = 0;
for (const f of readdirSync(dir).filter(x => x.endsWith('.json'))) {
  const path = join(dir, f);
  const a = JSON.parse(readFileSync(path, 'utf8').replace(/^﻿/, ''));
  let dirty = false;
  for (const [lang, target] of Object.entries(TARGETS)) {
    const jobs = [];
    for (const key of ['title', 'lead']) {
      if (a[key]?.pl && !a[key][lang]) jobs.push({ set: v => { a[key][lang] = v; }, text: a[key].pl });
    }
    if (Array.isArray(a.body?.pl) && a.body.pl.length && (!Array.isArray(a.body[lang]) || !a.body[lang].length)) {
      jobs.push({ set: v => { a.body[lang] = v; }, text: a.body.pl, isList: true });
    }
    if (!jobs.length) continue;
    for (const job of jobs) {
      const texts = job.isList ? job.text : [job.text];
      const out = await translate(texts, target);
      job.set(job.isList ? out : out[0]);
    }
    dirty = true;
  }
  if (dirty) { writeFileSync(path, JSON.stringify(a, null, 2) + '\n', 'utf8'); changed++; console.log('przetłumaczono braki:', f); }
}
console.log(changed ? `Zaktualizowano plików: ${changed}` : 'Wszystkie wpisy mają komplet tłumaczeń.');
