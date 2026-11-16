sqlc is a command-line tool that turns SQL queries into type-safe code. You write queries in SQL, run sqlc to generate code with typed interfaces to them, and call that generated code from your application.

The tool ships as a single binary. The docs suggest running it as part of a CI/CD pipeline, so it stays on the developer side and never runs on the live site.

## Worth knowing

The go install route needs a recent Go toolchain, which the install page states.
