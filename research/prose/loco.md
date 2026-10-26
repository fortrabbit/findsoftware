Loco is a framework for web apps and JSON APIs written in Rust. The project describes itself as following Rails and adapting its concepts to Rust. Generators create models, controllers, background jobs and mailers, and the homepage names SeaORM and Axum as part of the stack.

The README installs the generator with `cargo install loco`, and `loco new` creates an app. Data is kept in PostgreSQL or SQLite, chosen in the database URI of the configuration file. Server-rendered HTML uses the Tera template engine, and a separate guide covers building a single-page app against the Loco backend.

## Worth knowing

A release build produces one binary, so the production host needs that binary and a config folder but no Rust toolchain. The [deployment guide](https://loco.rs/docs/how-to/deploy/) also covers a generated Dockerfile. The background workers and scheduler need an always-on host.
