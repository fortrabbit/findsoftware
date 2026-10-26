ginrpc is a Go library that extends the Gin web framework with automatic parameter binding. Handlers take a Gin context and a request struct, and the library fills the struct from the request before the handler runs. Methods on an object can be registered as routes with annotation comments that set the path and HTTP methods, and the library can export Swagger and Markdown documentation from the same code. A project adds it with go get and registers its routes on a Gin router. The repository is published under the GitHub account xxjwxc.

## Worth knowing

The repository has no GitHub release and no tag. Its only published version is a Go module release from 2019, so the release dates on the record come from the Go module proxy.
