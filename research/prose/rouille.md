Rouille is a synchronous web micro-framework library for Rust. It creates a listening socket and parses incoming HTTP requests from clients, and the crate's API reference is published on docs.rs.

## Worth knowing

Each request is handled on its own dedicated thread with synchronous I/O. Database handling and templating are not handled by the library directly, according to its README.
