tusd is the reference server for tus, an open protocol for resumable file uploads over HTTP. It is written in Go and ships as a single binary, which the [installation guide](https://tus.github.io/tusd/getting-started/installation/) offers as a download, as a Docker image, as a build from a git clone, or as a Helm chart on Kubernetes. Uploaded files go to local disk or to Amazon S3, Azure Blob Storage or Google Cloud Storage, and tus-compatible clients send their uploads to it.

## Worth knowing

tusd runs as a long-lived server process, so a site that uses it needs a host that keeps that process running. Its hooks can call a script, an HTTP endpoint or a gRPC service. The client libraries that connect to tusd are separate projects.
