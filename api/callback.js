/* Krok 2 logowania do panelu /admin: wymiana kodu na token i przekazanie go
   do okna panelu (protokół zgodny z Decap/Sveltia CMS). */
export default async function handler(req, res) {
  const { code, state } = req.query;
  const cookieState = (req.headers.cookie || '').match(/gh_oauth_state=([^;]+)/)?.[1];
  if (!code || !state || state !== cookieState) {
    res.status(400).send('Invalid OAuth state'); return;
  }
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
  const payload = data.access_token
    ? 'authorization:github:success:' + JSON.stringify({ token: data.access_token, provider: 'github' })
    : 'authorization:github:error:' + JSON.stringify(data);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send([
    '<!doctype html><html><body>Logowanie… <script>',
    '(function () {',
    '  var payload = ' + JSON.stringify(payload).replace(/</g, '\\u003c') + ';',
    '  function receive(e) {',
    '    window.opener.postMessage(payload, e.origin);',
    '    window.removeEventListener("message", receive, false);',
    '  }',
    '  window.addEventListener("message", receive, false);',
    '  window.opener.postMessage("authorizing:github", "*");',
    '})();',
    '</script></body></html>'
  ].join('\n'));
}
