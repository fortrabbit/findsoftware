Tide is a Rust web application framework for async HTTP servers and APIs. An application creates a server with `tide::new()`, registers handlers by path and HTTP method, and calls `listen` to run the server inside the same process. The [README](https://github.com/http-rs/tide/blob/main/README.md) shows JSON request bodies being parsed into typed structs, and the crate is published on crates.io as `tide`.

## Worth knowing

The README's dependency example names a version that exists only as a pre-release on crates.io, newer than the latest stable one.
