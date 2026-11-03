PostGraphile builds a GraphQL API from a PostgreSQL database and lets developers customize and extend the generated schema with plugins. It is a Node.js tool with three modes: a command-line tool that starts a Node HTTP server, middleware inside an existing Node server, or a standalone GraphQL schema. The [production guide](https://postgraphile.org/postgraphile/5/production) lists deployment to Heroku, a virtual machine, a container or bare metal, and an official Docker image exists for standalone use without custom plugins. Community plugins are listed on the docs site.

## Worth knowing

PostGraphile Pro is a commercial plugin, available to sponsors and by licence, that the [pricing page](https://postgraphile.org/pricing) describes as an add-on for PostGraphile V4 Core. The Docker deployment guide carries a warning that it has not yet been tested with the current release line.
