/* Kontrola przekierowań ze starej strony (WordPress) na nową.
   Bierze listę z vercel.json i sprawdza, czy każdy stary adres odpowiada
   przekierowaniem 301 na stronę, która faktycznie działa (200).

   Użycie:
     node sprawdz-przekierowania.mjs                          — na produkcji Vercela
     node sprawdz-przekierowania.mjs https://fundacjastock.pl  — po przepięciu domeny

   Uruchamiać PO wdrożeniu (przekierowania działają na serwerze, nie lokalnie)
   i jeszcze raz PO przepięciu DNS. */
import { readFileSync } from 'fs';
import { join } from 'path';

const BASE = (process.argv[2] || 'https://fundacja-stock-design.vercel.app').replace(/\/$/, '');
const { redirects } = JSON.parse(readFileSync(join(import.meta.dirname, 'vercel.json'), 'utf8'));

/* Wzorce trzeba sprawdzić na konkretnym przykładzie. Przykłady są w formie,
   w jakiej adresy naprawdę występowały na starej stronie — czyli z ukośnikiem
   na końcu. To właśnie na tym wyszło, że `:path*` takich adresów nie łapie. */
const PRZYKLADY = {
  '/category/:rest(.*)': '/category/blog/',
  '/tag/:rest(.*)': '/tag/cokolwiek/',
  '/author/:rest(.*)': '/author/admin/',
  '/page/:rest(.*)': '/page/2/',
  '/blog/:rest(.*)': '/blog/page/2/',
  '/wp-admin/:rest(.*)': '/wp-admin/edit.php',
  '/:year(\\d{4})': '/2024',
  '/:year(\\d{4})/:rest(.*)': '/2024/05/'
};

const status = async url => {
  try {
    const r = await fetch(url, { redirect: 'manual' });
    return { code: r.status, location: r.headers.get('location') };
  } catch (e) { return { code: 0, location: null, error: String(e.message || e) }; }
};

const cele = new Map();   // cel -> kod (żeby nie pytać wielokrotnie o to samo)
const celDziala = async dest => {
  const url = BASE + dest.split('#')[0];
  if (!cele.has(url)) cele.set(url, (await status(url)).code);
  return cele.get(url);
};

let ok = 0;
const problemy = [];
for (const r of redirects) {
  const sciezka = PRZYKLADY[r.source] || r.source;
  if (sciezka.includes(':')) { problemy.push(`${r.source}: nie wiem, jak to sprawdzić — dopisz przykład do PRZYKLADY`); continue; }
  const { code, location, error } = await status(BASE + sciezka);
  if (error) { problemy.push(`${sciezka}: blad sieci — ${error}`); continue; }
  const oczekiwany = r.statusCode || 308;
  if (code !== oczekiwany) { problemy.push(`${sciezka}: odpowiada ${code}, a ma ${oczekiwany} (cel: ${r.destination})`); continue; }
  const trafia = (location || '').replace(BASE, '') || '';
  if (trafia.split('#')[0] !== r.destination.split('#')[0]) {
    problemy.push(`${sciezka}: przekierowuje na ${trafia}, a ma na ${r.destination}`); continue;
  }
  const kodCelu = await celDziala(r.destination);
  if (kodCelu !== 200) { problemy.push(`${sciezka} -> ${r.destination}: cel odpowiada ${kodCelu}, nie 200`); continue; }
  ok++;
}

console.log(`\nsprawdzono na ${BASE}`);
console.log(`poprawnych przekierowan: ${ok} z ${redirects.length}`);
if (problemy.length) {
  console.log(`\ndo poprawy (${problemy.length}):`);
  problemy.forEach(p => console.log('  • ' + p));
  process.exit(1);
}
console.log('wszystkie stare adresy prowadza na dzialajace strony');
