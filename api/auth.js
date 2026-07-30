/* Krok 1 logowania do panelu /admin: przekierowanie do autoryzacji GitHub.
   Wymaga zmiennych środowiskowych GH_OAUTH_CLIENT_ID / GH_OAUTH_CLIENT_SECRET
   (GitHub OAuth App z callbackiem na /api/callback). */
export default function handler(req, res) {
  const clientId = process.env.GH_OAUTH_CLIENT_ID;
  if (!clientId) { res.status(500).send('Missing GH_OAUTH_CLIENT_ID'); return; }
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const redirectUri = `https://${host}/api/callback`;
  const state = Math.random().toString(36).slice(2);
  res.setHeader('Set-Cookie', `gh_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
  const url = 'https://github.com/login/oauth/authorize' +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    '&scope=repo' +
    `&state=${state}`;
  res.writeHead(302, { Location: url });
  res.end();
}
