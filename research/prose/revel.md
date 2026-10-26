Revel is a full-stack web framework for Go. It provides declarative routing, controllers with data binding and validation, sessions and flash messages, Go templates, caching, background jobs and a testing framework. Request handling runs through composable middleware called filters, and reusable MVC components can be packaged as modules. The homepage also lists internationalization and hot code reload, which recompiles code and templates while the app runs.

The `revel` command-line tool creates an application with `revel new` and packages an app with a script that runs it. The server engine defaults to Go's own HTTP package, and a custom engine can be registered in its place.

## Worth knowing

Revel does not come with a database or ORM layer. Its database page leaves that choice to the developer and its examples use Go's `database/sql` package.

The deployment page says Revel does not manage connections or resources itself, so production deployments should put an HTTP proxy in front of it and run the app under a daemonizing tool such as systemd or Supervisor.
