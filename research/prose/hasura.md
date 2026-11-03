Hasura GraphQL Engine is a server that puts a GraphQL API over existing databases and other data sources, as its [documentation](https://hasura.io/docs/2.0/index/) describes. Postgres stores the engine's metadata, and a web console ships with it. Permissions are defined per user-defined role, and single sign-on for the console is one of the Enterprise Edition settings.

The [Docker guide](https://hasura.io/docs/2.0/deployment/deployment-guides/docker/) starts the engine with a Postgres database beside it, and a Helm chart covers Kubernetes. Hasura Cloud is a managed service for Hasura instances, offered next to the self-installed engine.

## Worth knowing

The Docker image holds open-source and proprietary components, and the proprietary part, which carries the Enterprise Edition features, is enabled with a license provided by Hasura.
