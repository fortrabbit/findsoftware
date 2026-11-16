Laravel GraphQL adds a code-first GraphQL server to a Laravel application. Types, queries and mutations are declared as PHP classes rather than in `.graphql` schema files, and each query or mutation is exposed as a request endpoint.

The package builds on webonyx/graphql-php, the PHP port of the GraphQL reference implementation. The [README](https://github.com/rebing/graphql-laravel/blob/master/README.md) covers multiple schemas, data loading with dataloaders or the optional SelectFields package, validation, authorization and automatic persisted queries.

## Worth knowing

GraphQL subscriptions are not supported. The README points to Lighthouse for real-time push.

Introspection is disabled by default in the configuration.
