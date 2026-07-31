/* Shared chrome (header + footer), i18n and UI for all pages.
   Each page defines PAGE_I18N before loading this file and provides
   <header class="site" id="site-header"></header> and <footer class="site" id="site-footer"></footer>. */

/* ---- languages (add a line here to support a new one — the dropdown scales automatically) ---- */
const LANGS = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
  { code: 'cz', name: 'Čeština' },
  { code: 'it', name: 'Italiano' },
  { code: 'sk', name: 'Slovenčina' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' }
];

/* Languages actually released to the public. build-langs.mjs sets
   window.FS_PUBLIC_LANGS from its own PUBLIC_LANGS list — change it THERE, not
   here. The rest stay in the picker as a disabled "coming soon" entry: the
   translations are finished and deployed, they just await native-speaker sign-off.
   Raw dev files (no build) show every language. */
const PUBLIC_LANGS = Array.isArray(window.FS_PUBLIC_LANGS) ? window.FS_PUBLIC_LANGS : LANGS.map(l => l.code);
const isPublic = code => PUBLIC_LANGS.includes(code);

const COMMON_I18N = {
  en: {
    navMission: 'Mission', navAbout: 'About us', navStatute: 'Statute & Reports', navCouncil: 'Council & Board', navNews: 'News', navContact: 'Contact',
    readMore: 'Read more', findOutMore: 'Find out more', home: 'Home',
    footerBlurb: 'A charitable foundation from Lublin helping refugees and local communities, and promoting art as therapy.',
    footerContact: 'Contact', footerCountry: 'Poland', footerNav: 'Explore',
    cityLublin: 'Lublin', cityWarsaw: 'Warsaw', langSoon: 'coming soon',
    footerPrivacy: 'Privacy and Cookies', footerCredit: 'Website by ',
    cookieText: 'We use necessary cookies to make the site work and — only with your consent — analytics cookies (Google Analytics) to understand how it is used.', cookieAccept: 'Accept all', cookieDecline: 'Necessary only', cookieMore: 'Learn more'
  },
  pl: {
    navMission: 'Misja', navAbout: 'O nas', navStatute: 'Statut i sprawozdania', navCouncil: 'Rada i Zarząd', navNews: 'Aktualności', navContact: 'Kontakt',
    readMore: 'Czytaj więcej', findOutMore: 'Dowiedz się więcej', home: 'Strona główna',
    footerBlurb: 'Fundacja charytatywna z Lublina pomagająca uchodźcom i lokalnym społecznościom oraz promująca sztukę jako terapię.',
    footerContact: 'Kontakt', footerCountry: 'Polska', footerNav: 'Nawigacja',
    cityLublin: 'Lublin', cityWarsaw: 'Warszawa', langSoon: 'wkrótce',
    footerPrivacy: 'Prywatność i cookies', footerCredit: 'Strona wykonana przez ',
    cookieText: 'Używamy niezbędnych plików cookie, aby strona działała, oraz — wyłącznie za Twoją zgodą — analitycznych (Google Analytics), aby rozumieć, jak jest używana.', cookieAccept: 'Akceptuję wszystkie', cookieDecline: 'Tylko niezbędne', cookieMore: 'Dowiedz się więcej'
  },
  cz: {
    navMission: 'Mise', navAbout: 'O nás', navStatute: 'Statut a zprávy', navCouncil: 'Rada a představenstvo', navNews: 'Novinky', navContact: 'Kontakt',
    readMore: 'Číst dále', findOutMore: 'Zjistit více', home: 'Úvod',
    footerBlurb: 'Charitativní nadace z Lublinu pomáhající uprchlíkům a místním komunitám a podporující umění jako terapii.',
    footerContact: 'Kontakt', footerCountry: 'Polsko', footerNav: 'Prozkoumat',
    cityLublin: 'Lublin', cityWarsaw: 'Varšava', langSoon: 'již brzy',
    footerPrivacy: 'Soukromí a cookies', footerCredit: 'Web vytvořila ',
    cookieText: 'Používáme nezbytné soubory cookie, aby web fungoval, a — pouze s vaším souhlasem — analytické (Google Analytics), abychom rozuměli, jak se používá.', cookieAccept: 'Přijmout vše', cookieDecline: 'Pouze nezbytné', cookieMore: 'Zjistit více'
  },
  it: {
    navMission: 'Missione', navAbout: 'Chi siamo', navStatute: 'Statuto e rapporti', navCouncil: 'Consiglio e direzione', navNews: 'Notizie', navContact: 'Contatti',
    readMore: 'Leggi di più', findOutMore: 'Scopri di più', home: 'Home',
    footerBlurb: 'Una fondazione benefica di Lublino che aiuta rifugiati e comunità locali e promuove l’arte come terapia.',
    footerContact: 'Contatti', footerCountry: 'Polonia', footerNav: 'Esplora',
    cityLublin: 'Lublino', cityWarsaw: 'Varsavia', langSoon: 'presto',
    footerPrivacy: 'Privacy e cookie', footerCredit: 'Sito realizzato da ',
    cookieText: 'Utilizziamo cookie necessari per far funzionare il sito e — solo con il tuo consenso — cookie analitici (Google Analytics) per capire come viene utilizzato.', cookieAccept: 'Accetta tutti', cookieDecline: 'Solo necessari', cookieMore: 'Scopri di più'
  },
  sk: {
    navMission: 'Misia', navAbout: 'O nás', navStatute: 'Štatút a správy', navCouncil: 'Rada a predstavenstvo', navNews: 'Aktuality', navContact: 'Kontakt',
    readMore: 'Čítať ďalej', findOutMore: 'Zistiť viac', home: 'Domov',
    footerBlurb: 'Charitatívna nadácia z Lublina, ktorá pomáha utečencom a miestnym komunitám a podporuje umenie ako terapiu.',
    footerContact: 'Kontakt', footerCountry: 'Poľsko', footerNav: 'Preskúmať',
    cityLublin: 'Lublin', cityWarsaw: 'Varšava', langSoon: 'čoskoro',
    footerPrivacy: 'Súkromie a cookies', footerCredit: 'Web vytvorila ',
    cookieText: 'Používame nevyhnutné súbory cookie, aby stránka fungovala, a — iba s vaším súhlasom — analytické (Google Analytics), aby sme rozumeli, ako sa používa.', cookieAccept: 'Prijať všetky', cookieDecline: 'Iba nevyhnutné', cookieMore: 'Zistiť viac'
  },
  de: {
    navMission: 'Mission', navAbout: 'Über uns', navStatute: 'Satzung & Berichte', navCouncil: 'Stiftungsrat & Vorstand', navNews: 'Aktuelles', navContact: 'Kontakt',
    readMore: 'Weiterlesen', findOutMore: 'Mehr erfahren', home: 'Startseite',
    footerBlurb: 'Eine gemeinnützige Stiftung aus Lublin, die Geflüchteten und lokalen Gemeinschaften hilft und Kunst als Therapie fördert.',
    footerContact: 'Kontakt', footerCountry: 'Polen', footerNav: 'Entdecken',
    cityLublin: 'Lublin', cityWarsaw: 'Warschau', langSoon: 'demnächst',
    footerPrivacy: 'Datenschutz und Cookies', footerCredit: 'Website von ',
    cookieText: 'Wir verwenden notwendige Cookies, damit die Website funktioniert, und — nur mit Ihrer Einwilligung — Analyse-Cookies (Google Analytics), um zu verstehen, wie sie genutzt wird.', cookieAccept: 'Alle akzeptieren', cookieDecline: 'Nur notwendige', cookieMore: 'Mehr erfahren'
  },
  fr: {
    navMission: 'Mission', navAbout: 'À propos', navStatute: 'Statuts et rapports', navCouncil: 'Conseil et direction', navNews: 'Actualités', navContact: 'Contact',
    readMore: 'Lire la suite', findOutMore: 'En savoir plus', home: 'Accueil',
    footerBlurb: 'Une fondation caritative de Lublin qui aide les réfugiés et les communautés locales et promeut l’art comme thérapie.',
    footerContact: 'Contact', footerCountry: 'Pologne', footerNav: 'Explorer',
    cityLublin: 'Lublin', cityWarsaw: 'Varsovie', langSoon: 'bientôt',
    footerPrivacy: 'Confidentialité et cookies', footerCredit: 'Site réalisé par ',
    cookieText: 'Nous utilisons des cookies nécessaires au fonctionnement du site et — uniquement avec votre consentement — des cookies analytiques (Google Analytics) pour comprendre comment il est utilisé.', cookieAccept: 'Tout accepter', cookieDecline: 'Nécessaires uniquement', cookieMore: 'En savoir plus'
  }
};

