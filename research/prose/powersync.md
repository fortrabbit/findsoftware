PowerSync is a sync engine that keeps a client-side SQLite database in step with a backend database. The service sits between the two: it replicates changes from the source database, stores the data it prepares for each client in a bucket storage database, and streams that data to the clients. It started as a component of JourneyApps' app platform and became a standalone product in 2022. The [self-hosting guide](https://docs.powersync.com/intro/self-hosting) describes running the service as a Docker image, with a Docker Compose stack for local development.

A self-hosted instance is a running deployment of the service. The [instance configuration page](https://docs.powersync.com/configuration/powersync-service/self-hosted-instances) lists a source database connection, a bucket storage database, client authentication and a sync configuration, all set in a config file.

## Worth knowing

The latest release is under the Functional Source License with an Apache 2.0 future license, so it is source-available. An Enterprise Self-Hosted Edition with dedicated support and custom pricing is a separate paid option. The PowerSync Dashboard is not available when self-hosting.
