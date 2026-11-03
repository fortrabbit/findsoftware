Coroot is an observability tool that collects metrics, logs, traces and profiles from the containers on each node. The node agent uses eBPF, and the project documents no code change in the applications for that. The data is shown in a web UI with root cause analysis. Logs, traces and profiles are stored in ClickHouse.

It installs with Docker Compose, which starts the Coroot server, a node agent, a cluster agent, ClickHouse and Prometheus, or with a Kubernetes operator installed from a Helm chart.

## Worth knowing

The Enterprise Edition uses the same Docker Compose file with a license key. It is a paid subscription that adds granular RBAC and SSO.

The vendor also runs a cloud-hosted version of the monitoring service, under its terms of service.
