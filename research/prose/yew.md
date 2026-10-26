Yew is a Rust framework for building web applications. The application is added to a Cargo project as a dependency and built with the Trunk bundler into a WebAssembly bundle, which runs in the browser and renders components on the client by default. The docs describe server-side rendering as an option through a server renderer. The project is developed in the open on GitHub under the yewstack organization.

## Worth knowing

The [deployment page](https://yew.rs/docs/more/deployment) has the built output served by any HTTP server, with index.html returned for paths the router handles. Server-side rendering is an option the [server-side rendering page](https://yew.rs/docs/advanced-topics/server-side-rendering) describes, not the default.
