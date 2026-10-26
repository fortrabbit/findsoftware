vibe.d is a web framework for D, with an asynchronous I/O library underneath it. It provides an HTTP and HTTPS stack with client, server and proxy implementations and an interface generator for JSON and REST. Web pages can be written as Diet templates, and localization uses gettext-compatible translation files. Projects are created, built and run with DUB, and running one starts an HTTP server on a port. A native MongoDB driver and a Redis client ship with it.

## Worth knowing

Authentication covers HTTP Basic and HTTP Digest; higher-level schemes such as OAuth are left to extension libraries. The README states its compiler support as a rolling window of recent DMD releases and the LDC releases that implement the same frontend, so a fixed minimum compiler version is not given.
