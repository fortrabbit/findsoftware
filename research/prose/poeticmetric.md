PoeticMetric is a web analytics tool that does not use cookies. It is offered as a managed service on poeticmetric.com and can be self-hosted with Docker Compose. The backend is a Go application with a REST API, a worker and a scheduler, and the frontend is a Next.js application served by NGINX in the official Docker image. PostgreSQL holds accounts and site data, ClickHouse holds the analytics data and Redis holds transient data. The project names a Forgejo instance as its original repository, and a GitHub repository mirrors it.

## Worth knowing

The self-hosted services keep running under Docker Compose, so the host has to stay on. The managed service is contracted with WebGazer, Inc. under its terms of service.
