VoidAuth is a single sign-on server written in TypeScript that runs on Node.js and stands in front of self-hosted applications. It acts as an OpenID Connect provider for applications that speak OIDC, exposes an LDAP directory, and offers forward-auth endpoints that a reverse proxy calls for each request. Administrators manage users and security groups in a built-in admin panel. The install route is Docker Compose, with PostgreSQL or a SQLite file for storage.

## Worth knowing

The README's disclaimer says the project has not been audited. A protected site needs a reverse proxy in front of VoidAuth, because the proxy calls the forward-auth endpoints for each request.
