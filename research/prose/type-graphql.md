TypeGraphQL is a TypeScript framework for GraphQL APIs that runs on Node.js. Object types, inputs and resolvers are classes annotated with decorators, and the framework generates the GraphQL schema from them, so the types are written once in TypeScript and not again in a separate schema file.

The [installation guide](https://typegraphql.com/docs/installation.html) asks for graphql-js and graphql-scalars beside the framework, because they are its peer dependencies. Input validation uses decorators from the class-validator library, and the docs also describe integrations with TypeORM, Prisma and NestJS. The [introduction](https://typegraphql.com/docs/introduction.html) explains the approach.

## Worth knowing

The docs site presents the next major line, which is still in release candidates, so the newest stable release comes from an earlier line. The stable release's manifest states a lower Node.js minimum than the candidates do, so the release a reader installs decides which Node.js it needs.
