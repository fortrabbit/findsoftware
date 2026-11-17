ZenStack is a TypeScript database toolkit: a schema file defines the data model, and an ORM reads and writes the database from it. The ORM is built on Kysely and offers a query API compatible with Prisma's, and the [migration guide](https://zenstack.dev/docs/migrate-prisma) covers moving an existing Prisma project. A query service can serve the model as RESTful web APIs, and ZenStack Studio is a database studio started from the command line. Built-in access control belongs to the same toolkit.

The packages are installed from npm under the `@zenstackhq` scope, and `npm create zenstack` scaffolds a new project. The repository is a monorepo, so its stars and contributors cover every package. ZenStack Dev, Inc. maintains it.

## Worth knowing

The docs name Node.js 20 as the minimum, while the published packages declare Node.js 22. The project began as an extension of Prisma ORM, and its current major line removed Prisma as a runtime dependency.
