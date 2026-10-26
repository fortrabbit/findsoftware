togo is a full-stack framework that builds a Go API and a web frontend in one repository. The API compiles to a static Go binary shipped in a distroless container image, and every resource is exposed over GraphQL and REST/OpenAPI 3.1. The core is a microkernel: REST, GraphQL, auth and the dashboard are plugins that `togo install <owner>/<repo>` adds to an app. The `togo` command-line tool creates apps, generates resources and runs the server.

The default database is SQLite, and the docs also name Postgres, MySQL and MongoDB. Deployment is documented for Google Cloud Run, Fly.io and Docker containers, with Terraform scaffolded by the CLI. The [documentation](https://to-go.dev/en/docs) covers the guides and the CLI reference.

## Worth knowing

The project's own pages disagree on the frontend: the homepage names React with TanStack, while the README and the docs name Next.js. Roles and SSO come from the first-party auth plugin rather than the core.
