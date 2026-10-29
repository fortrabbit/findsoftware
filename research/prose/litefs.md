LiteFS is a FUSE-based file system that replicates SQLite databases across a cluster of machines. It is installed by copying the litefs binary from the flyio/litefs Docker image into an application's container, by downloading a prebuilt binary from the GitHub releases, or by setting up a cluster on Fly.io. It can run on its own or act as a supervisor process for the application. Fly.io, Inc. maintains it and publishes the documentation.

## Worth knowing

The Fly.io docs say LiteFS is outside the company's scope of support and should be used with caution, and the README describes the project as actively maintained in a beta state. The FAQ gives write throughput of about 100 transactions per second, a limit of the FUSE interface. A cluster takes its lease from Consul or from a static setting. The FAQ also compares it with Litestream.
