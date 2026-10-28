CockroachDB is a distributed SQL database. The server is a Go program shipped as a binary, and the [installation guide](https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux) covers the binary, a Docker image, Kubernetes and a build from source. A web interface, the DB Console, shows details about the cluster and its database configuration.

A node is started with `cockroach start`, which the start command's reference describes as a long-running server. The vendor also runs the database as CockroachDB Cloud.

## Worth knowing

Releases from 24.3.0 on are under the CockroachDB Software License. Earlier binaries were under the Business Source License, according to the releases page. Some self-hosted deployments need a paid Enterprise license to use all features.