const PAGE = (typeof PAGE_I18N !== 'undefined') ? PAGE_I18N : { en: {}, pl: {}, cz: {}, it: {}, sk: {}, de: {}, fr: {} };
function dict(lang) {
  return Object.assign({}, COMMON_I18N.en, (PAGE.en || {}), COMMON_I18N[lang] || {}, PAGE[lang] || {});
}

/* ---------- i18n ----------
   With the static language builds each URL carries its own language via
   window.FS_LANG (set in <head> by build-langs.mjs). English lives at the
   root, the others in subdirectories. Without FS_LANG (raw dev files) we fall
   back to the old localStorage behaviour. Declared before buildHeader() runs,
   because the language picker needs it to label the "coming soon" entries. */
let currentLang = window.FS_LANG || localStorage.getItem('fs-lang') || 'en';
if (!LANGS.some(l => l.code === currentLang)) currentLang = 'en';

/* ---------- inject header + footer ---------- */
const NAV = [
  ['index.html', 'navMission'], ['about-us.html', 'navAbout'], ['statute.html', 'navStatute'],
  ['board-council.html', 'navCouncil'], ['news.html', 'navNews'], ['contact.html', 'navContact']
];
const FB_SVG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="#D0A41B"><path d="M9.6 16 v-5.9 h2 l0.3 -2.3 H9.6 V6.3 c0 -0.7 0.2 -1.1 1.2 -1.1 h1.2 V3.1 C11.8 3 11 3 10.2 3 C8.4 3 7.1 4.1 7.1 6.1 v1.7 H5.1 v2.3 h2 V16 Z"></path></svg>';
const IG_SVG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#D0A41B" stroke-width="1.4"><rect x="1.7" y="1.7" width="12.6" height="12.6" rx="4"></rect><circle cx="8" cy="8" r="3.1"></circle><circle cx="11.9" cy="4.1" r="0.95" fill="#D0A41B" stroke="none"></circle></svg>';

