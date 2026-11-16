SeaORM is an object-relational mapper for Rust that maps database tables to entity types and runs queries against them through an async API. It is built on SeaQuery, the query builder that the project publishes as a separate crate, and its database drivers come from SQLx. The sea-orm-cli tool, installed with cargo, can generate entity files from an existing database.

## Worth knowing

The README says SeaORM's default features do not enable TLS. A TLS backend is chosen by adding a SQLx dependency with the desired TLS feature.

MS SQL Server support is offered as SeaORM X, a separate closed-beta product built on SeaORM.
