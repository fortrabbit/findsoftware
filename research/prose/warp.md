warp is a web server framework for Rust, built on hyper. Its building block is the Filter, and filters can be combined to express requirements on requests. The README lists path routing, JSON and form bodies, static files, websockets and compression among what filters provide.

A server is started by passing a filter to warp::serve and running it on a socket address. Projects add the crate to their Cargo dependencies together with Tokio.
