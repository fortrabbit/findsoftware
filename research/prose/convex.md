Convex is a backend for web apps that combines a database with server functions and client libraries. The open-source backend is written in Rust and runs all database and compute functions. Self-hosting uses a Docker image or a prebuilt binary, and the self-hosted build includes the dashboard and the CLI.

By default the backend keeps all state in a local SQLite database. The self-hosting guide also covers running the database on Postgres or MySQL.

## Worth knowing

The license is the Functional Source License. It permits any purpose other than a Competing Use, which means offering the software in a commercial product or service that substitutes for Convex or offers substantially similar functionality. The license converts to Apache 2.0 after the FSL period.

Self-hosted builds include an anonymous beacon, which can be turned off with a flag on the backend binary.

The vendor also runs a cloud platform, the Convex cloud platform.
