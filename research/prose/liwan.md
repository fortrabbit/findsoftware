Liwan is self-hosted web analytics that ships as a single binary or a Docker container. Its dashboard and database are built in, and the database is DuckDB, an embedded database, so no separate service is needed.

A site adds a small browser script with one line of HTML, or sends events from its own server. The project says either approach works with any framework or CMS. Teams control access to private projects, and sign-in can use Google Workspace, Microsoft Entra ID, or an OpenID Connect provider.

## Worth knowing

The service guide sets Liwan up to start when the server boots, so it runs as a long-lived process on a host the operator manages.
