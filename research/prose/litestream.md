Litestream is a replication tool for SQLite, written in Go and distributed as a compiled binary. It continuously streams SQLite changes to cloud storage or to local files, so a database on one server can have a replica somewhere else.

It runs as a separate background process next to the application that owns the database, so the application needs no code changes. The install docs describe prebuilt binaries, Debian and RPM packages, a Homebrew tap, a Docker image and a build from source with the Go toolchain.

## Worth knowing

Litestream only works with SQLite's write-ahead log (WAL) journal mode. The [tips page](https://litestream.io/tips/) also asks the application to set a busy timeout, because Litestream takes short write locks while it checkpoints.
