Grafana Loki is a log aggregation system. It stores log lines in object storage and indexes only the labels of each log stream. Applications send logs to its HTTP push endpoint, or send OpenTelemetry logs over HTTP. The [install guide](https://grafana.com/docs/loki/latest/setup/install/) lists Helm, Tanka, Docker, Linux packages and a source build.

## Worth knowing

Loki has no authentication layer of its own. The install docs say an authenticating reverse proxy must sit in front of it.
