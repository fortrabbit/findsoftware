Automerge is a library of data structures for building collaborative applications, which its homepage describes as a local-first sync engine for multiplayer apps. The JavaScript package, @automerge/automerge, wraps a core written in Rust and compiled to WebAssembly. The repository is a monorepo that also holds language bindings and the automerge-repo library.

## Worth knowing

Browser projects need a bundler to load the package, because the WebAssembly core cannot be imported as an ES module in browsers. The project's own docs describe the JavaScript implementation as usable in Node.js, Electron and browsers.
