SigNoz is an observability platform built on OpenTelemetry that brings logs, metrics, traces, alerts and dashboards into one place. Applications send their telemetry to it over OpenTelemetry Protocol (OTLP) on ports 4317 and 4318. The self-hosted stack runs ClickHouse and PostgreSQL as components. It can be installed with Docker through Foundry, on a Linux host through systemd, or on Kubernetes through Helm. SigNoz Inc. maintains it and also runs SigNoz Cloud, a hosted service.

## Worth knowing

Code under the ee/ directory is covered by a separate enterprise license that permits production use only under a subscription. SAML and OIDC single sign-on are listed for SigNoz Cloud and Enterprise Self-Hosted, not for the community edition. The legacy install script and the bundled Compose files are deprecated, and Foundry is the supported installer.
