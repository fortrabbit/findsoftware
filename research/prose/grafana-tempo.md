Grafana Tempo is a distributed tracing backend. It receives traces sent with Jaeger, Zipkin and OpenTelemetry, and it keeps them in object storage. The [setup guide](https://grafana.com/docs/tempo/latest/setup/) describes a monolithic and a microservices deployment mode. The project ships a pre-compiled binary, OS packages and a Docker image, with Helm and Tanka examples for Kubernetes.

## Worth knowing

The setup page says the microservices mode needs a Kafka-compatible system. The homepage calls object storage the only dependency.
