GrowthBook is a platform for feature flags, experiments and product analytics. Applications connect to it through SDKs, and the same code runs as a self-hosted server and as the GrowthBook Cloud service.

The self-hosted server combines a Next.js front-end, an Express API and a Python stats engine, and it keeps its data in MongoDB or a compatible database. The [self-hosting guide](https://docs.growthbook.io/self-host) starts it with Docker Compose, and the project also publishes a Helm chart for Kubernetes.

## Worth knowing

The repository is open core. Most of it is MIT licensed, and the directories named in its LICENSE file fall under a separate commercial enterprise license. The docs describe single sign-on through OpenID Connect, and the pricing page lists SAML single sign-on and SCIM provisioning under its Enterprise plans.
