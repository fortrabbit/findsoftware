Exceptionless collects errors, feature usage and log events from applications and shows them in a web dashboard. Applications send events through client libraries: the .NET client is installed from NuGet, and a JavaScript client is documented alongside it. The server can be run as a Docker image, from source, or on Kubernetes with Helm. The same code is offered as the hosted service at exceptionless.com.

The self-hosted server stores events in Elasticsearch and uses Redis, both set through connection strings. The Kubernetes configuration page names these settings as EX_ConnectionStrings values.

## Worth knowing

The Docker setup that keeps data between runs stores it in an embedded single-node Elasticsearch cluster without backups, and the docs recommend a separate Elasticsearch cluster for production. The hosted service has paid plans with premium features; the free plan is limited to one project and one user.
