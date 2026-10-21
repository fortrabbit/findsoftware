Deepkit Framework is a TypeScript framework whose types stay available at runtime, so one type definition serves validation, serialization, database access, HTTP, RPC and dependency injection. The packages are modular: the README describes more than 40 independent packages, and one can use only what is needed. The framework package, `@deepkit/framework`, adds commands to an application, among them `server:start`, which starts the HTTP server. The [introduction](https://deepkit.io/en/documentation/introduction) gives an overview.

## Worth knowing

Runtime types need the Deepkit type compiler installed next to the type package, and `experimentalDecorators` is needed for certain functions in the framework. The deployment guide compiles the application to JavaScript and runs it with Node.