function buildHeader() {
  const h = document.getElementById('site-header');
  if (!h) return;
  const links = NAV.map(([href, k]) => `<a href="${href}" data-i18n="${k}"></a>`).join('');
  const soonLabel = dict(currentLang).langSoon;
  const langItems = LANGS.map(l => isPublic(l.code)
    ? `<li><button data-lang="${l.code}"><span class="code">${l.code.toUpperCase()}</span>${l.name}</button></li>`
    : `<li><button data-lang="${l.code}" class="soon" disabled aria-disabled="true"><span class="code">${l.code.toUpperCase()}</span>${l.name}<span class="soon-tag">${soonLabel}</span></button></li>`
  ).join('');
  h.innerHTML = `
    <div class="container header-inner">
      <a href="index.html" class="logo"><img src="/uploads/logo-footer.svg" alt="Stock Foundation"></a>
      <nav class="main-nav i18n-fade">${links}</nav>
      <div class="lang" id="langDD">
        <button class="lang-btn" id="langBtn" aria-haspopup="listbox" aria-expanded="false">
          <svg class="globe" viewBox="0 0 24 24" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18"></path></svg>
          <span id="langCur">EN</span>
          <svg class="chev" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4z"></path></svg>
        </button>
        <ul class="lang-list" id="langList" role="listbox">${langItems}</ul>
      </div>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
    <nav class="mobile-nav i18n-fade" id="mobileNav">${links}</nav>`;
}

