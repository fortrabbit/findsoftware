Rocket is an async web framework for Rust. A Rocket project is a Cargo project that depends on Rocket, as the [getting-started guide](https://rocket.rs/guide/v0.5/getting-started/) describes. Templates render through Handlebars or Tera, and the [deployment guide](https://rocket.rs/guide/deploying/) covers running an application in production.

## Worth knowing

Once a Rocket application has started, it runs until a graceful shutdown is initiated, so a host has to keep a process running.
