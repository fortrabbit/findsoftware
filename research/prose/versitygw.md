The Versity S3 Gateway is an open source Go server that accepts S3 API requests and translates each one into operations on a backend. The backends it names are a POSIX file system, Versity's ScoutFS, Azure Blob Storage and other S3 servers. Applications that use the S3 API can read and write through it. The gateway is stateless. The project ships release binaries, RPM and Debian packages with systemd service files, a Docker image and a Helm chart for Kubernetes, and it can be built from source with Go. Versity Software, Inc. maintains it, and its address on the privacy policy is in San Jose, California.

## Worth knowing

The optional WebGUI is a management and explorer interface, and the standalone IAM service, started with the iam subcommand, adds IAM users and roles with identity policies and OIDC federation. Paid support is sold through sales and is not an edition of the software.
