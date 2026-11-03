The OpenTelemetry Collector is a vendor-neutral server written in Go. It receives telemetry data, processes it and exports it to one or more backends. Applications instrumented with OpenTelemetry SDKs send it OTLP. The [agent deployment page](https://opentelemetry.io/docs/collector/deployment/agent/) places the Collector beside the application, on the same host, as a sidecar or DaemonSet, and the [gateway page](https://opentelemetry.io/docs/collector/deployment/gateway/) describes Collector instances running as a standalone service. The install docs give a prebuilt binary, a Docker image, a Kubernetes install and a build from source. The core Docker image is otel/opentelemetry-collector. The project describes itself as a Cloud Native Computing Foundation project.

## Worth knowing

The repository holds the core library and a build target for the core distribution. The release images on ghcr.io come from a separate releases repository.
