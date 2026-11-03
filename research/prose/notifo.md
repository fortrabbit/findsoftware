Notifo is a notification service that an application calls through its REST API to create events for users. It delivers notifications through several channels, among them email, SMS, mobile push, messaging apps, web push and an HTTP webhook. An embeddable JavaScript SDK adds a notification overlay to a web application. The project ships as a Docker image, and the [self-hosting guide](https://github.com/notifo-io/notifo/blob/main/docs/self-hosting.md) covers the setup.

## Worth knowing

The software needs one of four databases: MongoDB, PostgreSQL, MySQL or SQL Server. A domain with TLS is effectively required, because web push and the SDK need a secure context. A hosted version runs at app.notifo.io, which the self-hosting guide recommends trying first.
