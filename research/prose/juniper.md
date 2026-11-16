Juniper is a Rust library for building GraphQL servers. It takes a code-first approach, in which the GraphQL schema is declared in Rust, and it executes queries against that schema. It does not include a web server. It provides the building blocks, and separate crates in the same repository connect it to the Actix, Axum, Hyper, Rocket and Warp web frameworks.

The library is added as a dependency in a Cargo project. The README lists automatic integrations with common Rust types such as uuid, chrono and time.

## Worth knowing

The README says the API has not reached 1.0, so some API instability should be expected. The schema-first alternative is a separate project, juniper-from-schema.
