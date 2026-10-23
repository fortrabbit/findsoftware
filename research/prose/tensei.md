Tensei is a headless CMS written in TypeScript and run on Node.js. A project defines its resources in code, and each resource represents a database table. The docs describe a fully customisable GraphQL or REST API, with a CMS dashboard and role-based access control included.

A new project is generated with `npx create-tensei-app` or `yarn create tensei-app`, and the server it creates runs as a long-lived Node.js process. Database access goes through MikroORM, and the docs name MySQL, PostgreSQL, SQLite and MongoDB as supported databases, each installed with its own driver package. The source is MIT-licensed and hosted in the tenseijs GitHub organization.

## Worth knowing

The project's website no longer serves the software: its domain now redirects to a parking page. The guides are therefore read from the documentation source repository, which has not been pushed since the newest tag, so the pages describe that release. The repository publishes versions as tags, not GitHub releases.
