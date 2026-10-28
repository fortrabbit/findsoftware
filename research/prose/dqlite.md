dqlite is an embeddable SQL database library written in C. The [docs](https://dqlite.io/docs/) describe it as an extension of SQLite across a cluster of machines, with failover between them, and the [repository](https://github.com/canonical/dqlite) describes a C library that implements an embeddable and replicated SQL database engine. An application links the library, and the cluster replicates the data with the Raft algorithm. The site names a development archive for Ubuntu as an install route, and the README builds the library from source with autotools.

## Worth knowing

The library is licensed under LGPL-3.0 with an exception that allows static linking, so a binary built with it can be released under other terms. The README states that dqlite runs on Linux and needs a kernel with native asynchronous I/O support.
