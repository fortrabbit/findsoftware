SWC is a Rust-based platform that compiles JavaScript and TypeScript and bundles them. It is used from JavaScript through two npm packages: the command-line package @swc/cli and the core package @swc/core, which the install guide adds as development dependencies. The documentation presents the command-line tool as a drop-in replacement for Babel's, and it has a migration guide from the TypeScript compiler.

## Worth knowing

The bundling configuration page states that the bundling feature will be dropped in a later major version, in favor of other bundlers, so a project that depends on SWC's bundling should check that page first.
