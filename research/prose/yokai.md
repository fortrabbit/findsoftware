Yokai is a Go framework for backend applications, split into modules that a project composes. The docs name Echo, gRPC-go, Viper, OpenTelemetry and Fx as the libraries the stack is built with, and its core module is fxcore. A project starts from an application template, fetched from GitHub or created with gonew. The HTTP server module can render HTML templates, and the database module drives SQLite, MySQL, PostgreSQL and SQL Server. The repository holds each module as a separate Go module with its own tags.

## Worth knowing

The README badge says Go 1.20 or later, but the core module's go.mod at the release tag states Go 1.26, and that line is the minimum a build needs.
