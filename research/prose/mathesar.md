Mathesar is a web application that gives users a spreadsheet-like interface for viewing, editing and querying data in PostgreSQL databases. Its backend runs on Python. The Mathesar Foundation, a nonprofit, maintains it.

The docs describe three self-hosted routes: a single container for trying it out, a Docker Compose setup with separate reverse-proxy and database containers, and a direct install on Linux. It supports single sign-on through any identity provider that implements OpenID Connect.

## Worth knowing

The direct install sets Mathesar up as a systemd service that runs continuously, so a host for it needs a long-running process and cannot serve static files alone. The Foundation also runs a hosted version, [Mathesar Cloud](https://mathesar.cloud/).
