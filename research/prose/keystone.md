Keystone is a Node.js headless CMS and application framework that builds a GraphQL API and an admin UI from a TypeScript schema. Its database layer is Prisma, and Express serves the HTTP side as a long-running Node.js process. Custom REST endpoints can be added to the Express app, and the admin UI accepts custom React components. Thinkmill, a company based in Australia, maintains Keystone.

## Worth knowing

Keystone renders no pages. Its outputs are the GraphQL API and the admin UI, so a website needs its own frontend. Production deploys run database migrations before the server starts, so the database has to be reachable at that point. The docs advise against SQLite in production.
