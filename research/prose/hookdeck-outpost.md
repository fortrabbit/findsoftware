Outpost is a Go service that an application runs to send outbound webhooks and other event destinations to its customers. The application publishes events through Outpost's REST API or a queue, and Outpost delivers them with retries and a tenant portal. The service needs Redis and a PostgreSQL or ClickHouse database, plus a message queue for the queue-based destinations. It ships as a binary and a Docker image, with an example Helm chart for Kubernetes, and its three services (delivery, api and log) are entry points of one executable. Hookdeck Technologies Inc., a company in Montreal, Canada, builds and maintains it.

## Worth knowing

A managed Outpost, which runs the same codebase, is offered by the same company as a hosted service.
