Confetti is a web framework written in Go, with routing, middleware and validation. The [documentation](https://confetti-framework.github.io/docs/) builds an endpoint from a controller function and a route registered with `handler.New`, with middleware wrapping each request before it reaches the controller. Controllers return errors to a central error handler in `internal/pkg/handler`, which the documentation describes as the place where logging and error reporting are customized.

A project starts from the framework's GitHub template repository. The [installation guide](https://confetti-framework.github.io/docs/get-started/installation.html) runs the API server with `go run cmd/api/main.go api:serve`, and configuration is read from environment variables through typed helpers in the `config` package.

## Worth knowing

The framework runs as a process that listens for HTTP requests, so a site or API built on it needs a host that can run a Go program rather than a host that serves static files.

The project's documentation names no database; it says only that the configuration covers a database connection.
