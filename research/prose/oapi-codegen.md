oapi-codegen is a command-line tool and library that converts OpenAPI 3.0 and 3.1 specifications into Go code. It generates server boilerplate for Go HTTP routers, API clients and model types, and its server output targets Chi, Echo, Echo v5, Fiber, Fiber v3, Gin, gorilla/mux, Iris and the standard net/http package.

The tool is installed with the Go toolchain, either as a binary or as a `go tool` dependency of the project that uses it. The source is in the oapi-codegen organization on GitHub, and the project has no website of its own beyond the repository.

## Worth knowing

The tool and the generated code have different Go requirements, and the generated code's minimum depends on the server target.
