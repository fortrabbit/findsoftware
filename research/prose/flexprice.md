Flexprice is a usage-based billing platform with metering, credits, pricing plans and invoicing. An application connects to it through its API and SDKs, and the API serves more than 200 REST endpoints. The project publishes SDKs for Go, Python and TypeScript.

The server is written in Go and runs as three services built from one codebase: the API, a Consumer and a Background Worker. The [self-hosting guide](https://docs.flexprice.io/docs/getting-started/self-hosting-guide.md) starts the services with Docker Compose beside PostgreSQL and ClickHouse, with Kafka and Temporal in the same stack, and it builds a dashboard that is served against the API. The guide also covers a production layout on AWS.

## Worth knowing

The open-source edition is licensed under the AGPL, and the project describes an open-core model in which some parts sit under a commercial license. Flexprice Cloud is the hosted product. The self-hosting page lists the differences developers meet when they build against a self-hosted instance, including how webhooks are delivered.
