ParadeDB is a distribution of the pg_search extension for PostgreSQL. The extension adds a custom index for full-text and vector search to a Postgres database, and it is written in Rust. The [introduction](https://www.paradedb.com/docs/start/introduction) says ParadeDB accelerates these queries with a custom index, delivered through the pg_search Postgres extension.

ParadeDB can be started locally with a curl install script, Docker, or Postgres.app on macOS. The [deployment overview](https://www.paradedb.com/docs/operate/deploy/overview) also lists Kubernetes with CloudNativePG and installing the extension into a Postgres cluster the operator already controls.

The Community edition is open source. ParadeDB Enterprise adds commercial licensing, support and physical replication, and ParadeDB Cloud is the managed platform for it, currently in private preview.

## Worth knowing

The Community edition supports single-node deployments. High availability and read replicas are Enterprise features.
