ZITADEL is an identity platform for authentication and authorization, written in Go. It implements OpenID Connect, OAuth 2.0 and SAML, offers role-based access control and includes a management console. Its APIs are described as gRPC and REST. The [architecture page](https://zitadel.com/docs/concepts/architecture/software) says each binary contains all the components needed to serve traffic, and the [self-hosting overview](https://zitadel.com/docs/self-hosting/deploy/overview) names the container images and an official Helm chart as the ways to deploy it. The architecture page lists PostgreSQL as the supported database.

The project is maintained by Zitadel, Inc. and is also offered as ZITADEL Cloud, a managed SaaS, which the [cloud page](https://zitadel.com/zitadel-cloud) describes.

## Worth knowing

The community edition is licensed under the AGPLv3. A commercial enterprise license replaces that license and comes with a paid enterprise edition, as the [self-hosted page](https://zitadel.com/self-hosted) explains. The login UI and the client packages are under the MIT license, and the API definitions under Apache 2.0. The Linux install guide says it does not work for ZITADEL 4 and points to the Docker version.
