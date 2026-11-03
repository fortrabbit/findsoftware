Zero is a sync engine for web applications. It keeps a client-side store of the rows an app's UI queries and syncs them in the background with a Postgres database. Queries run against the client first and are answered by the server asynchronously. Reads and writes flow through the app's own code on its server, so permissions and business logic stay there. The [install guide](https://zero.rocicorp.dev/docs/install) adds the package with npm.

The [deployment guide](https://zero.rocicorp.dev/docs/deployment) describes the self-hosted parts: a zero-cache server that keeps a SQLite replica, a Postgres database, the frontend and an API server for the query and mutate endpoints. The project is run by Rocicorp, which also offers a fully managed service that can run on Rocicorp's servers or the customer's.

## Worth knowing

Self-hosting is more than a static frontend deployment: it needs the zero-cache server, a Postgres database and an API server. The managed service is a hosted offering next to the open-source package.
