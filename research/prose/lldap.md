LLDAP is a lightweight authentication server with a simplified LDAP interface, kept deliberately smaller than a full LDAP server. Per its README it connects to other components such as Keycloak, Authelia and Nextcloud that use it as the source of users and groups. Administrators manage those users and groups in a web front end, and scripts can do the same through the GraphQL API. Data is kept in SQLite by default, and the database can be switched to MySQL/MariaDB or PostgreSQL. It runs as a long-lived service that listens on one port for LDAP and another for the web interface, and the [install guide](https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md) covers a container image, Podman, the TrueNAS SCALE app catalog, distribution packages and a build from source with Cargo.

The FAQ names Kanidm as the project to look at when modern identity protocols are needed.

## Worth knowing

The README states that the goal is not to provide a full LDAP server. The FAQ states that LLDAP is developed by volunteers, that it offers no commercial support contracts, and that one maintainer knows the whole codebase.
