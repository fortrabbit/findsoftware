gqlgen generates Go code for a GraphQL server from a schema written in the GraphQL schema definition language. The README describes the approach as schema first: the developer defines the API in the schema, and the generated code calls resolvers that the developer implements.

A project adds gqlgen as a Go tool dependency, runs its init command to create the project layout, and regenerates the code from the schema with its generate command. The getting-started tutorial walks through these steps.

## Worth knowing

Field resolvers run concurrently in separate goroutines. The worker_limit setting in the configuration sets how many run at once.
