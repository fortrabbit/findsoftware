Wiki.js is a wiki with an admin area for all its settings, and its server runs as a long-lived Node.js process. Data goes into an SQL database: the homepage names PostgreSQL, MySQL, MariaDB, MS SQL Server and SQLite. The [installation guide](https://docs.js.wiki/setup/installation) recommends a Docker or Kubernetes container and also covers running a release on a host with Node.js.

## Worth knowing

The stable line and the beta line have separate documentation with different requirements. The beta requires PostgreSQL and a newer Node.js, while the stable requirements page calls PostgreSQL highly recommended. The installation guide linked above belongs to the beta line.
