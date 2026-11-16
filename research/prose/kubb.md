Kubb is a code generator that reads an API description, such as OpenAPI, and writes TypeScript types, API clients, query hooks, validators and mocks. Each output is a plugin listed in a kubb.config.ts file, and running kubb generate writes the files, which the application then imports like any other module.

The repository is a monorepo that also ships the command-line package, the plugins and the adapters. The libraries that the generated clients import at runtime, such as axios, React or TanStack Query, are installed by the application's owner.

## Worth knowing

Kubb Studio is a hosted companion with a shared sandbox, and it can also run as a local agent started from a project folder. The README says Kubb works without Studio. The integration pages describe generation during a build or in CI, through the command line or a bundler plugin.
