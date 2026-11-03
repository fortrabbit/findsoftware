OpenFGA decides whether a user may act on an object. An application writes an authorization model in a modeling language, stores relationship tuples and asks the server for checks. The server runs an HTTP API and a gRPC API, and it keeps its data in PostgreSQL, MySQL or SQLite. The project publishes SDKs for several languages, so an application calls the server through a client library.

The project names itself an incubating project of the Cloud Native Computing Foundation, and its footer names The Linux Foundation.

## Worth knowing

The Playground, a web interface for trying out models, is meant for local development only.
