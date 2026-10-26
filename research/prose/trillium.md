Trillium is a modular async web framework for Rust. Routing, sessions, compression, WebSockets, templates and an HTTP client are separate crates that compose around one `Handler` trait, so an application compiles only the crates it adds. The runtime is chosen with an adapter crate, and the project lists Tokio, smol, async-std and AWS Lambda; TLS comes from rustls, native-tls or OpenSSL.

The guide covers the same pieces, and the [Rustdocs](https://docs.trillium.rs) document each crate's interfaces. Template support covers Askama, Tera and Handlebars.

## Worth knowing

Trillium is published as a set of crates, and the crates carry different version numbers, so a release list on GitHub mixes the umbrella crate with others. The copyright holder is one named individual, and the homepage offers commercial support and consulting.
