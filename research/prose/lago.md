Lago is a billing server for usage-based and subscription pricing. It meters usage events and produces subscriptions and invoices, and applications call its REST API to do that, directly or through one of the client libraries. The back end is a Rails API with a web interface in front of it. The [self-hosting overview](https://getlago.com/docs/guide/lago-self-hosted/overview) describes two install routes, Docker Compose and the official Helm charts for Kubernetes.

The Docker stack runs a front application, the API, its workers, a clock worker, Postgres, Redis and a PDF service. Postgres stores the application data, Redis serves as the queue for asynchronous tasks, and ClickHouse can be enabled as the event store for new organizations.

## Worth knowing

The open source edition is licensed under AGPL-3.0. A premium edition with features and support that differ from the open source edition is offered under a commercial license, and custom roles are a premium add-on. Lago Cloud is the hosted option for teams that do not want to operate the stack.
