GraphQL Code Generator is a command-line tool that generates code from a GraphQL schema and the operations written against it. Its project site describes it as a way to generate anything from a GraphQL schema, and the project maintains a plugin directory. A project installs it as a dependency with npm, and the tool runs on Node.js in development and CI.

The project's site presents it as part of The Guild's Hive ecosystem. Dotan Simha holds the copyright line in the license.

## Worth knowing

The docs say the tool loads plugins with require, which can fail in a monorepo when dependencies are hoisted.
