rk-boot is a Go library that starts a microservice's backend components from a YAML file. The YAML names each component, such as a web framework entry with its port, and the application registers its own handlers on the entries it defines. The README's example starts a gin server this way and then waits for a shutdown signal.

The docs describe plugins for the web frameworks gin, gRPC, echo, gf, fiber, gorilla/mux and go-zero, and for database clients for MySQL, PostgreSQL, SQLite, SQL Server, MongoDB, ClickHouse and Redis.

## Worth knowing

The official website address in the README does not resolve, so the project's landing page and the rk-docs documentation site are the pages that remain.
