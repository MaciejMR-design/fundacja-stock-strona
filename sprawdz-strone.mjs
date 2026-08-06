/* Kontrola wygenerowanej strony: martwe odnośniki, brakujące pliki, metadane,
   dostępność, dane strukturalne, mapa strony, waga plików.
   Uruchomienie:  node sprawdz-strone.mjs
   Nic nie zmienia — tylko czyta katalog design-v2 i wypisuje znaleziska.

   Uwaga o dwóch stronach-szablonach: „article” (zapasowy adres dla starych
   odnośników z kotwicą) i „person” (profil dobierany kotwicą) celowo mają
   noindex i celowo nie ma ich w mapie strony — patrz build-langs.mjs. */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = 'design-v2';
const JEZYKI = ['pl', 'cz', 'it', 'sk', 'de', 'fr'];
const PUBLICZNE = ['en', 'pl'];
const SITE = 'https://fundacjastock.pl';
const SZABLONY = ['article', 'person'];   // celowo poza indeksem i mapą strony

const znaleziska = [];
const dodaj = (waga, kategoria, opis, gdzie) => znaleziska.push({ waga, kategoria, opis, gdzie });

/* ---- zbieranie plików ---- */
const strony = [];
(function zbierz(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) {
      if (['uploads', 'assets', 'admin'].includes(f)) continue;
      zbierz(p);
    } else if (f.endsWith('.html')) strony.push(p);
  }
})(ROOT);

const jezykPliku = p => {
  const czesci = relative(ROOT, p).split(/[\\/]/);
  return JEZYKI.includes(czesci[0]) ? czesci[0] : 'en';
};
const nazwaPliku = p => relative(ROOT, p).split(/[\\/]/).pop().replace(/\.html$/, '');

