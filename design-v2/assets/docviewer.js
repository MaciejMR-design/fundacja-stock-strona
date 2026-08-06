/* Przeglądarka dokumentów (statut, sprawozdania).

   Dokumenty pokazujemy w oknie na wierzchu strony, rysowane po naszej stronie
   przez pdf.js, zamiast oddawać plik wbudowanej przeglądarce PDF. Powód jest
   prosty: wbudowana przeglądarka Chrome i Firefoksa ma własny pasek z ikonami
   pobierania i drukowania, którego nie da się z niej usunąć (parametr
   #toolbar=0 działa tylko w Chrome, Firefox go ignoruje). Rysując strony sami,
   mamy ten sam wygląd wszędzie i żadnego przycisku pobierania — a w kodzie
   strony nie ma odnośnika do pliku, więc nie ma też czego zapisać przez menu
   pod prawym przyciskiem.

   To zasłona, nie zamek: plik i tak wędruje do przeglądarki, więc ktoś, kto
   wie, gdzie szukać, dotrze do niego przez narzędzia deweloperskie. Chodzi
   o zwykłego odwiedzającego, dla którego po prostu nie ma czego kliknąć.

   pdf.js (1,8 MB razem z workerem) wczytuje się dopiero przy pierwszym
   otwarciu dokumentu — wejście na podstronę nic nie kosztuje. */

