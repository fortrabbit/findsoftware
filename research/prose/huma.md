Huma is a Go micro framework for HTTP REST and RPC APIs, backed by OpenAPI 3 and JSON Schema. It is added to a Go module with `go get`.

## Worth knowing

The README states that Go 1.26 or newer is required. Huma serves HTTP, and its graceful shutdown guide describes stopping a server that accepts requests, so the API needs a host that keeps a process running.
