# Przepięcie fundacjastock.pl ze starej strony na nową

Stara strona to WordPress pod **tą samą domeną**, więc to nie przenosiny na nowy
adres, a podmiana serwisu pod istniejącym. Pozycje w Google zależą wtedy od
jednego: czy stare adresy odpowiadają przekierowaniem na odpowiadające im nowe.

## Stan przygotowań

Gotowe w repozytorium:

- **125 przekierowań 301** w `vercel.json` — 37 wpisów, 15 podstron, 6 profili
  osób i rodziny adresów WordPressa (`/category/`, `/tag/`, `/author/`, `/page/`,
  `/blog/`, archiwa `/2024/05/`, `/feed/`, stare sitemapy, `/wp-admin` → `/admin/`).
  Każdy adres w wersji z ukośnikiem i bez. Sprawdzone na działającym serwerze.
- `SITE` w `build-langs.mjs` już wskazuje na `https://fundacjastock.pl`, więc
  adresy kanoniczne, hreflang, `sitemap.xml` i `robots.txt` są poprawne od razu.
- Logowanie do panelu przygotowane na obie domeny (lista dozwolonych adresów
  w `api/callback.js`).

Ustalenia ze starej strony (sprawdzone na żywo, nie z eksportu):

- **Brak jakiejkolwiek sitemapy** (`wp-sitemap.xml`, `sitemap_index.xml`,
  `sitemap.xml` → 404), `robots.txt` bez wskazania sitemapy. Google zna stronę
  wyłącznie z linków.
- 37 wpisów i 16 podstron; lista na żywo zgodna z eksportem w `wp-media/`.
- `/de/` i `/en/` **nie są wersjami językowymi** — to zgadywanie adresu przez
  WordPressa (`/de/` → wpis „development-fellowship…"). Stara strona jest tylko
  angielska, bez hreflang.
- 188 stron załączników (`/img_2026…/`) ma `noindex, nofollow`, czyli nie ma ich
  w indeksie — świadomie bez przekierowań.
- **Slug nie odpowiada tytułowi** (posty powstawały przez duplikowanie), np.
  `/employee-volunteering-at-ex-lege-foundation-x-2024/` ma tytuł „Community
  Initiative in Croatia". Mapowanie zrobione po tytułach, 15 par ręcznie.

## Kolejność przepięcia

1. **Pełna kopia starej strony** z nazwa.pl — pliki i baza. `wp-media/` to tylko
   media i treści, nie kopia całości.
2. Obniż TTL rekordów `A`/`CNAME` na nazwa.pl (np. 300 s) i odczekaj tyle, ile
   wynosił poprzedni TTL.
3. W Vercelu dodaj `fundacjastock.pl` i `www.fundacjastock.pl`; `www` ustaw jako
   **przekierowanie** na wersję bez `www` — tak wskazują adresy kanoniczne.
4. Na nazwa.pl podmień `A` (domena główna) i `CNAME` (`www`) na wartości
   **z panelu Vercela**. **Nie ruszaj rekordów MX ani TXT** — inaczej padnie
   poczta fundacji. Nie przełączaj serwerów nazw.
5. Poczekaj na certyfikat (Vercel wystawia sam) i sprawdź przekierowania:
   ```bash
   node sprawdz-przekierowania.mjs https://fundacjastock.pl
   ```
6. Ustaw `OG_SITE = SITE` w `build-langs.mjs` (linia ~113) oraz `site_url`
   i `base_url` w `design-v2/admin/config.yml` na `https://fundacjastock.pl`.
   Push uruchomi build. Dopóki tego nie zrobisz, każdy build przypomina o tym
   w logu.
7. Zmień **Authorization callback URL** aplikacji OAuth na GitHubie na
   `https://fundacjastock.pl/api/callback` (Settings → Developer settings →
   OAuth Apps). Dopiero teraz — GitHub przyjmuje jeden adres, więc do tego
   momentu panel działa na adresie `*.vercel.app`. Po zmianie zaloguj się do
   `/admin/` i sprawdź zapis.
8. Zaktualizuj adres panelu w `INSTRUKCJA-PANELU.md`.
9. **Starego hostingu nie usuwaj** przez kilka tygodni.

## Pozostałe domeny

Każdą (razem z jej `www`) dodaj w Vercelu z opcją **Redirect to**
`fundacjastock.pl`, a na nazwa.pl skieruj `A`/`CNAME` na Vercela. Jeśli któraś
obsługuje pocztę — zostaw jej MX.

## Po przepięciu

- Search Console: domena się nie zmienia, więc **nie** zgłaszaj zmiany adresu.
  Wyślij nową sitemapę (`https://fundacjastock.pl/sitemap.xml`) i przez 2–3
  tygodnie obserwuj raport „Strony" pod kątem 404.
- `GA_ID` w `design-v2/assets/main.js` jest **puste** — analityka nie działa.
  Jeśli stara strona miała GA4, wklej to samo ID, żeby zachować ciągłość
  statystyk; bez tego nie będzie widać, czy przepięcie czegoś nie zepsuło.
- Czego nie da się przenieść: stare obrazki `/wp-content/uploads/…` (nowe pliki
  mają inne nazwy) i kanał RSS. Zaindeksowane obrazki w Google Images wypadną.

## Rzecz do decyzji

Stara strona główna miała `<title>Fundacja Stock</title>` — czyli pod zapytanie
„fundacja stock" rankował adres `/`. Nowy `/` to wersja angielska z tytułem
„Stock Foundation — Hope, art & community". Markę zabezpiecza wersja `/pl/`
(„Fundacja Stock — Nadzieja, sztuka i wspólnota"), hreflang i nazwa prawna
w danych strukturalnych, więc ryzyko jest małe. Jeśli chcesz je zdjąć do zera,
dopisz markę do angielskiego tytułu w `build-langs.mjs` (tablica `META`), np.
`Stock Foundation (Fundacja Stock) — Hope, art & community`.
