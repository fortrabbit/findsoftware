ScyllaDB is a database written in C++ that is API-compatible with Apache Cassandra and Amazon DynamoDB. The [repository](https://github.com/scylladb/scylladb) README starts the server with a single command, and the DynamoDB-compatible API, called Alternator, must be enabled before it is served.

Installation offers a curl-based web installer, Linux packages, an installer that runs without root privileges, and a Docker image; the [Linux install guide](https://docs.scylladb.com/manual/stable/getting-started/install-scylla/install-on-linux.html) describes each route. ScyllaDB Ltd. maintains the project. Alongside the server code, the company offers an Enterprise edition with premium features and dedicated support, and ScyllaDB X Cloud, a managed service on AWS and GCP. The docs include a migration procedure for moving from Apache Cassandra.

## Worth knowing

The source is published under the ScyllaDB Software License Agreement, which grants its license only to Never Customers: organizations with no paid commercial relationship with ScyllaDB in the previous twelve months. Releases before that agreement carried the AGPL-3.0 license.
