GoFound is a full-text search engine written in Go. It runs as a standalone server that keeps its index and documents in leveldb files in a data directory, and an HTTP API handles indexing and queries. Its web admin interface is built with Vue, element-ui and Vite, as the [compile guide](https://github.com/sea-team/gofound/blob/main/docs/compile.md) describes.

The project offers a prebuilt binary, a build from source with the Go toolchain, and a Dockerfile in the repository. Once started, the server stays running and the API is called from the site or application that needs search, with the [example](https://github.com/sea-team/gofound/blob/main/docs/example.md) showing the start-up command.

## Worth knowing

The README, the documentation and the admin interface are written in Chinese. The project's own README compares it with Elasticsearch.
