OpenMeter records usage events that an application sends to it, aggregates them in real time, and turns them into customer usage data and invoices. Applications send CloudEvents-compatible events through the REST API or through the JavaScript, Python and Go SDKs, and the same API answers usage queries and delivers webhooks. The core runtime is an API server with worker processes that handle event sink, balances, billing and notifications, backed by Kafka, ClickHouse and PostgreSQL. A [Docker Compose quickstart](https://github.com/openmeterio/openmeter#quickstart) runs that stack for local evaluation, and the project documents a [Helm chart](https://openmeter.io/docs/open-source/kubernetes) for development deployments.

The project joined Kong Inc. in 2025, and the managed product is offered as Konnect Metering & Billing on the Kong Konnect platform.

## Worth knowing

The README describes releases as beta that can include breaking changes, and lists a bundled operator UI among the things OpenMeter is not. The Helm chart is documented for development deployments, not for production.
