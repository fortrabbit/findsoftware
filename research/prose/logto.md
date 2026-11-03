Logto is a self-hostable authentication and authorization server built on OIDC and OAuth 2.1, with an Admin Console on its own port. It runs as a long-lived Node.js service backed by PostgreSQL, and it can be installed with Docker, with npm init, or on Kubernetes. The vendor also runs Logto Cloud, a hosted version of the service, and the company behind both is Silverhand Inc.

## Worth knowing

The Docker Compose setup in the install guide is for local development, and the guide says not to use it in production. A self-hosted Pro license unlocks further features on a self-hosted instance, including managing Console members and their roles. Without a license, the open-source version allows up to three SAML applications.
