Pocket ID is an OpenID Connect and OAuth 2.0 provider that lets users sign in to the applications they run with passkeys. It runs as a single program with a built-in SQLite database and can use PostgreSQL instead. The [installation guide](https://pocket-id.org/docs/setup/installation) covers Docker Compose and a single binary, and the binary is meant to run under systemd or the platform's equivalent. An admin UI handles user management, and an admin can issue a login code so a user can add a first passkey or recover access. Users and groups can be imported from LDAP.

The README names Keycloak and ORY Hydra as other self-hosted OpenID Connect and OAuth 2.0 providers, and the documentation names Keycloak and Authentik. It says the project supports only passkey authentication.

## Worth knowing

Browsers allow passkeys only on HTTPS pages, or on localhost, so the instance needs a domain served over HTTPS. Pocket ID keeps its database and uploads in a data directory next to the program.
