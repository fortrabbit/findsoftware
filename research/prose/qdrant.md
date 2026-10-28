Qdrant is a vector search engine and vector database written in Rust. It runs as a server with a REST API and a gRPC interface, and it includes a web UI for interacting with the data. Docker, Docker Compose, a Helm chart for Kubernetes and a build from source with Cargo are the documented ways to install it. Qdrant Solutions GmbH in Berlin maintains it.

Qdrant Cloud is offered as a fully managed service beside the open-source server, with a free tier and a Premium tier that lists SSO. A paid Enterprise Operator for Kubernetes is offered for installations in the customer's own infrastructure.

## Worth knowing

The server needs POSIX block-level storage for its data. The installation page states that NFS and object storage are not supported, and that Docker on Windows with mounted volumes is known to cause data loss.