(function () {
  const PDFJS_URL = '/assets/pdfjs/pdf.min.mjs';
  const WORKER_URL = '/assets/pdfjs/pdf.worker.min.mjs';
  /* Szerokość rysowania: tyle piksli CSS ma najszersza strona dokumentu.
     Mnożymy przez gęstość ekranu, żeby na telefonach i ekranach Retina tekst
     był ostry, ale nie powyżej 2 — przy 3x rośnie tylko zużycie pamięci. */
  const MAX_WIDTH = 900;

  let pdfjs = null;      // wczytany moduł (jeden raz na sesję)
  let overlay = null;    // element okna
  let zadanie = 0;       // numer otwarcia — chroni przed wyścigiem przy szybkim przełączaniu
  let adresyBlob = [];   // adresy wyrysowanych stron, do zwolnienia przy zamknięciu

  const t = key => {
    /* PAGE_I18N jest w szablonach zadeklarowane jako `const` w zwykłym
       skrypcie, więc jest globalną nazwą, ale nie polem window. */
    const dict = (typeof PAGE_I18N !== 'undefined' ? PAGE_I18N : (window.PAGE_I18N || {}));
    const lang = (function () { try { return localStorage.getItem('fs-lang') || 'en'; } catch (e) { return 'en'; } })();
    const d = Object.assign({}, dict.en, dict[lang]);
    return d[key] || '';
  };

  function zbudujOkno() {
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.className = 'doc-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div class="doc-modal-bar">' +
        '<span class="doc-modal-title"></span>' +
        '<button type="button" class="doc-modal-close" aria-label="' + (t('close') || 'Zamknij') + '">×</button>' +
      '</div>' +
      '<div class="doc-modal-body"><div class="doc-modal-state"></div><div class="doc-modal-pages"></div></div>';
    document.body.appendChild(overlay);

    overlay.querySelector('.doc-modal-close').addEventListener('click', zamknij);
    /* Kliknięcie w tło zamyka, kliknięcie w samą stronę dokumentu nie. */
    overlay.querySelector('.doc-modal-body').addEventListener('click', e => {
      if (e.target.classList.contains('doc-modal-body')) zamknij();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) zamknij();
    });
    return overlay;
  }

  function zamknij() {
    if (!overlay) return;
    zadanie++;                                   // unieważnia rysowanie w toku
    overlay.classList.remove('open');
    document.documentElement.classList.remove('doc-open');
    /* Wyrysowane strony zwalniamy po animacji — same obrazki znikają z DOM,
       a ich adresy blob trzeba oddać przeglądarce ręcznie, inaczej trzymają
       pamięć do końca wizyty. */
    setTimeout(() => {
      if (overlay && !overlay.classList.contains('open')) {
        overlay.querySelector('.doc-modal-pages').innerHTML = '';
        adresyBlob.forEach(URL.revokeObjectURL);
        adresyBlob = [];
      }
    }, 300);
  }

  async function otworz(url, tytul) {
    const box = zbudujOkno();
    const moje = ++zadanie;
    const strony = box.querySelector('.doc-modal-pages');
    const stan = box.querySelector('.doc-modal-state');
    box.querySelector('.doc-modal-title').textContent = tytul || '';
    strony.innerHTML = '';
    adresyBlob.forEach(URL.revokeObjectURL);
    adresyBlob = [];
    stan.textContent = t('docLoading') || 'Wczytywanie…';
    stan.hidden = false;
    box.classList.add('open');
    document.documentElement.classList.add('doc-open');

    try {
      if (!pdfjs) {
        pdfjs = await import(PDFJS_URL);
        pdfjs.GlobalWorkerOptions.workerSrc = WORKER_URL;
      }
      const dokument = await pdfjs.getDocument({ url }).promise;
      if (moje !== zadanie) return;              // w międzyczasie zamknięto albo otwarto inny
      stan.hidden = true;

      /* Rysowanie kosztuje proporcjonalnie do liczby pikseli. Na ekranach
         Retina i telefonach (gęstość 2–3) ograniczenie do 1,5 ścina tę pracę
         niemal o połowę, a przy czytaniu tekstu różnicy nie widać. */
      const gestosc = Math.min(window.devicePixelRatio || 1, 1.5);
      const szerokosc = Math.min(MAX_WIDTH, strony.clientWidth || MAX_WIDTH);

      /* Najpierw odkładamy miejsce na wszystkie strony — puste obrazki
         o właściwych proporcjach. Dzięki temu pasek przewijania od razu ma
         prawdziwą długość i nie skacze w trakcie rysowania. */
      const kolejka = [];
      for (let nr = 1; nr <= dokument.numPages; nr++) {
        const strona = await dokument.getPage(nr);
        if (moje !== zadanie) return;
        const bazowy = strona.getViewport({ scale: 1 });
        const widok = strona.getViewport({ scale: (szerokosc / bazowy.width) * gestosc });

        const img = document.createElement('img');
        img.className = 'doc-page';
        img.alt = '';
        img.decoding = 'async';
        img.loading = 'lazy';   // dekodowanie dopiero przy dojściu do strony
        img.style.aspectRatio = widok.width + ' / ' + widok.height;
        /* menu pod prawym przyciskiem oferowałoby „Zapisz obraz jako” */
        img.addEventListener('contextmenu', e => e.preventDefault());
        strony.appendChild(img);
        kolejka.push({ strona, img, widok });
      }

      /* Dwie rzeczy, które decydują o płynności przewijania.

         Po pierwsze: strona ląduje na ekranie jako zwykły obrazek, nie jako
         płótno. Kilkanaście płócien naraz to dziesiątki megabajtów surowych
         pikseli, którymi przeglądarka żongluje przy każdym przewinięciu.
         Zakodowany obrazek waży kilkanaście kB i jest dla niej tym samym co
         zdjęcie w artykule. Płótno jest jedno, używane w kółko.

         Po drugie: kolejność rysowania idzie za wzrokiem czytelnika, a nie za
         numeracją stron. Przewinięcie do strony 8 oznaczałoby inaczej czekanie,
         aż przemielą się strony 2–7. Przed każdą stroną wybieramy tę najbliższą
         temu, co widać na ekranie; reszta dorabia się w tle. */
      const ciało = box.querySelector('.doc-modal-body');
      const pozostale = new Set(kolejka);
      const najblizsza = () => {
        const srodekEkranu = ciało.scrollTop + ciało.clientHeight / 2;
        let naj = null, najDystans = Infinity;
        for (const poz of pozostale) {
          const srodekStrony = poz.img.offsetTop + poz.img.offsetHeight / 2;
          const dystans = Math.abs(srodekStrony - srodekEkranu);
          if (dystans < najDystans) { najDystans = dystans; naj = poz; }
        }
        return naj;
      };

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      while (pozostale.size) {
        if (moje !== zadanie) break;
        const pozycja = najblizsza();
        pozostale.delete(pozycja);
        const { strona, img, widok } = pozycja;
        canvas.width = Math.floor(widok.width);
        canvas.height = Math.floor(widok.height);
        await strona.render({ canvas, canvasContext: ctx, viewport: widok }).promise;
        if (moje !== zadanie) break;

        const blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.85));
        if (moje !== zadanie) break;
        if (blob) {
          const adres = URL.createObjectURL(blob);
          adresyBlob.push(adres);
          img.src = adres;
        }
        strona.cleanup();
        await new Promise(r => setTimeout(r, 0));   // oddajemy sterowanie przeglądarce
      }
      /* zwolnienie ostatniego płótna — inaczej zostaje w pamięci do zamknięcia */
      canvas.width = canvas.height = 0;
    } catch (err) {
      if (moje !== zadanie) return;
      stan.hidden = false;
      stan.textContent = t('docError') || 'Nie udało się wczytać dokumentu.';
      console.error('[docviewer]', err);
    }
  }

  /* Wszystkie przyciski dokumentów obsługujemy jednym nasłuchem na dokumencie —
     kafelki powstają w buildzie, więc są w HTML od początku, ale to i tak
     przeżyje ewentualne dorysowanie ich przez skrypt. */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-doc]');
    if (!btn) return;
    e.preventDefault();
    otworz(btn.getAttribute('data-doc'), btn.getAttribute('data-doc-title'));
  });

  window.fsDoc = { open: otworz, close: zamknij };
})();
