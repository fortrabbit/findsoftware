Microbundle is a bundler for small JavaScript libraries, built on Rollup. It writes CommonJS, ES module and UMD bundles for the same source, using the output fields of the project's package.json.

The build can be run once with the microbundle command, or with a watch mode that rebuilds when source files change. Babel handles ESnext and async/await syntax, and Terser compresses the output. TypeScript sources are supported without configuration.
