FeatBit is an open-source feature flag platform that can be self-hosted or used as FeatBit Cloud, a hosted service at app.featbit.co. Applications connect to it with an official SDK. Self-hosting is documented with Docker Compose, Helm charts, Terraform for AWS, and Microsoft Aspire for Azure Container Apps.

The smallest self-hosted option uses Postgres for the database and the message queue. The larger options add Redis for caching and messaging, Kafka for messaging, and ClickHouse for analytics, and the database can be Postgres or MongoDB.

## Worth knowing

The code is MIT-licensed under an open-core model. Several features need a valid license key, among them scheduled flag changes, SSO and multi-organizations, and the Enterprise plan is a paid self-hosted tier under commercial order terms. The Cloud terms do not cover community or customer-managed self-hosted installs.
