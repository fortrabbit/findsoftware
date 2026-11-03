VictoriaMetrics is a time series database and monitoring solution written in Go and released under the Apache License 2.0 for its community components. Applications and agents push metrics to it over the Prometheus remote write API, the InfluxDB line protocol, the OpenTelemetry HTTP API and other push protocols, and it answers queries through a Prometheus-compatible querying API. The docs name a single-node version and a cluster version. The quick start runs the single binary and shows it set up as a systemd service listening for HTTP. Installation can use Docker, Helm or the binary releases. The company VictoriaMetrics Inc. maintains the project.

## Worth knowing

An Enterprise edition sits beside the community code and is licensed separately: the docs allow evaluation with a trial license and production use under an enterprise contract. The vendor also runs a managed service, VictoriaMetrics Cloud.
