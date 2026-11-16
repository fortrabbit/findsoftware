MRML reimplements MJML, the responsive email framework, in Rust. The crate parses MJML templates and renders them to HTML from Rust code. The same repository also publishes a command-line tool, a WebAssembly package and a Python binding, and the README says the Rust and WebAssembly builds can run in the browser where the JavaScript implementation cannot.

## Worth knowing

The README's missing-implementations list names `mj-style` with inline set, and `mj-include`, the latter tied to loading remote templates in WebAssembly.
