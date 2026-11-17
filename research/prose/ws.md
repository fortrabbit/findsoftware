ws is a WebSocket client and server library for Node.js. It implements the protocol on both sides and supports the permessage-deflate compression extension.

## Worth knowing

The README states that the module does not work in the browser. Browser code uses the native WebSocket object, and the README names isomorphic-ws, an npm wrapper, for code that has to run in both places. Compression is disabled by default on the server, and the README notes that it adds overhead.
