Self-Hosted Metrics is a telemetry server and two client SDKs, one for Go and one for Node.js, for developers who distribute self-hosted software. An application embeds the SDK; the SDK sends signed JSON snapshots of its counters to the server, which stores them in PostgreSQL and shows them on a dashboard. Each instance signs its requests with an Ed25519 key that it generates on first run. The server is a single Go binary with an embedded web interface, and the documented route is a Docker Compose file that runs it next to PostgreSQL.

## Worth knowing

The dashboard has no login by default, so the deployment guide says to put it behind an authenticating proxy before exposing it. The project's own website, named in its README, does not show the software when checked, so the record is kept as a stub until that is settled.
