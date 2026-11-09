GraphQL Tools is a set of npm packages for building GraphQL schemas and resolvers in JavaScript. The [introduction](https://the-guild.dev/graphql/tools/docs/introduction) says the packages live under the @graphql-tools scope, and the install instructions name @graphql-tools/schema. The packages work with any GraphQL-JS schema and can also be used in the browser.

## Worth knowing

The umbrella package named graphql-tools is deprecated by its own source code: it now exports only makeExecutableSchema and points users to the scoped packages. The repository is maintained by The Guild, Inc., and the scoped packages carry the current API.
