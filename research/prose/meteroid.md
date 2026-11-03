Meteroid is a billing platform for subscriptions, usage-based pricing, invoices and quotes, with its backend written in Rust. The [README](https://github.com/meteroid-oss/meteroid/blob/main/README.md) names Docker Compose and a Helm chart as the self-hosting routes. The Compose file starts PostgreSQL, ClickHouse and a Kafka-compatible broker next to the API, a scheduler, a metering API and the web app. A hosted workspace on Meteroid Cloud is offered next to the open source code.

## Worth knowing

The README describes the project as experimental and gives the Compose setup as a minimal setup for testing and development. The [get-started guide](https://docs.meteroid.com/introduction/get-started-with-meteroid) names Stripe as the one payment provider it currently supports. Self-hosting support, single sign-on and role-based access sit on the Enterprise plan.
