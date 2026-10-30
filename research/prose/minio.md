MinIO is an object storage server with an S3-compatible API, written in Go. The community source builds with the Go toolchain or from the Dockerfile in its repository, and the README starts the server with a command that takes an empty folder as its path. The server includes an embedded web browser for buckets and objects. The README also covers installing it on bare-metal hardware, and it names the community Helm chart and the MinIO Operator for Kubernetes.

## Worth knowing

The [repository](https://github.com/minio/minio) is archived, and its README says it is no longer maintained. The README names two editions of the company's AIStor product as alternatives. The community source is distributed without pre-compiled binaries, and the README says earlier binaries will not receive updates. The README says usage in an application stack requires validation against AGPLv3 obligations.
