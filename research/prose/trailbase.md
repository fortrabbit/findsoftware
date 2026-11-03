TrailBase is a backend-as-a-service shipped as one executable written in Rust. It serves REST and realtime APIs over SQLite, with experimental Postgres support, and includes sign-in through OAuth providers and a built-in admin dashboard. The project publishes a binary download, an install script and a Docker image, and the repository can also be built from source. Its own pages describe it as a Firebase alternative and compare it with PocketBase and Supabase.

## Worth knowing

The README gives the project an alpha status badge, and Postgres support is marked experimental. The server keeps running to answer requests, so it needs a host that runs processes and not only static files. Its repository is under the Open Software License 3.0, while the client libraries are published under Apache-2.0.