function buildFooter() {
  const f = document.getElementById('site-footer');
  if (!f) return;
  f.innerHTML = `
    <div class="container">
      <div class="footer-grid i18n-fade">
        <div class="footer-col" style="gap:22px;">
          <div class="footer-logo"><img src="/uploads/logo-white.svg" alt="Stock Foundation"></div>
          <p class="footer-blurb" data-i18n="footerBlurb"></p>
        </div>
        <div class="footer-col">
          <span class="head" data-i18n="footerContact"></span>
          <span class="info">Spółdzielcza 6<br>20-402 <span data-i18n="cityLublin"></span>, <span data-i18n="footerCountry"></span></span>
          <a href="tel:+48538183916" style="font-weight:600;color:#fff;">+48 538 183 916</a>
          <div class="socials">
            <a href="https://www.facebook.com/fundacjastock/" aria-label="Facebook" class="li-badge" target="_blank" rel="noopener">${FB_SVG}</a>
            <a href="https://www.instagram.com/fundacja_stock" aria-label="Instagram" class="li-badge" target="_blank" rel="noopener">${IG_SVG}</a>
          </div>
        </div>
        <div class="footer-col">
          <span class="head" data-i18n="footerNav"></span>
          <a href="index.html" data-i18n="navMission"></a>
          <a href="news.html" data-i18n="navNews"></a>
          <a href="about-us.html" data-i18n="navAbout"></a>
          <a href="statute.html" data-i18n="navStatute"></a>
          <a href="board-council.html" data-i18n="navCouncil"></a>
        </div>
      </div>
      <div class="footer-bottom i18n-fade">
        <nav>
          <a href="privacy-policy.html" data-i18n="footerPrivacy"></a>
        </nav>
        <div class="footer-meta">
          <span>© 2026 Stock Foundation</span>
          <a class="credit" href="https://watahamedia.com/" target="_blank" rel="noopener">
            <span data-i18n="footerCredit"></span><span class="credit-name">Wataha Media</span>
          </a>
        </div>
      </div>
    </div>`;
}

buildHeader();
buildFooter();

/* URL of the current page in another language version (en = root) */
function langHref(code) {
  const page = location.pathname.split('/').pop() || 'index.html';
  const up = (window.FS_LANG && window.FS_LANG !== 'en') ? '../' : '';
  return (code === 'en' ? up : up + code + '/') + page + location.hash;
}

function applyLang(lang, instant) {
  const t = dict(lang);
  const swap = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    /* image descriptions — same dictionary, written to alt instead of text */
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.alt = t[key];
    });
    document.documentElement.lang = lang === 'cz' ? 'cs' : lang;
    const cur = document.getElementById('langCur');
    if (cur) cur.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-list button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    currentLang = lang;
    localStorage.setItem('fs-lang', lang);
    if (typeof window.onLangChange === 'function') window.onLangChange(lang);
  };
  if (instant) { swap(); return; }
  document.body.classList.add('lang-switching');
  setTimeout(() => { swap(); document.body.classList.remove('lang-switching'); }, 230);
}

