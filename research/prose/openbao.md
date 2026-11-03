OpenBao stores, encrypts and distributes secrets, certificates and keys. Clients reach it through an HTTP API, and the server command starts a process that answers those requests. It can write data to disk or to PostgreSQL. The project's homepage describes it as a fork of Vault that the Linux Foundation's OpenSSF manages.

Packages exist for several Linux distributions, Homebrew and FreeBSD. The install guide also covers container images, precompiled binaries and a source build, and the project publishes a Helm chart for running the server on Kubernetes.

## Worth knowing

The server starts sealed. An operator has to initialize it and unseal it before it responds to any request, which the server command page describes as the normal start-up.
