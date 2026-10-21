Encore is a backend framework with SDKs for TypeScript and Go. Application code declares the infrastructure it uses, such as a SQL database, and the Encore CLI provisions it for local development: a declared database runs as PostgreSQL in Docker. The backend framework, parser and compiler are open source.

To run an application outside Encore's platform, `encore build docker` compiles it into a Docker image that starts all services and listens on a port. The [self-hosting guide](https://encore.dev/docs/ts/self-host/build) notes that the image does not apply database migrations or trigger cron jobs, so both need a separate step or scheduler.

## Worth knowing

Provisioning infrastructure in the user's own AWS or GCP account is part of Encore Cloud, a hosted platform run by the same company, and the [pricing page](https://encore.dev/pricing) lists it under a paid plan. A self-hosted application gets its infrastructure from a configuration file supplied at build time.
