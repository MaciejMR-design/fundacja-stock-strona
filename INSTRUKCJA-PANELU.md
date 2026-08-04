# Panel treści — instrukcja dla redaktora

**Adres panelu:** `https://fundacja-stock-design.vercel.app/admin/`
(po przeniesieniu strony na docelową domenę: `https://fundacjastock.pl/admin/`)

## Logowanie
Panel działa na koncie GitHub — zakładamy je razem przy przekazaniu strony
(potrzebny będzie tylko kod, który przyjdzie na Twoją skrzynkę). Konto ma dostęp
wyłącznie do treści tej strony.

1. Wejdź na adres panelu.
2. Kliknij **„Sign In with GitHub"** — to jedyny przycisk na ekranie.

Przeglądarka zapamięta sesję: przy kolejnych wejściach wystarczy sam adres panelu
i panel otworzy się od razu, bez logowania. Nie korzystaj z trybu incognito —
w nim sesja nie zostaje zapamiętana.

**Zmiana komputera lub wyczyszczenie danych przeglądarki** — wtedy trzeba się
zalogować ponownie (adres e-mail i hasło konta warto mieć zapisane). GitHub uzna
to za nowe urządzenie i wyśle na Twój adres e-mail kod weryfikacyjny — wpisz go
i panel zadziała jak wcześniej. Jeśli coś tu nie zagra, napisz do nas.

## Co można zmieniać
Panel ma cztery sekcje:

| Sekcja | Co obejmuje |
|---|---|
| **Aktualności** | wpisy z sekcji Aktualności |
| **Rada i Zarząd** | skład, zdjęcia, funkcje i biogramy osób |
| **Statut i sprawozdania** | pliki PDF na podstronie „Statut i sprawozdania" |
| **Teksty stron** | teksty i liczby w istniejących sekcjach podstron |

Każdy zapis pojawia się na stronie po 1–2 minutach, we wszystkich językach.

## Dodanie nowej aktualności
1. Sekcja **Aktualności** → przycisk **New**.
2. Wypełnij pola:
   - **Identyfikator** — krótka nazwa robocza bez spacji, np. `koncert2027` (tworzy adres artykułu; po opublikowaniu lepiej go nie zmieniać),
   - **Data wydarzenia** — z kalendarza. Ustawia kolejność na liście **i datę widoczną na stronie** — data słownie powstaje sama, w każdym języku („5 czerwca 2026", „5 June 2026"). Nie trzeba jej nigdzie wpisywać.
   - **Dokładność daty** — „Pełna data" albo „Tylko miesiąc", gdy dokładny dzień nie ma znaczenia („czerwiec 2026"),
   - **Kategoria** — Spotkania ze sztuką / Społeczność / Stypendia,
   - **Zdjęcie główne** — wgraj z dysku. Zdjęcia z telefonu są przy wgrywaniu automatycznie zmniejszane i przerabiane na lekki format WebP — nie trzeba ich wcześniej przygotowywać.
   - **Tytuł, Lead, Treść** — wypełnij **po polsku i po angielsku**. Pola czeskie, włoskie, słowackie, niemieckie i francuskie można zostawić puste — w tych wersjach pokaże się wtedy tekst angielski.
   - Treść wpisuje się **akapitami** — każdy akapit to osobne pole (przycisk „+" dodaje kolejny).
3. Kliknij **Save**.

Pole **„Data słownie — nadpisanie"** (zwinięte na dole) zostaw puste. Przydaje się tylko wtedy, gdy data ma brzmieć inaczej niż standardowo, np. „przełom wiosny i lata 2026".

## Edycja lub usunięcie wpisu
- Kliknij wpis na liście → zmień pola → **Save**.
- **Delete** usuwa wpis wraz z jego stroną.
- Pomyłka? Każdą zmianę można cofnąć — daj znać, przywrócimy.
- Nad listą są **filtry** (po kategorii) i **grupowanie** (po roku) — przy kilkudziesięciu wpisach szybciej się szuka.

## Rada i Zarząd
Sekcja **Rada i Zarząd** → **New** albo klik w osobę na liście.
- **Organ** — Rada Fundacji albo Zarząd (decyduje, w której części strony osoba się pokaże),
- **Kolejność w obrębie organu** — mniejsza liczba wyżej: przewodniczący 10, kolejne osoby 20, 30…
- **Funkcja** i **Biogram** — po polsku i angielsku; pozostałe języki opcjonalnie (bez nich pokaże się wersja angielska).

## Statut i sprawozdania
Sekcja **Statut i sprawozdania** → **Statut i sprawozdania roczne**.
- **Statut fundacji (PDF)** — podmiana pliku statutu.
- **Sprawozdania** — lista, jeden wpis na rok. Przycisk **+** dodaje nowy rok:
  wpisz **Rok** (cztery cyfry) i wgraj te pliki, które są — sprawozdanie z działalności,
  bilans, rachunek zysków i strat. Na stronie pojawią się karty tylko dla wgranych plików.
  Opisy pod tytułem są opcjonalne.

## Edycja tekstów na podstronach
Sekcja **Teksty stron** → wybierz podstronę (Strona główna, O nas, Kontakt…) →
teksty pogrupowane językami jako lista „pole → treść".
Zmieniaj **wartości**; nazw pól (kluczy) nie ruszaj. **Save** publikuje jak wyżej.

## Zdjęcia i pliki
Ikona biblioteki mediów w górnym pasku — tu można wgrywać i podmieniać pliki.
Wgrane zdjęcia wybiera się potem w polu „Zdjęcie główne" wpisu.
Zdjęcia są optymalizowane automatycznie przy wgrywaniu; PDF-y trafiają na stronę bez zmian.

## Gdy zmiana nie pojawia się na stronie
Strona jest przebudowywana po każdym zapisie i przy tej okazji sprawdzana.
Jeśli w treści jest coś, co zepsułoby stronę (dwa wpisy o tym samym identyfikatorze,
brak polskiego lub angielskiego tekstu, wskazanie pliku, którego nie ma), przebudowa
zatrzymuje się i **na stronie zostaje poprzednia, działająca wersja**. Nic nie ginie —
napisz do nas, powiemy, które pole poprawić.

## Czego panel nie robi (celowo)
Panel nie zmienia układu, kolorów ani kodu strony — edytuje wyłącznie treści.
Dzięki temu niczego nie da się „zepsuć": strona zawsze działa, a każda zmiana jest odwracalna.
Poza panelem zostają zdjęcia w nagłówku strony głównej (slideshow) — każde wymaga
przygotowania kilku wariantów rozmiarowych, więc ich podmianę robimy my.

---
*Pomoc techniczna: Maciej (wykonawca strony).*
