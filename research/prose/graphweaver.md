Graphweaver is a GraphQL server written in TypeScript. It connects several data sources, such as PostgreSQL, MySQL, SQLite and REST APIs, and presents them as one instant GraphQL API. The README calls it an open source alternative to Hasura. Developers create a project with the Graphweaver CLI. The admin panel is a React application, and the [documentation](https://graphweaver.com/docs) describes how to extend it with custom pages and fields.

Permissions are assigned to roles, and roles are given to users. The project is published as open source by Exogee Pty Ltd, an Australian software engineering company, under the Apache License 2.0.

## Worth knowing

The [deployment overview](https://docs.graphweaver.com/deployments) says the build writes two outputs: the admin panel as static files, which any static web host can serve, and a single backend file that runs under Node.js. The backend needs a Node process that keeps running, so static hosting alone does not serve the API.

The README quick start lists PNPM as a prerequisite next to Node.

Graphweaver connects to databases; it does not keep content of its own, so the data stays in the systems it connects to.
