RedwoodJS is a full-stack framework built on React. The default database is SQLite, and the [local Postgres guide](https://docs.redwoodjs.com/docs/local-postgres-setup) covers running Postgres on a developer's machine for projects that use it in production.

Redwood supports prerendering at build time, which renders the pages to HTML before deployment. The [deployment docs](https://docs.redwoodjs.com/docs/deploy/baremetal) describe three shapes: a static web build served as files, a server that keeps the API process running under PM2, and serverless functions on hosted platforms.

## Worth knowing

The docs banner and the README announce RedwoodSDK, a separate project in its own repository, and the README describes an unreleased development epoch named Bighorn. The Serverless Framework deploy target to AWS Lambdas is marked deprecated on its page.
