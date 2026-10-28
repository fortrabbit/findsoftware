Trunk is a bundler for Rust applications compiled to WebAssembly. It reads a source index.html file, compiles the Rust crate, and bundles the WebAssembly, the JavaScript loader and other assets such as SCSS and images into a dist folder. The dist output is static files that a web server can serve. Trunk is installed with `cargo install --locked trunk`, from a GitHub release binary, or with Homebrew. The `trunk serve` command starts a built-in development server.

## Worth knowing

Trunk is a build step, so no Trunk process runs for the live site.
