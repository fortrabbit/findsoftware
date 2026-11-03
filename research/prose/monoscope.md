Monoscope is an observability platform for logs, traces and metrics, with an AI SRE agent that works from the same data. It stores the telemetry in S3-compatible buckets that the user owns. The server is a Haskell binary that reads a PostgreSQL connection string from its configuration. The project documents a Docker Compose stack and Kubernetes manifests, and applications send their telemetry to it over OpenTelemetry or to a logs endpoint.

## Worth knowing

A hosted cloud service is offered beside the self-hosted software.
