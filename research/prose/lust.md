lust is an image server. It re-encodes uploaded images into png, jpeg, webp or gif, creates the sizes (presets) set in a configuration file, and serves the variants over HTTP. A request picks a variant with a size query parameter. The storage backend is a file system, ScyllaDB or an S3-compatible blob store.

It is installed from a Docker image, through cargo install from the repository, or built from source with cargo. The server also serves its OpenAPI documentation at a UI endpoint.

## Worth knowing

The README says the file system backend is designed for testing and points to ScyllaDB or a blob store for full-scale deployment. The in-memory cache holds more images as its size setting grows, and the README warns that bigger images can raise RAM use.
