/* Krok 2 logowania do panelu /admin: wymiana kodu na token i przekazanie go
   do okna panelu (protokół zgodny z Decap/Sveltia CMS). */

/* Adresy, pod którymi działa nasz panel. Token wolno oddać tylko okienku
   z jednego z nich — inaczej dowolna strona, która zdąży wysłać wiadomość
   do tego popupu, dostałaby token z prawem zapisu do repozytorium.
   Po przełączeniu domeny lista zostaje: stary adres Vercela nadal działa. */
const ALLOWED_ORIGINS = [
  'https://fundacja-stock-design.vercel.app',
  'https://fundacjastock.pl',
  'https://www.fundacjastock.pl'
];

export default async function handler(req, res) {
  const { code, state } = req.query;
  const cookieState = (req.headers.cookie || '').match(/gh_oauth_state=([^;]+)/)?.[1];
  /* znacznik jednorazowy — wygasza się niezależnie od wyniku wymiany */
  res.setHeader('Set-Cookie', 'gh_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');
  if (!code || !state || state !== cookieState) {
    res.status(400).send('Invalid OAuth state'); return;
  }

  let payload;
  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GH_OAUTH_CLIENT_ID,
        client_secret: process.env.GH_OAUTH_CLIENT_SECRET,
        code
      })
    });
    const data = await r.json();
    payload = data.access_token
      ? 'authorization:github:success:' + JSON.stringify({ token: data.access_token, provider: 'github' })
      : 'authorization:github:error:' + JSON.stringify(data);
  } catch (e) {
    payload = 'authorization:github:error:' + JSON.stringify({ error: 'token_exchange_failed', message: String(e && e.message || e) });
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const allowed = [...new Set([`https://${host}`, ...ALLOWED_ORIGINS])];

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send([
    '<!doctype html><html lang="pl"><body>Logowanie… <script>',
    '(function () {',
    '  var payload = ' + JSON.stringify(payload).replace(/</g, '\\u003c') + ';',
    '  var allowed = ' + JSON.stringify(allowed).replace(/</g, '\\u003c') + ';',
    '  if (!window.opener) {',
    '    document.body.textContent = "Otwórz panel pod adresem /admin/ i zaloguj się z niego — to okno powinno być otwarte przez panel.";',
    '    return;',
    '  }',
    '  function receive(e) {',
    '    if (allowed.indexOf(e.origin) === -1) return;',   // nie nasz panel — token nie wychodzi
    '    window.removeEventListener("message", receive, false);',
    '    window.opener.postMessage(payload, e.origin);',
    '  }',
    '  window.addEventListener("message", receive, false);',
    '  window.opener.postMessage("authorizing:github", "*");',
    '})();',
    '</script></body></html>'
  ].join('\n'));
}
