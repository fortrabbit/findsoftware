SonicJS is a headless content management system written in TypeScript. It generates a REST API and an admin interface from the content schema, and a GraphQL endpoint is available as an opt-in plugin.

The primary deployment target is Cloudflare Workers, where content is kept in a D1 database (SQLite at the edge). The self-hosting guide describes a second path: a Docker image or a Node.js process with a local SQLite file and no Cloudflare account. The install docs start from the create-sonicjs scaffolder.

The project is maintained by Lane Campbell and SonicJS contributors.

## Worth knowing

The newest major line is published as betas only; the stable releases belong to the previous major.
