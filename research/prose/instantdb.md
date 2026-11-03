Instant is an open-source backend for web and mobile apps. Its client SDKs, installed from npm, read and write a relational data model through queries that update as the data changes, so other clients see a change in real time and an app keeps working offline. Auth, permissions, file storage, presence and streams are part of the same service.

The server is a sync server written in Clojure that runs on the JVM. It keeps user data as triples in one PostgreSQL database and watches the database's write-ahead log to decide which queries to refresh. The [self-hosting guide](https://www.instantdb.com/docs/self-hosting) describes a docker compose setup that runs Instant beside PostgreSQL, MinIO for files and Caddy as the reverse proxy, and it asks for an email provider so that login codes reach users.

## Worth knowing

Instant Cloud, the hosted service, no longer accepts new signups and is scheduled to shut down. The project states that all of Instant is open source and publishes a migration guide for moving a cloud app to a self-hosted instance. Until an email provider is configured, login codes are written to the backend logs.
