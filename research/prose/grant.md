Grant runs the redirect and callback steps of an OAuth or OpenID Connect login, and hands a Node.js web app the tokens, and optionally the user profile, from the provider. It mounts as middleware on Express, Koa, Hapi or Fastify, or runs as a handler for AWS Lambda, Azure Functions, Google Cloud Functions or Vercel.

Providers are set in a configuration object. Grant uses the app's session to keep state between the redirects of a login, and the README documents the OAuth 1.0a and OAuth 2.0 flows and OpenID Connect.

## Worth knowing

The README warns that the querystring transport can leak private data into server logs. It also says Grant does not verify the signature of an id_token by default.
