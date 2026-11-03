Hexclave is a platform for the parts of a product that revolve around users: authentication, teams, payments, email and analytics. It was called Stack Auth until the project renamed itself. Apps connect through SDKs for Next.js, React, TanStack Start and plain JavaScript and TypeScript, or through a [REST API](https://docs.hexclave.com/api/overview) from any language. A managed cloud runs it for customers, and the same code runs self-hosted as a Docker image that serves the API and the dashboard, backed by PostgreSQL and ClickHouse.

## Worth knowing

Self-hosting also needs a cron scheduler that calls the server's internal endpoints, email and S3-compatible storage, and Freestyle for custom email sending. The server code is licensed under AGPLv3 and the client packages under MIT, and the project offers commercial licenses for the server when AGPL does not fit. The docs state that Custom OIDC providers require a Team plan or above.
