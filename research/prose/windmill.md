Windmill is a platform for workflows, internal apps, AI agents and data pipelines, built around scripts: a function in one of its supported languages becomes an API endpoint and a form, and each script and flow gets webhook endpoints that other systems can call to start a run. The server is written in Rust. A self-hosted instance runs a server process that serves the web interface and the API, plus workers that pull jobs from a Postgres database, which holds the whole state of the instance, including the job queue.

The [self-hosting guide](https://www.windmill.dev/docs/advanced/self_host) describes two setups: a Docker Compose file for a single machine, which starts Postgres, the server, the workers and a Caddy reverse proxy, and a Helm chart for Kubernetes. The web IDE covers scripts, flows and apps, and access is granted per folder, group and user.

## Worth knowing

The source is split between AGPLv3 and Apache 2.0, but the Community Edition images and binaries also contain proprietary code that may be used freely but not resold, offered as a managed service or modified without an agreement; the enterprise features, including SAML and SCIM, need a commercial license. A hosted version runs at app.windmill.dev, so self-hosting is optional. Self-hosting keeps long-running server and worker processes alive, so the host has to run them continuously.
