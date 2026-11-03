Hatchet is an orchestration engine for background tasks, durable workflows and AI agents, as its [documentation](https://docs.hatchet.run/) describes. It supports applications written in Python, TypeScript, Go and Ruby, and the self-hosted control plane has an API server with REST endpoints, an engine with a gRPC API, a PostgreSQL database and a dashboard. RabbitMQ is an optional message queue for the same control plane. Workers connect to the control plane to execute tasks, and each tenant has user roles.

The [self-hosting guide](https://docs.hatchet.run/self-hosting) lists the routes: a single hatchet-lite image, Docker Compose for production, a Helm chart on Kubernetes, and the Hatchet CLI for a local instance, which wraps hatchet-lite.

## Worth knowing

Hatchet Cloud is the same platform run by the vendor. Single sign-on through SAML is listed on the Custom plan of the pricing page.
