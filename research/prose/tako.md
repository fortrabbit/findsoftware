Tako is a Rust web framework for services that speak more than HTTP. One router serves HTTP, WebSocket, gRPC and raw socket services. The [comparison page](https://tako.rust-dd.com/docs/concepts/comparison) sets it against Axum and Actix Web, the two frameworks it names as alternatives, and the application is added with `cargo add tako-rs`.

## Worth knowing

The crates.io name `tako` belongs to a different package, the SDK for tako.sh, so the crate to add is `tako-rs`. The [deployment guide](https://tako.rust-dd.com/docs/deployment) describes the thread-per-core entry point as one that waits for Ctrl+C or SIGTERM, which makes it a process that keeps running on the host.
