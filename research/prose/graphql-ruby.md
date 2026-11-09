graphql-ruby is a Ruby gem for building a GraphQL server in Ruby. The [getting-started guide](https://graphql-ruby.org/guides/development/getting_started_md.html) declares object types and resolver classes in Ruby, connects them to a schema class with a query root, and runs queries with Schema.execute. On Rails, a generator adds that boilerplate and mounts GraphiQL in development.

## Worth knowing

The maintainer sells GraphQL::Pro, a separate gem under a special commercial license. The README describes it as providing several features on top of the GraphQL runtime, among them persisted queries, rate limiters and authorization plugins for Pundit and CanCan.
