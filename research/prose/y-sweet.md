Y-Sweet is an open-source document store and realtime sync backend for Yjs documents, written in Rust. Document data is persisted to S3-compatible object storage. Clients sync through a server that the [README](https://github.com/jamsocket/y-sweet) says deploys as a native Linux process, and the server can be started with npx or from a Docker image. An application's own backend issues a client token for each document, which is how access to a document is controlled.

## Worth knowing

The company behind it, Jamsocket, is being acquired by Modal. The project's homepage now redirects to Modal's announcement, which says the core functionality is being migrated to Modal. The repository remains public.
