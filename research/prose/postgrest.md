PostgREST is a standalone web server that serves a RESTful API directly from a PostgreSQL database, so the endpoints and their permissions follow the database schema and its roles. It is written in Haskell and ships as a compiled binary, as a Docker image and through several operating system package managers. A configuration file names the database connection, and the project's [systemd guide](https://docs.postgrest.org/en/stable/integrations/systemd.html) runs it as a daemon. Requests authenticate with JSON Web Tokens, and the anonymous, authenticator and user roles in the database decide what each request may do. The external-auth guide names Auth0 as a service that can issue those tokens.

## Worth knowing

The API takes its shape from the schema, so a change to a table, view or permission changes what clients can call. The install guide lists the PostgreSQL versions it supports.
