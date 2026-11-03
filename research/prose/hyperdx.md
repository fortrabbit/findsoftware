HyperDX is an observability platform that searches and charts logs, traces, metrics, errors and session replays. It stores its telemetry in ClickHouse and receives OpenTelemetry data from applications through an OpenTelemetry collector. The all-in-one Docker image publishes the UI on port 8080 and the OpenTelemetry ports 4317 and 4318, and a production deployment also keeps users, dashboards and saved searches in MongoDB. DeploySentinel, Inc. holds the copyright in the repository, and ClickHouse acquired the project, as the homepage states. ClickHouse Cloud can host a HyperDX deployment as well, and DeploySentinel offers an account-based HyperDX service under its terms.

## Worth knowing

The software sends anonymized usage data from open source deployments unless the USAGE_STATS_ENABLED variable is set to false. The deployment guide's production example names a beta image tag, while the README names the all-in-one image.
