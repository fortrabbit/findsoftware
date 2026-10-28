Quickwit is a search engine for logs and traces, written in Rust and built on the Tantivy search library. In cluster mode its index data sits on shared object storage such as Amazon S3 or MinIO, and a single node keeps index data in local files. The metastore that holds index metadata uses a PostgreSQL-compatible database.

Every node runs as an always-on server that serves the REST API and a search and admin UI. The project ships as one binary, with install routes for a Linux or macOS download, a Docker image and a Helm chart for Kubernetes. Linux is the only officially supported platform.

## Worth knowing

The project's homepage states that Quickwit is joining Datadog.
