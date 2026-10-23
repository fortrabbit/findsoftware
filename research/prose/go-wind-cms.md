GoWind Content Hub is a headless content platform written in Go and built on go-kratos. It runs as three services: an admin service that serves the REST API for the admin console, an app service that serves the REST API for public frontends, and a core service that holds the business logic and data layer and is reached over gRPC. Content is stored in PostgreSQL by default, with MySQL as the other supported database. The project includes multi-site and multi-tenant management, with role-based permissions and native i18n. Besides REST, a read-only GraphQL content API is documented.

Readers reach the content through separate frontends: Vue with Nuxt.js, React with Next.js, Taro for WeChat Mini Programs and H5, and Flutter for native apps. The backend uses Redis for caching and task queues, MinIO or local disk for files, and OpenSearch for search. The [installation guide](https://www.gowind.cloud/cms/installation.html) starts the infrastructure and the services with Docker Compose.

## Worth knowing

The installation guide lists PostgreSQL, Redis, MinIO, OpenSearch, etcd and Jaeger as infrastructure services, so a full deployment is several services rather than a single process.
