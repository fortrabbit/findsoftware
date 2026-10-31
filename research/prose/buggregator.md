Buggregator is a debugging server that receives events from application SDKs and shows them in one real-time web UI. The server is a single Go binary with an embedded SQLite database, and the Sentry SDK, Symfony VarDumper and Monolog send to it by a changed address rather than by code changes. The [documentation](https://docs.buggregator.dev) describes a binary download, a Docker image from the GitHub Container Registry and a Helm chart for Kubernetes as install routes.

## Worth knowing

The project's own site describes the server as made for development environments, and the SQLite database is in memory by default unless a file is configured. The 1.x branch is a separate PHP version, which the docs point to.
