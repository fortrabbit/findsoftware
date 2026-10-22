HyperExpress is a Node.js web server for HTTP and WebSocket endpoints, powered by uWebSockets.js. Its API is mostly compatible with Express, according to the [README](https://github.com/kartikk221/hyper-express/blob/master/README.md), so some middleware may not work out of the box. The server is started with listen on a port and host, as the [server reference](https://github.com/kartikk221/hyper-express/blob/master/docs/Server.md) describes.

## Worth knowing

The server listens on a port, so it needs a host that runs a Node.js process. The README says the native uWebSockets.js addon has prebuilt binaries for macOS, Windows and glibc-based Linux, and that Alpine Linux is not supported.
