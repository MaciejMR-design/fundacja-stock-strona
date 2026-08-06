# Przepięcie domeny i przekazanie strony — instrukcja wykonawcy

Stara strona to WordPress pod **tą samą domeną** `fundacjastock.pl`, więc to nie
przenosiny na nowy adres, a podmiana serwisu pod istniejącym. Pozycje w Google
zależą wtedy od jednego: czy stare adresy odpowiadają przekierowaniem na
odpowiadające im nowe.

**Czas: około 3,5 h pracy.** Części I–IV najlepiej jednym ciągiem (2–3 h, licząc
czekanie na DNS), nie w piątek wieczorem. Część VII zależy od kalendarza klienta.
Potem dwa zaglądnięcia do Search Console przez trzy tygodnie.

## Stan przygotowań (gotowe)

- **66 przekierowań 301** w `vercel.json` — 37 wpisów, 15 podstron, 6 profili
  osób i rodziny adresów WordPressa (`/category/`, `/tag/`, `/author/`, `/page/`,
  `/blog/`, archiwa `/2024/05/`, `/feed/`, stare sitemapy, `/wp-admin` → `/admin`).
  Pierwotnie było ich 125: 06.08.2026, przy przejściu na adresy bez rozszerzenia
  (`cleanUrls`), wypadły warianty źródeł z ukośnikiem na końcu — `trailingSlash:
  false` normalizuje je wcześniej, więc nigdy się nie uruchamiały — oraz reguły,
  które po zmianie wskazywały same na siebie (`/news` → `/news`).
  Każdy adres w wersji z ukośnikiem i bez. Sprawdzone na działającym serwerze.
- `SITE` w `build-langs.mjs` już wskazuje na `https://fundacjastock.pl`, więc
  adresy kanoniczne, hreflang, `sitemap.xml` i `robots.txt` są poprawne od razu.
- Logowanie do panelu przygotowane na obie domeny (`api/callback.js`).

## Ustalenia o starej stronie (sprawdzone na żywo)

- **Brak jakiejkolwiek sitemapy** (`wp-sitemap.xml`, `sitemap_index.xml`,
  `sitemap.xml` → 404), `robots.txt` bez wskazania sitemapy. Google zna stronę
  wyłącznie z linków.
- **Brak analityki** — ani GA, ani GTM, ani piksela. Nie ma historii do
  przeniesienia, ale też nie ma punktu odniesienia poza Search Console.
