OpenPanel is web, product and AI analytics software. Its maintainer, OpenPanel AB in Stockholm, runs it as a cloud service and publishes the same code for self-hosting. The public self-hosting release is installed from a git clone and a setup script, and the services run under Docker Compose. Events are stored in ClickHouse, basic records in Postgres, and Redis serves as cache, pub/sub and queue.

## Worth knowing

The project's own pages describe two release lines: the [self-hosting guide](https://openpanel.dev/docs/self-hosting/v2/deploy-docker-compose) for the public release, and a newer line that supporters receive first. The self-hosting guide for the public release and the guides for the newer supporter line give different install steps.
