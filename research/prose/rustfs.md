RustFS is an S3-compatible distributed object storage server written in Rust. On Linux the installer script registers a systemd service and starts it, so the server runs as a long-lived process. A container image is also published, and the project publishes a Helm chart and a Kubernetes operator for cluster deployments. A web console is built in, and the server supports OIDC sign-in.

The project documents a migration path from MinIO. The project's own pages state that RustFS is not affiliated with, endorsed by, or sponsored by MinIO, Inc.

## Worth knowing

The about page says RustFS is not identical to every AWS S3 or MinIO API, and it advises configuring the endpoint and checking each operation an application depends on. The software is free to self-host under the Apache 2.0 license, and optional paid support is offered.