/* language dropdown */
const langDD = document.getElementById('langDD');
const langBtn = document.getElementById('langBtn');
if (langDD && langBtn) {
  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    const open = langDD.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  langDD.querySelectorAll('.lang-list button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isPublic(btn.dataset.lang)) return;   // unreleased — picker entry is inert
      langDD.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
      if (btn.dataset.lang === currentLang) return;
      if (window.FS_LANG) { location.href = langHref(btn.dataset.lang); return; }
      applyLang(btn.dataset.lang);
    });
  });
  document.addEventListener('click', () => { langDD.classList.remove('open'); langBtn.setAttribute('aria-expanded', 'false'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { langDD.classList.remove('open'); langBtn.setAttribute('aria-expanded', 'false'); } });
}

applyLang(currentLang, true);

/* active nav link — the filename is normalised without its .html suffix so this
   works whether or not the host serves extensionless URLs, and every static
   article-<id> page highlights News (same for person-* → Council & Board). */
const file = (location.pathname.split('/').pop() || '').replace(/\.html$/, '');
const activeFor = { '': 'index.html', 'article': 'news.html', 'person': 'board-council.html' };
const activePath = activeFor[file] ||
  (file.startsWith('article-') ? 'news.html' : file.startsWith('person-') ? 'board-council.html' : file + '.html');
document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(a => {
  if (a.getAttribute('href') === activePath) a.classList.add('active');
});

/* header shadow + back-to-top */
const header = document.querySelector('header.site');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  if (toTop) toTop.classList.toggle('show', window.scrollY > 600);
}, { passive: true });
if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* burger */
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
  }));
}

/* scroll reveal */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
window.observeReveals = function () {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
};
window.observeReveals();

/* animated counters */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const plain = el.dataset.plain === '1';
  const dur = 1600;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(target * eased);
    el.textContent = plain ? String(val) : val.toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statsBand = document.getElementById('statsBand');
if (statsBand) {
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(animateCount);
        statsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  statsObserver.observe(statsBand);
}

/* lightbox — click any content image to enlarge */
const lb = document.createElement('div');
lb.className = 'lightbox';
lb.innerHTML = '<button class="lb-close" aria-label="Close">✕</button><img src="" alt=""><span class="lb-caption"></span>';
document.body.appendChild(lb);
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('.lb-caption');
function lbOpen(img) {
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt || '';
  lbCap.textContent = img.alt || '';
  lbCap.style.display = img.alt ? '' : 'none';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function lbClose() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { if (!lb.classList.contains('open')) lbImg.src = ''; }, 300);
}
lb.addEventListener('click', lbClose);
document.addEventListener('keydown', e => { if (e.key === 'Escape') lbClose(); });
document.addEventListener('click', e => {
  const img = e.target.closest('img');
  if (!img) return;
  if (img.closest('.lightbox') || img.closest('a') || img.closest('button')) return;
  if (img.classList.contains('hero-photo')) return;
  if (img.closest('header.site') || img.closest('.footer-logo')) return;
  if (img.naturalWidth < 200) return; // skip icons/tiny assets
  lbOpen(img);
});

/* cookie consent — two-choice banner; analytics (GA) must run only when
   localStorage 'fs-consent' === 'granted'. Gate any future GA snippet on it. */
if (!localStorage.getItem('fs-consent')) {
  const t = dict(currentLang);
  const bar = document.createElement('div');
  bar.className = 'cookie';
  bar.innerHTML = '<p>' + t.cookieText + ' <a href="privacy-policy.html">' + t.cookieMore + '</a></p>' +
    '<div class="cookie-actions"><button id="cookieDecline" class="secondary">' + t.cookieDecline + '</button>' +
    '<button id="cookieAccept">' + t.cookieAccept + '</button></div>';
  document.body.appendChild(bar);
  requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add('show')));
  const close = (choice) => {
    localStorage.setItem('fs-consent', choice);
    bar.classList.remove('show');
    setTimeout(() => bar.remove(), 500);
  };
  bar.querySelector('#cookieAccept').addEventListener('click', () => close('granted'));
  bar.querySelector('#cookieDecline').addEventListener('click', () => close('denied'));
}
