wasm-pack is a command-line tool that compiles a Rust crate to WebAssembly and packages the output for JavaScript. The build command writes a `pkg` folder with the compiled `.wasm` binary, a JavaScript wrapper, type declarations and a `package.json`. That folder can be published to the npm registry or used alongside JavaScript packages in an existing bundler workflow.

The build command takes a target that sets how the JavaScript is emitted and loaded: bundler, Node.js, a native browser ES module, a browser global without modules, or Deno. A separate `test` command runs browser tests, per the project's README.

## Worth knowing

Building needs a Rust toolchain. Publishing to npm needs npm installed and configured, and the prerequisites page says the project intends to remove the need for a Node runtime in that step.
