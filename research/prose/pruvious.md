Pruvious is a Nuxt module that adds a CMS to a Nuxt site. It provides blocks written as Vue components, a dashboard, a REST API generated for each collection, translations, and roles and permissions. Data is stored in SQLite or PostgreSQL, with Redis as an optional cache. A new project is created with `npx pruvious@3 init <dir>`, which installs Nuxt and Pruvious. The CLI deploys a site to a server and starts a Node.js process there.

## Worth knowing

The deployment command starts a Node.js process on the server, so a live site needs a host that runs one.
