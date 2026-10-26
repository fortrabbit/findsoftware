Kratos is a Go framework for building HTTP and gRPC microservices. The core module, github.com/go-kratos/kratos/v3, provides the application lifecycle, generated transports, middleware and configuration. Integrations that depend on outside systems, such as JWT, OpenTelemetry, Consul and Sentry, are separate Go modules that the application adds itself, and the command-line tool is versioned apart from the core.

A new service starts from the project template, kratos-layout, which the [quick start](https://go-kratos.dev/docs/getting-started/start/) clones and prepares with make init. The template uses MySQL and Ent, but the framework does not require either, so the choice of storage stays with the application.

A service started from the template listens on HTTP and gRPC ports and keeps running until it is stopped. There is no runtime plugin loader: extensions are Go modules compiled into the program.
