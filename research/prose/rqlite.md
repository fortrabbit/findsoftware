rqlite is a distributed relational database built on SQLite. The server joins a cluster with other nodes, and replication uses the Raft consensus algorithm. Applications query it over plain HTTP and JSON, and the node serves a built-in console app.

## Worth knowing

The FAQ says rqlite is not a drop-in replacement for SQLite, because writes must go through the HTTP API. The project is built for availability and fault tolerance rather than write throughput. The support page says the project has been maintained by the same developer since 2014, and it offers contracts, reviews and training as paid services.
