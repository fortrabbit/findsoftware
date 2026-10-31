Cadence runs long-running business logic as workflows written in Go or Java, with Python and Ruby SDKs that the community maintains. The workflow code runs in worker services that the application deploys, and the Cadence server keeps the workflow history and the task queues. The server is stateless and stores its history in an external database, Cassandra, MySQL or PostgreSQL.

The server is a Go program that the [get-started guide](https://cadenceworkflow.io/docs/get-started/) builds from the repository with `make bins`, and the [server installation guide](https://cadenceworkflow.io/docs/get-started/server-installation/) starts with Docker Compose. The [overview](https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/) also describes a Kubernetes deployment with a Helm chart. The project is run by a Series of LF Projects, LLC, and its site describes it as a Cloud Native Computing Foundation project.

## Worth knowing

The quickstart runs the server on an embedded SQLite backend. The [open-source overview](https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/) deployment table pairs SQLite with local development, demos and CI, and pairs Cassandra, MySQL or PostgreSQL with staging and production. The installation guide asks the operator to keep the server process running in the background.
