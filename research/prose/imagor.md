imagor is an image processing server and Go library that uses libvips. The [docs](https://docs.imagor.net) describe it as an HTTP server with Docker support, and the quick start runs the published Docker image. Images are requested by URL. imagor adopts the URL syntax of thumbor, and the README presents it as a drop-in replacement for thumbor. Sources can be local files, object storage such as AWS S3 or Google Cloud Storage, or an HTTP origin. The [security page](https://docs.imagor.net/security/) explains URL signing: with a secret set, every request URL must carry a valid HMAC signature, and an expiry filter can give a signed URL a hard end time. Adrian C. Shum maintains the project.

## Worth knowing

The docs present commercial support and consulting as optional, and state that imagor itself remains open source. Imagor Studio appears in the same ecosystem as a separate self-hosted product, and the project's pages do not describe it as an edition of imagor.
