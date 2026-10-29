libSQL is an open source fork of SQLite, maintained by Turso. It is a library that runs inside the program that uses it, and its server mode, sqld, is a SQL daemon that serves the database to other clients. sqld installs from a prebuilt binary, with Homebrew, from a Docker image on ghcr.io, or by building from source with a Rust toolchain. The Rust crate published on crates.io under the name libsql comes from the same repository.

## Worth knowing

The README says libSQL is actively maintained while new features are being developed in Turso, a separate database it describes as not a fork of SQLite, and it advises new projects to look at Turso first.
