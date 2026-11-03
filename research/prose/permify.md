Permify is an open-source authorization service that stores relationships and answers access checks over an API. It is written in Go, and its model is inspired by Google Zanzibar. Applications and services send their permission questions to the server, which exposes a REST API. The official install routes are a Docker image, a Homebrew formula and a Helm chart for Kubernetes, and the server keeps authorization data in memory unless it is configured with PostgreSQL, the only database engine the configuration page names.

FusionAuth acquired the project, and the acquisition announcement says the project stays open source.

## Worth knowing

Permify Cloud is the managed version of the same software. The README says the Community Edition does not include some premium features, such as observability dashboards and data synchronization.
