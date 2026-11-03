Socket.IO is a library for low-latency, bidirectional and event-based communication between a client and a server. The server is installed from the socket.io npm package with npm, Yarn, pnpm or Bun, and the browser client is a separate package. The client can also be loaded from a CDN. The connection uses WebSocket for transport when possible and falls back to HTTP long-polling when the WebSocket connection cannot be established.

## Worth knowing

Socket.IO is not a WebSocket implementation. It adds its own metadata to each packet on top of the transport, so a plain WebSocket client does not speak it. The docs advise against using it in a background service for mobile applications, because the library keeps an open TCP connection to the server.
