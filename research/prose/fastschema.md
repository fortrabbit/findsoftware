FastSchema is a backend as a service written in Go. A project defines its data as schemas in the admin dashboard, and FastSchema creates the database tables and a set of REST endpoints for each schema, along with an OpenAPI description. It runs as a standalone binary or in a Docker container, and it can also be imported into a Go program as a web framework with resources, hooks and an ORM.

SQLite is the default database, and MySQL or PostgreSQL can be selected through the environment configuration. Uploaded files are stored on a local disk or in an S3-compatible store through rclone drivers. Access is controlled by roles and permissions, and a new install creates the admin, user and guest roles. Social sign-in providers are enabled in the configuration.

## Worth knowing

The project describes itself as beta. Its file storage supports the local filesystem and S3-compatible stores, and the docs say other storage systems are not yet supported.