- 37 wpisów i 16 podstron; lista na żywo zgodna z eksportem w `wp-media/`.
- `/de/` i `/en/` **nie są wersjami językowymi** — to zgadywanie adresu przez
  WordPressa (`/de/` → wpis „development-fellowship…"). Stara strona jest tylko
  angielska, bez hreflang.
- 188 stron załączników (`/img_2026…/`) ma `noindex, nofollow`, czyli nie ma ich
  w indeksie — świadomie bez przekierowań.
- **Slug nie odpowiada tytułowi** (wtyczka Duplicate Page — posty powstawały
  przez duplikowanie), np. `/employee-volunteering-at-ex-lege-foundation-x-2024/`
  ma tytuł „Community Initiative in Croatia". Mapowanie po tytułach, 15 par
  rozstrzygniętych ręcznie.
- Na starej stronie kontaktu działa **formularz Contact Form 7**; nowa ma tylko
  klikalny adres e-mail.

## Decyzje do podjęcia przed startem

| Rzecz | Rekomendacja |
|---|---|
| Formularz kontaktowy | Zostawić sam e-mail: jeden adres kontaktowy, mniej spamu i żadnych danych osobowych do przetwarzania. Formularz to osobne 2–3 h (backend do wysyłki), lepiej po przepięciu. |
| Google Analytics | Wstawić GA4 (`GA_ID` w `design-v2/assets/main.js` jest puste). Stara strona nie miała nic, więc niczego nie tracimy, ale bez tego nie widać skutków przepięcia. |
| Marka w angielskim tytule | Zostawić jak jest. Wersja `/pl/` ma „Fundacja Stock" w tytule i to ona wyjdzie polskim wyszukiwaniom. |

---

## Gdzie realnie stoi domena — sprawdzone 04.08.2026

| Co | Gdzie |
|---|---|
| Serwery nazw (DNS) | `ns.lh.pl`, `ns2.lighthosting.net` → **LH.pl** |
| Strona (rekord A) | `185.135.90.43` → **LH.pl** |
| Poczta (MX) | `mail19.lh.pl` → **LH.pl** |

nazwa.pl jest najpewniej tylko **rejestratorem** domeny. Strefa DNS, hosting
strony i poczta są u **LH.pl**, więc kopię zapasową robi się w panelu LH.pl
i **tam też zmienia się rekord A** — zmiana w edytorze DNS nazwa.pl nie zadziała,
dopóki serwery nazw wskazują na LH.pl.

**Droga A (zalecana): dostęp do LH.pl.** Zmieniasz tam dwa rekordy `A` i nic
więcej — poczta zostaje nietknięta.

**Droga B (bez dostępu do LH.pl):** przełączasz serwery nazw na nazwa.pl
i odtwarzasz strefę od zera. Poniżej pełny zrzut obecnej strefy — wszystko
oprócz `A` przepisujesz bez zmian, `A` wskazujesz na Vercela.

### Zrzut strefy fundacjastock.pl (04.08.2026)

| Typ | Nazwa | Wartość | Co z tym |
|---|---|---|---|
| A | `@` | `185.135.90.43` | **zmienić** na wartość z Vercela |
| A | `www` | `185.135.90.43` | **zmienić** na wartość z Vercela (CNAME) |
| A | `*` (wildcard) | `185.135.90.43` | nie odtwarzać — niepotrzebny |
| MX | `@` | `5 mail19.lh.pl` | przepisać bez zmian |
| TXT | `@` | `v=spf1 include:_spf.lh.pl -all` | przepisać bez zmian |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:dmarc-report@lh.pl;` | przepisać bez zmian |
| TXT | `default._domainkey` | klucz DKIM (poniżej) | przepisać bez zmian |
| CNAME | `mail`, `smtp`, `imap` | `mail19.lh.pl` | przepisać (konfiguracja programów pocztowych) |
| A | `autoconfig` | `185.135.89.143` | przepisać (autokonfiguracja Thunderbirda) |

DKIM (`default._domainkey`, jedna linia):

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqjhsEav0jzbMlN8IaOOc3g3K5oViXdu5s+b5S3FN8KbuE2N7otEV+kNFkXeZKxEtPpwWI7+QgqZm5XMLwP+XXmz2LwpQLxnrig0OJehyj228NPkuAfyL8kKAUgoI2KjixMOPDqVQYEzjgyJ8bTR645x4f/YAkQdRRs7BqmXRx6dMt6erRlgEOkuqUsJNOEgB4793W4QTxsNnzDN+ee5N3MpJEM45gnVIQN/zFpQ0kImGz+hW//B3ghoy2ZNK2/w5u335pmjxxZl05jy+vOCxQzcOSIgU0jrdfq+z69ckWUQPO1NuAJLK+T7MhxKRO0SU3bf85eD4nZ/N7bHHtCuilQIDAQAB
```

Uwaga: przy Drodze B zmiana serwerów nazw propaguje się wolniej niż zmiana
samego rekordu `A` (bywa, że kilkanaście godzin). Przy Drodze A liczy się TTL.

Docelowy zakup poczty fundacji w nazwa.pl to **osobna operacja**: zmienia `MX`,
`SPF` i `DKIM`, więc robi się ją dopiero po tym, jak strona już działa — nigdy
razem z przepięciem strony.

# Część I — Kopia zapasowa (30–45 min)

**Nie aktualizuj wtyczek** (jest 9 aktualizacji) i **nie włączaj trybu
Maintenance** — dopóki to żywa strona, oddawałaby Google'owi błąd 503.

1. WP → **Narzędzia → Eksport → Cała treść → Pobierz**. Plik XML, 2 minuty.
   To nie pełna kopia, ale najszybsze zabezpieczenie treści.
2. **Kopia z hostingu — UWAGA, nie ma jej w panelu.** Hosting to LH.pl
   (nazwa.pl jest tylko rejestratorem domeny, kopii tam nie znajdziesz).
   LH.pl trzyma kopie na osobnym serwerze FTP:
   - serwer: `backup.lh.pl` (185.135.88.45), port 21
   - użytkownik: login serwera (`serwer318337`)
   - hasło: FTP, z panelu LH.pl → Serwery → serwer → FTP / Dane dostępowe
   - w środku: `www` (pliki) i `mysql` (zrzuty bazy), w folderach z datami

   Kopie utrzymywane są **30 dni** — po przepięciu 05.08.2026 termin mija
   około 04.09.2026. Gdyby logowanie nie przechodziło: czat wsparcia LH.pl
   i prośba o udostępnienie kopii serwera z konkretną datą.
3. Zapisz dostępy w jednym miejscu: WP admin, FTP, panel nazwa.pl.
   Uwaga: konto WP to `user@mccpr.eu` — agencji. Upewnij się, że hasła zostają
   u Ciebie albo masz własne konto administratora.

Od tego momentu każdy krok jest odwracalny.

# Część II — Punkt odniesienia (20 min)

1. `search.google.com/search-console` — sprawdź, czy `fundacjastock.pl` tam jest.
2. **Niezależnie od odpowiedzi dodaj weryfikację rekordem TXT w DNS** na
   nazwa.pl. To jedyna metoda, która przeżyje przepięcie — plik HTML i znacznik
   w kodzie znikną razem ze starą stroną.
3. Jeśli domena już była: **Skuteczność → Eksportuj**, ostatnie 3 miesiące.
   To jedyny dowód „przed".
4. Wpisz w Google `site:fundacjastock.pl` i zapisz liczbę wyników.

# Część III — Przepięcie DNS (30 min pracy + do 2 h czekania)

Domena `fundacjastock.pl` ma strefę u **LH.pl** — te dwa rekordy zmienia się
w panelu LH.pl, nie w nazwa.pl.

| Rekord | Nazwa | Było (LH.pl) | Ma być (Vercel) |
|---|---|---|---|
| `A` | `@` | `185.135.90.43` | `216.198.79.1` |
| `CNAME` (lub `A`) | `www` | `185.135.90.43` | `e377614e4284ca79.vercel-dns-017.com` |

**To są DWA rekordy, nie jeden.** `www` ma dziś w LH.pl własny rekord `A`.
Zmiana tylko domeny głównej zostawiłaby `www.fundacjastock.pl` na starym
WordPressie — dwie wersje serwisu żywe naraz i duplikat treści w Google.

Kroki:

1. LH.pl: obniż TTL obu rekordów do 300 s i odczekaj tyle, ile wynosił poprzedni
   TTL. Można pominąć — wtedy propagacja potrwa dłużej.
2. Vercel → projekt → Domains: `fundacjastock.pl` jako **Connect to environment
   → Production**, `www.fundacjastock.pl` jako **Redirect to Another Domain →
   fundacjastock.pl, 308 Permanent**. (Zrobione 04.08.2026.)
3. LH.pl: podmień oba rekordy według tabeli wyżej. **`MX`, `TXT` (SPF, DMARC,
   DKIM) i wildcard `*` zostają nietknięte** — inaczej padnie poczta fundacji,
   a to jedyny kanał kontaktu na stronie. Nie przełączaj serwerów nazw.
4. Czekaj. Zwykle poniżej 30 minut, czasem do 2 h.

**Kilkuminutowe okno bez HTTPS jest nieuniknione.** Certyfikat dla
`fundacjastock.pl` może powstać dopiero wtedy, gdy domena wskazuje na Vercela —
więc między zniknięciem starej strony a wystawieniem certyfikatu wejście po
`https` zwróci błąd. Vercel wystawia go zwykle w kilkadziesiąt sekund. Rób to
w godzinach niskiego ruchu; jeśli po 10 minutach `https` nadal nie działa,
wtedy dopiero szukaj przyczyny.

## Plan awaryjny

Wpisz w LH.pl z powrotem `185.135.90.43` w obu rekordach — stara strona wraca
w czasie TTL, czyli kilka minut. Nic nie jest nieodwracalne, dopóki nie ruszasz
`MX` i nie usuwasz hostingu w LH.pl.

## Test przed przepięciem (bez zmiany DNS)

Można sprawdzić cały serwis pod prawdziwą domeną, wymuszając adres Vercela.
Certyfikatu jeszcze nie ma, więc test idzie po HTTP:

```bash
curl -s --resolve fundacjastock.pl:80:216.198.79.1 http://fundacjastock.pl/ | head -20
curl -s -o /dev/null --resolve fundacjastock.pl:80:216.198.79.1 -w '%{http_code} -> %{redirect_url}\n' http://fundacjastock.pl/about-us/
```

Sprawdzone 04.08.2026: strona główna zwraca nową wersję z poprawnym adresem
kanonicznym, wszystkie rodziny starych adresów przekierowują, `/admin/`, `/pl/`
i `/sitemap.xml` odpowiadają 200.

# Część IV — Dokończenie (25 min)

1. `node sprawdz-przekierowania.mjs https://fundacjastock.pl` — musi wyjść
   66 z 66.
2. `OG_SITE = SITE` w `build-langs.mjs` (linia ~113) oraz `site_url` i `base_url`
   w `design-v2/admin/config.yml` → `https://fundacjastock.pl`. Commit, push,
   Vercel przebuduje sam. Dopóki tego nie zrobisz, każdy build przypomina o tym
   w logu.
3. GitHub → awatar → Settings → Developer settings → OAuth Apps →
   „Fundacja Stock — panel treści" → **Authorization callback URL** →
   `https://fundacjastock.pl/api/callback`. **Dopiero teraz**: GitHub przyjmuje
   jeden adres, więc ta zmiana odcina panel na `*.vercel.app`.
4. Zaloguj się do `https://fundacjastock.pl/admin/` **swoim** kontem i zapisz
   próbną zmianę. Robisz to sam, przed spotkaniem z klientem — ewentualny problem
   wyjdzie bez świadków.
5. Podmień adres panelu w `INSTRUKCJA-PANELU.md`.

# Część V — Pozostałe domeny (30–40 min)

Sześć domen-wariantów, wszystkie z DNS w **nazwa.pl** (w odróżnieniu od głównej),
więc niezależne od LH.pl: `fundacjastock.com`, `fundacjastock.eu`,
`fundacjastock.org`, `fundacjastock.com.pl`, `stockfoundation.pl`,
`stockfoundation.eu`. Dziś pokazują stronę parkingową nazwa.pl.

1. Vercel: dodaj każdą razem z jej `www` (12 adresów, można wklejić naraz),
   opcja **Redirect to Another Domain → fundacjastock.pl, 308 Permanent**,
   checkbox „Include apex and www variants" **odznaczony**.
2. nazwa.pl → Panel Klienta → Usługi → Domeny → wybrana domena → **Ręczna
   konfiguracja DNS**: `A` dla `@` = `216.198.79.1`, `CNAME` dla `www` =
   wartość z panelu Vercela. Bez kropki na końcu.

Nie używać wbudowanego „Przekierowania na adres URL" w nazwa.pl. Sprawdzone
04.08.2026: nie ma certyfikatu dla tych domen (serwer podstawia `CN=*.nazwa.pl`),
więc wejście po `https` daje ostrzeżenie przeglądarki, a samo przekierowanie
działało niestabilnie i tylko dla wariantu z `www`.

Do rezygnacji z hostingu LH.pl potrzebne są **najpierw** DNS i poczta w innym
miejscu — wyłączenie LH.pl przy serwerach nazw wskazujących na `ns.lh.pl`
wygasza całą domenę, razem ze stroną na Vercelu i pocztą.

# Część VI — Search Console (15 min + obserwacja)

1. Wyślij sitemapę `https://fundacjastock.pl/sitemap.xml`.
2. „Sprawdź URL" → poproś o zaindeksowanie strony głównej i `/pl/`.
3. Przez 2–3 tygodnie zaglądaj do raportu „Strony" — tam zobaczysz ewentualne 404.

# Część VII — Przekazanie panelu klientowi (60–75 min)

**Musi być po Części IV.** Panel zapisuje token logowania w przeglądarce osobno
dla każdego adresu, a po zmianie callbacku logowanie ze starego adresu przestaje
działać — zrobione wcześniej znaczy zrobione dwa razy. (Samo założenie konta
i zaproszenie nie są przypisane do adresu, więc te dwie rzeczy mogą się stać
kiedykolwiek.)

Założenie: redaktor nie ma konta GitHub, nie jest techniczny i **nie powinien nic
sam klikać na GitHubie**. Prowadzisz Ty; on ma jedno zadanie — przeczytać kod
z maila.

## Ustal najpierw, kto ma dostać dostęp

Treści na starej stronie prowadziło konto `user@mccpr.eu` — agencji. Jeśli to
ona pisała wpisy, dostęp może potrzebować ona, a nie (albo nie tylko) Pan Paweł.
Panel obsługuje wiele osób — każda z własnym kontem, z podpisem w historii zmian.

## Przed spotkaniem — 15 min, sam

1. Ustal termin i poproś o **40 minut bez przerywania**, przy komputerze,
   z **otwartą skrzynką e-mail**.
2. Spotkanie zdalne przez narzędzie, które on już zna (najpewniej Teams),
   z udostępnieniem ekranu. Najlepiej z możliwością przejęcia kontroli — wtedy
   klikasz Ty. Jeśli nie ma takiej opcji, dyktujesz.
3. Przygotuj **kartkę z dostępami** (jeden mail, wysłany po spotkaniu): adres
   panelu, adres e-mail jako login, hasło, i zdanie „jeśli kiedyś poprosi
   o kod — kod przyjdzie na Twój e-mail".
4. Wymyśl hasło, które **da się przepisać z kartki**: trzy–cztery polskie słowa
   i cyfry, nie losowy ciąg znaków.
5. Miej otwarte: `github.com/signup` i
   `github.com/MaciejMR-design/fundacja-stock-strona/settings/access`.
6. Wyślij mu `INSTRUKCJA-PANELU.md` z prośbą, żeby **nie czytał przed** — na
   spotkaniu przejdziecie to razem, papier jest na potem.

## Na spotkaniu, na jego komputerze — 45–60 min

Zasada na cały czas: nie mów „repozytorium", „commit", „GitHub". Mów **„konto,
które pilnuje, kto może zmieniać stronę"** i **„panel"**.

**1. Konto (10 min) — klikasz Ty**

`github.com/signup` → jego adres e-mail (służbowy albo skrzynka fundacji) →
Twoje przygotowane hasło → dalej. Ekran jest po angielsku, więc nie tłumacz go
ekran po ekranie; powiedz krótko: „zakładam konto techniczne, zaraz zniknie
z widoku i nie będziesz go używał".

Na jednym etapie GitHub prosi o **kod z maila** — to jego jedyne zadanie:
„proszę zerknąć na skrzynkę, przyjdzie sześciocyfrowy kod od GitHub".
Gdy przeglądarka zaproponuje zapamiętanie hasła — **zgódź się**.

Jeśli pojawi się zagadka obrazkowa albo suwak: przeklikaj sam, nie oddawaj mu
tego zadania.

**2. Zaproszenie (3 min) — Ty, ze swojego konta**

Na swoim komputerze: Settings → Collaborators → Add people → jego nazwa konta.
On przyjmuje zaproszenie z maila (albo `github.com/notifications`). Nie szukaj
wyboru roli — w repozytorium konta osobistego GitHub nadaje prawo zapisu
automatycznie i nie da się nadać admina.

**3. Wejście do panelu (2 min)**

`fundacjastock.pl/admin/` → **Sign In with GitHub** (jeden przycisk) →
**Authorize**. Panel otwiera się po polsku. Ta przeglądarka jest od teraz
„znanym urządzeniem", więc kodu już nie będzie.

**4. Skrót, żeby nie musiał pamiętać adresu (3 min)**

Dodaj panel do **pasku zakładek** i zrób **skrót na pulpicie**. Dla starszej
osoby to ważniejsze niż cała instrukcja: jedno kliknięcie zamiast wpisywania
adresu.

**5. Pokaz: jedna aktualność od zera (20 min)**

Zrób z nim **prawdziwy wpis**, nie testowy — coś, co i tak ma się pojawić.
Kolejność: identyfikator → data → kategoria → zdjęcie z jego dysku (pokaż, że
samo się zmniejsza, nie musi nic przygotowywać) → tytuł, lead i treść po polsku
i angielsku → **Save**. Po dwóch minutach otwórzcie stronę i pokaż wpis na żywo.
Ten moment robi najwięcej dla poczucia, że to działa.

**6. Drugi wpis robi on (10 min)** — najważniejszy punkt całego spotkania

Ty tylko patrzysz i podpowiadasz. Osoba, która raz zrobiła to własnymi rękami,
poradzi sobie za miesiąc; osoba, która tylko patrzyła — nie. Jeśli nie ma
drugiego materiału, niech powtórzy pierwszy i na koniec skasuje.

**7. Pozostałe sekcje pokaż pobieżnie (5 min)**

Teksty podstron, Rada i Zarząd, Statut i sprawozdania — tylko gdzie to jest, bez
ćwiczeń. Wróci do tego, gdy będzie potrzebował, z instrukcją w ręku.

**8. Zamknięcie (5 min)**

Powiedz wprost trzy rzeczy:
- **każdą zmianę da się cofnąć** — nie da się nieodwracalnie zepsuć strony,
- **nie korzystać z trybu incognito i nie klikać „wyloguj"** — sesja żyje
  w przeglądarce, po wylogowaniu trzeba będzie logować się od nowa,
- jak i kiedy ma się z Tobą kontaktować.

**Opcjonalnie, bardzo się opłaca:** za jego zgodą nagraj 3–4 minuty ekranu
z dodawaniem wpisu i wyślij mu razem z dostępami. Dla starszej osoby film,
który można odtworzyć jeszcze raz, działa lepiej niż każdy dokument.

## Po spotkaniu — 5 min

Wyślij jednego maila: adres panelu (jako link), login, hasło, ewentualne nagranie
i `INSTRUKCJA-PANELU.md`. Hasło najlepiej **innym kanałem** niż login — SMS-em
albo telefonicznie.

# Część VIII — Po 2–4 tygodniach (15 min)

1. Search Console: brak nowych 404, indeksacja rośnie.
2. **Dopiero teraz** wyłącz starą stronę na nazwa.pl, a jej usunięcie odłóż
   o kolejny miesiąc.

## Czego nie da się przenieść

Stare obrazki `/wp-content/uploads/…` (nowe pliki mają inne nazwy — zaindeksowane
w Google Images wypadną) i kanał RSS.
