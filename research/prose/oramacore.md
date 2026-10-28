OramaCore is a server, written in Rust, that combines a full-text search engine, a vector database and an LLM interface in one service. Its [README](https://github.com/oramasearch/oramacore/blob/develop/README.md) documents a Docker image and a compose file as the way to run it, and the [API notes](https://github.com/oramasearch/oramacore/blob/develop/docs/api.md) cover its supervision and configuration.

It runs as a long-running HTTP server, so the host has to keep it up. The JavaScript client that calls it is a separate package and does not contain the server. The company's cloud, Orama Cloud, is documented as a managed service.

## Worth knowing

The README recommends an NVIDIA GPU for running the application, and names one NVIDIA A100 as the minimum for production use. The README's documentation domain does not resolve, so the repository is the reference.