/* ---- mapowanie adresu na plik ---- */
function adresNaPlik(adres) {
  const czysty = adres.split('#')[0].split('?')[0];
  if (czysty === '/') return join(ROOT, 'index.html');
  const czesci = czysty.replace(/^\//, '').split('/');
  if (czesci.length === 1 && JEZYKI.includes(czesci[0])) return join(ROOT, czesci[0], 'index.html');
  return join(ROOT, ...czesci) + (czysty.match(/\.[a-z0-9]+$/i) ? '' : '.html');
}

/* ---- kontrole ---- */
const tytuly = new Map();      // jezyk -> tytul -> [pliki]
const opisy = new Map();

for (const plik of strony) {
  const s = readFileSync(plik, 'utf8');
  const jezyk = jezykPliku(plik);
  const nazwa = nazwaPliku(plik);
  const gdzie = relative(ROOT, plik).replace(/\\/g, '/');
  const to404 = nazwa === '404';

  /* odnośniki wewnętrzne */
  for (const m of s.matchAll(/href="(\/[^"#]*)(#[^"]*)?"/g)) {
    const cel = m[1];
    if (cel.startsWith('/admin')) continue;
    const docelowy = adresNaPlik(cel);
    if (!existsSync(docelowy)) dodaj('błąd', 'odnośniki', `martwy odnośnik do ${cel}`, gdzie);
  }

  /* obrazki */
  for (const m of s.matchAll(/<img\b([^>]*)>/g)) {
    const atr = m[1];
    const src = (atr.match(/src="([^"]+)"/) || [])[1];
    if (src && src.startsWith('/') && !existsSync(join(ROOT, src.replace(/^\//, '')))) {
      dodaj('błąd', 'obrazki', `brak pliku ${src}`, gdzie);
    }
    if (!/\balt=/.test(atr)) dodaj('uwaga', 'dostępność', `<img> bez atrybutu alt (${(src || '?').slice(0, 60)})`, gdzie);
    /* Świadomie nie sprawdzamy braku width/height. Każdy kontener zdjęcia
       (.card-media, .article-cover, .person .photo, .photo-collage) ma w CSS
       ustalone proporcje, więc miejsce jest zarezerwowane, zanim zdjęcie się
       wczyta, i układ nie przeskakuje. Ta kontrola dawała 350 fałszywych
       alarmów — sprawdzone 06.08.2026. */
  }

  /* tytuł i opis */
  const tytul = (s.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  const opis = (s.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!tytul) dodaj('błąd', 'seo', 'brak <title>', gdzie);
  if (!opis && !to404) dodaj('błąd', 'seo', 'brak meta description', gdzie);
  if (tytul.length > 65) dodaj('drobiazg', 'seo', `tytuł ma ${tytul.length} znaków (Google ucina ~60)`, gdzie);
  if (opis && (opis.length < 70 || opis.length > 165)) {
    dodaj('drobiazg', 'seo', `opis ma ${opis.length} znaków (optymalnie 70–160)`, gdzie);
  }
  if (!to404) {
    if (SZABLONY.includes(nazwa)) { /* szablony powielają tytuł listy — nieindeksowane, nie liczymy */ }
    else {
    if (!tytuly.has(jezyk)) tytuly.set(jezyk, new Map());
    if (!opisy.has(jezyk)) opisy.set(jezyk, new Map());
    (tytuly.get(jezyk).get(tytul) || tytuly.get(jezyk).set(tytul, []).get(tytul)).push(gdzie);
    (opisy.get(jezyk).get(opis) || opisy.get(jezyk).set(opis, []).get(opis)).push(gdzie);
    }
  }

  /* nagłówki */
  const h1 = [...s.matchAll(/<h1\b/g)].length;
  if (h1 === 0 && !to404) dodaj('uwaga', 'seo', 'brak nagłówka H1 w kodzie strony', gdzie);
  if (h1 > 1) dodaj('uwaga', 'seo', `${h1} nagłówki H1 na jednej stronie`, gdzie);

  /* canonical + hreflang */
  const canonical = (s.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!canonical && !to404) dodaj('błąd', 'seo', 'brak adresu kanonicznego', gdzie);
  const hreflangi = [...s.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map(m => m[1]);
  if (!to404 && PUBLICZNE.includes(jezyk)) {
    for (const l of ['en', 'pl', 'x-default']) {
      if (!hreflangi.includes(l)) dodaj('uwaga', 'seo', `brak powiązania hreflang „${l}”`, gdzie);
    }
  }

  /* noindex tam, gdzie trzeba */
  const maNoindex = /<meta name="robots" content="[^"]*noindex/.test(s);
  if (!PUBLICZNE.includes(jezyk) && !maNoindex) {
    dodaj('błąd', 'seo', `wersja ${jezyk} bez noindex — niegotowe tłumaczenie może trafić do Google`, gdzie);
  }
  if (PUBLICZNE.includes(jezyk) && maNoindex && !to404 && !SZABLONY.includes(nazwa)) {
    dodaj('błąd', 'seo', 'publiczna strona z noindex', gdzie);
  }

  /* dane strukturalne */
  for (const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { dodaj('błąd', 'dane strukturalne', 'niepoprawny JSON-LD: ' + e.message, gdzie); }
  }

  /* atrybut lang */
  const langAttr = (s.match(/<html lang="([^"]+)"/) || [])[1];
  const oczekiwany = { en: 'en', pl: 'pl', cz: 'cs', it: 'it', sk: 'sk', de: 'de', fr: 'fr' }[jezyk];
  if (langAttr !== oczekiwany) dodaj('uwaga', 'dostępność', `<html lang="${langAttr}">, a powinno być "${oczekiwany}"`, gdzie);

  /* odnośniki zewnętrzne bez zabezpieczenia */
  for (const m of s.matchAll(/<a\b([^>]*target="_blank"[^>]*)>/g)) {
    if (!/rel="[^"]*noopener/.test(m[1])) dodaj('uwaga', 'bezpieczeństwo', 'odnośnik target="_blank" bez rel="noopener"', gdzie);
  }
}

/* duplikaty tytułów i opisów */
for (const [jezyk, mapa] of tytuly) {
  for (const [tytul, pliki] of mapa) {
    if (pliki.length > 1) dodaj('uwaga', 'seo', `ten sam tytuł na ${pliki.length} stronach (${jezyk}): „${tytul.slice(0, 50)}…” — ${pliki.slice(0, 3).join(', ')}`, '—');
  }
}
for (const [jezyk, mapa] of opisy) {
  for (const [opis, pliki] of mapa) {
    if (pliki.length > 1 && opis) dodaj('uwaga', 'seo', `ten sam opis na ${pliki.length} stronach (${jezyk}) — ${pliki.slice(0, 3).join(', ')}`, '—');
  }
}

/* mapa strony */
const mapa = readFileSync(join(ROOT, 'sitemap.xml'), 'utf8');
const adresyMapy = [...mapa.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(SITE, ''));
for (const a of adresyMapy) {
  if (!existsSync(adresNaPlik(a))) dodaj('błąd', 'mapa strony', `adres ${a} nie ma odpowiadającego pliku`, 'sitemap.xml');
}
const wMapie = new Set(adresyMapy);
for (const plik of strony) {
  const jezyk = jezykPliku(plik);
  const nazwa = nazwaPliku(plik);
  if (!PUBLICZNE.includes(jezyk) || nazwa === '404' || SZABLONY.includes(nazwa)) continue;
  const adres = nazwa === 'index'
    ? (jezyk === 'en' ? '/' : '/' + jezyk)
    : '/' + (jezyk === 'en' ? '' : jezyk + '/') + nazwa;
  if (!wMapie.has(adres)) dodaj('uwaga', 'mapa strony', `strona ${adres} nie jest w mapie strony`, relative(ROOT, plik).replace(/\\/g, '/'));
}

/* ciężkie pliki */
const cieżkie = [];
(function skanuj(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const st = statSync(p);
    if (st.isDirectory()) skanuj(p);
    else if (st.size > 300 * 1024) cieżkie.push([relative(ROOT, p).replace(/\\/g, '/'), Math.round(st.size / 1024)]);
  }
})(join(ROOT, 'uploads'));
cieżkie.sort((a, b) => b[1] - a[1]);
for (const [p, kb] of cieżkie.slice(0, 12)) {
  dodaj(kb > 800 ? 'uwaga' : 'drobiazg', 'wydajność', `plik waży ${kb} kB`, p);
}

/* ---- raport ---- */
const kolejnosc = { 'błąd': 0, 'uwaga': 1, 'drobiazg': 2 };
znaleziska.sort((a, b) => kolejnosc[a.waga] - kolejnosc[b.waga] || a.kategoria.localeCompare(b.kategoria));

const podsumowanie = {};
for (const z of znaleziska) {
  const klucz = z.waga + ' / ' + z.kategoria + ' / ' + z.opis.replace(/\d+/g, 'N').replace(/\(.*?\)/g, '()').slice(0, 70);
  podsumowanie[klucz] = (podsumowanie[klucz] || 0) + 1;
}

console.log(`przeskanowano stron: ${strony.length}`);
console.log(`znalezisk: ${znaleziska.length} (błędy: ${znaleziska.filter(z => z.waga === 'błąd').length}, uwagi: ${znaleziska.filter(z => z.waga === 'uwaga').length}, drobiazgi: ${znaleziska.filter(z => z.waga === 'drobiazg').length})\n`);
console.log('— zgrupowane —');
for (const [k, n] of Object.entries(podsumowanie).sort((a, b) => b[1] - a[1])) {
  console.log(String(n).padStart(4), '×', k);
}
console.log('\n— przykłady błędów —');
znaleziska.filter(z => z.waga === 'błąd').slice(0, 15).forEach(z => console.log('  •', z.kategoria + ':', z.opis, '—', z.gdzie));
