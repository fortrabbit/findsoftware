Apito is an open-source backend platform from Apito LLC for designing, reviewing, versioning and shipping application backends. Its Engine, written in Go, serves GraphQL and REST APIs. The Console is the web application for reviewing schema drafts and publishing them, and the schema is synced with the Apito CLI, which stages a draft for the Console to publish.

The [self-hosting guide](https://apito.io/docs/self-hosting-guide/) runs the Engine and Console locally through the CLI, or in production through a Docker Compose file. The reference Compose file pairs the Engine with ArangoDB and Redis, and the README lists further databases the Engine can use.

## Worth knowing

Apito also runs a managed Cloud with Free, Pro and Dedicated hosting plans, which stay on Apito-managed hosts. The self-hosting guide says some Pro Console features may require a Pro-capable build, and the licensing notes say paid Cloud features stay in private repositories. The Engine's current releases are AGPL-3.0, and a commercial license is available from Apito LLC.
