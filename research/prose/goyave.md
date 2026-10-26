Goyave is a Go framework for REST APIs, described on its homepage as an opinionated all-in-one Golang web framework focused on REST APIs. A project starts from the Goyave template project or is set up by hand with `go get` on the `goyave.dev/goyave/v5` module. Database access goes through the drivers the database page lists: MySQL, PostgreSQL, SQLite, MSSQL, ClickHouse and BigQuery, each configured with its own connection options.

The application runs as a server process. The deployment guide has the team build it with `go build` and deploy the executable. The framework is MIT licensed and is maintained by Jérémy LAMBERT.

## Worth knowing

Because the application is a server process, the host has to run the executable and keep it up; serving static files is not enough.
