Prefect is a Python framework for writing workflows as flows, which it runs on a schedule, on an external event or through its API. Projects install the Python package with pip or uv, as the [install guide](https://docs.prefect.io/v3/get-started/install) describes, and the Prefect server can also run from the official Docker image or from a Docker Compose setup.

The self-hosted server runs as its own process and serves a web UI. Its database is SQLite by default, and the [server guide](https://docs.prefect.io/v3/how-to-guides/self-hosted/server-cli) describes switching to PostgreSQL. A REST API on the server lets other programs create flow runs from a deployment.

## Worth knowing

The server is a long-running process, and the guide shows it started with several worker processes for concurrent requests. Prefect Cloud is the hosted service beside the open-source framework and server, and the docs describe features such as SSO, roles and webhooks only for Prefect Cloud.
