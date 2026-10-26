Cowboy is an HTTP server for Erlang/OTP that a project adds as a dependency, with routing, handlers, WebSocket, HTTP/2 and REST support. The Erlang.mk build system fetches it through a `DEPS = cowboy` line. The user guide builds the Erlang VM and the application into a release that is started and then serves requests, so a Cowboy application runs as a long-lived process.

## Worth knowing

The README says Cowboy uses Ranch to manage connections, so Ranch is part of the stack; the record does not name Ranch as a parent. The project publishes its versions as Git tags and Hex uploads, not as GitHub releases.
