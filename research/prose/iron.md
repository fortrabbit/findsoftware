Iron is a high-level web framework built in and for Rust, on top of the hyper HTTP library. A project adds it as a Cargo dependency and writes its handlers and middleware in Rust. The README describes it as scaling horizontally behind a load balancer, so an Iron app is a running Rust process.

The [API documentation](https://docs.rs/iron) is generated for each crate release. The README names Jonathan Reem as the core maintainer and author, and the LICENSE file gives the copyright to the Iron Core Team.

## Worth knowing

The README says no plugins or middleware are bundled with Iron. Routing, mounting, static file serving and logging are separate repositories.
