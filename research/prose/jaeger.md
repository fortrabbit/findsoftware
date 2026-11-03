Jaeger is an open-source platform for distributed tracing. Applications send trace data to it over the OpenTelemetry Protocol (OTLP), it stores the traces in a storage backend, and its UI shows how a request moved through the services it crossed. The current major line is built on the OpenTelemetry Collector framework, and the same binary can run in several roles.

Jaeger is written in Go and ships as a binary, a container image, a Helm chart and an OpenTelemetry Operator setup for Kubernetes. The [deployment guide](https://www.jaegertracing.io/docs/latest/deployment/) describes the backend as a single binary or container image. The Cassandra, Elasticsearch and OpenSearch backends are the primary supported storage options, and the [storage guide](https://www.jaegertracing.io/docs/latest/storage/) describes them.

## Worth knowing

The Windows guide describes hosting Jaeger processes as Windows services. The previous major line has reached end of life.
