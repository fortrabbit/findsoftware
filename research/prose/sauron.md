sauron is a Rust web framework for client-side and server-side applications, following The Elm Architecture. The README says an application consists of a model, a view and an update function, all written in Rust. The [getting-started guide](https://github.com/ivanceras/sauron/blob/master/docs/getting-started.md) adds the crate as a Cargo dependency, compiles it to WebAssembly with wasm-pack and serves the result with a static file server.

The README lists server-side rendering and static site generation among the features. The copyright line in the license names Jovansonlee Cesar.

## Worth knowing

The README and the getting-started guide show crate versions older than the registry's latest, so a copied Cargo line needs checking before use.
