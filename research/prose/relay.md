Relay is a JavaScript framework for building data-driven React applications on GraphQL. Each component declares the data it needs, and the Relay compiler aggregates those declarations into GraphQL requests at build time. At runtime, the Relay store keeps every component that reads the same data up to date.

The [Relay documentation](https://relay.dev/docs/) describes the framework, and its [quick start](https://relay.dev/docs/getting-started/quick-start/) walks through adding Relay to a React project.

## Worth knowing

Relay requires a Babel plugin and the Relay Compiler, so a build step is part of the setup. It also makes assumptions about the GraphQL server: that it provides a way to refetch an object and a description of how to page through connections. The [GraphQL server specification](https://relay.dev/docs/guides/graphql-server-specification/) spells them out.
