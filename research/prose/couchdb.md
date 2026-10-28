Apache CouchDB is a database server that stores JSON documents and is reached over HTTP. It replicates data between servers and between clients. The project describes its replication protocol as the foundation for offline-first applications, and PouchDB, a separate project built for mobile devices and browsers, replicates with it. A single node is the usual starting point, and a cluster runs one logical database across several servers or VMs.

Installation options are Docker, Debian and RPM packages, a Windows installer, a Helm chart for Kubernetes and a source build. The installation guide asks the reader to start CouchDB at system boot through an init subsystem, so it runs as an always-on service. The web administration console, Fauxton, ships with the server.

The Apache Software Foundation maintains the project under the Apache License 2.0.

## Worth knowing

The configuration reference describes cookie, proxy and JWT authentication. The source build lists Erlang OTP, ICU, OpenSSL and Mozilla SpiderMonkey among its dependencies.
