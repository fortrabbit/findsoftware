Unicorn is an HTTP server for Rack applications. It runs as a long-lived process that spawns worker processes and reaps and restarts any that die. Its README describes the design as built for Rack, Unix and ease of debugging.

## Worth knowing

The README says the server is built for fast clients on low-latency connections, and that slow clients have to be served through a reverse proxy that buffers the request and the response. It also strongly discourages the use of Unicorn in new deployments, citing the damage the project has done to the Ruby ecosystem.
