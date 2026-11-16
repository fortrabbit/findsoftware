SQLx is an async SQL crate for Rust that checks queries at compile time without a domain-specific language. The README says it is not an ORM and points readers who want an asynchronous ORM to an ecosystem page. It works with PostgreSQL, MySQL, MariaDB and SQLite.

The [repository](https://github.com/transact-rs/sqlx) is the project's current home.

## Worth knowing

The compile-time checked query macros connect to a development database at build time, and an offline mode caches the query analysis for builds without one. The repository moved from another GitHub owner, and the crate's package page and the README still link the old address. The README says SQL Server support was removed pending a rewrite of its driver.
