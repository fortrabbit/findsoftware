SeaweedFS is a distributed file system and object store written in Go. One `weed` binary serves an S3 object store, a POSIX file system and a lakehouse with S3 Tables, and the same process also runs the master, volume server, filer, WebDAV, the Iceberg REST catalog and the Admin UI. The [README](https://github.com/seaweedfs/seaweedfs) starts a one-node S3 endpoint with a single command, and it shows how to run the master, volume server, filer and S3 as separate services. The installation routes it lists are a release binary, an install script, a Docker image, Docker Compose, a Helm chart for Kubernetes and a build from source.

The filer keeps directory metadata in an external store such as MySQL, PostgreSQL, SQLite or MongoDB. The repository belongs to the seaweedfs organization on GitHub.

## Worth knowing

The open source code is licensed under Apache-2.0. Seaweed Data publishes SeaweedFS Enterprise Edition, which adds features such as data recovery, point-in-time recovery and customizable erasure coding, under a separate end user license agreement. The README compares the project with MinIO, which it describes as having ceased development.
