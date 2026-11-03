SuperTokens Core is an open source user authentication server written in Java. It runs as a service that an app's backend SDK connects to. The Docker image and the downloaded archive both ship with the JDK, so no separate Java install is needed, and the supertokens start command starts the service on top of PostgreSQL.

The project's README describes it as an open-core alternative to proprietary login providers such as Auth0 and AWS Cognito. The [self-hosting guide](https://supertokens.com/docs/deployment/self-host-supertokens) describes the Docker and archive routes. A managed cloud service billed per monthly active user runs next to the self-hosted core.

## Worth knowing

The code in the ee/ directory is under the SuperTokens Enterprise license, which allows production use only with a valid license. The rest of the code is Apache 2.0. Multi-factor authentication, account linking and multi-tenancy are paid features on the pricing page for self-hosted use. The core no longer supports MySQL or MongoDB.
