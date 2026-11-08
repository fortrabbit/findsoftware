ent is an entity framework for Go, maintained by The Ent Authors. A database schema is modeled as Go code, and the project's codegen tool from the cmd/ent package generates the Go code the application builds on. The [code generation page](https://entgo.io/docs/code-gen/) shows how to add ent to a project's go.mod with Go modules.

The GraphQL integration uses the gqlgen library to generate a GraphQL schema and Query and Mutation resolvers from the entity schema.

The documentation is at entgo.io, starting with a [getting-started guide](https://entgo.io/docs/getting-started/).
