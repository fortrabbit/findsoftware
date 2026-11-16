undici is an HTTP/1.1 client written from scratch for Node.js, with its own request, stream, pipeline and connect methods and a fetch implementation. Node.js also ships a built-in fetch that the project says is powered by undici, and the project's own page compares the two.

## Worth knowing

The HTTP/1 parser needs WebAssembly. Where WebAssembly is unavailable, such as in a Node.js process started with `--jitless`, requests made through the module fail.
