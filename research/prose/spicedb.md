SpiceDB is an open-source database for application permissions, inspired by Google's Zanzibar design. Applications call it through its gRPC and HTTP/JSON APIs, and the [client libraries page](https://authzed.com/docs/spicedb/getting-started/client-libraries) describes a SpiceDB instance serving the HTTP server that clients reach.

Relationships are stored in the datastore chosen for the deployment: CockroachDB, Cloud Spanner, PostgreSQL or MySQL. Packages come from Docker images, apt, snap, Homebrew and a Kubernetes operator, which lives in its own repository.

## Worth knowing

A commercially licensed Enterprise build runs beside the Apache-2.0 server. The product page lists scoped API access, audit logging, rate limiting and embargoed security fixes as its additions. A hosted service, AuthZed Cloud, runs the software for customers who do not operate it themselves.
