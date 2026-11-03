Ory Kratos is an API-first identity and user management server written in Go. It runs the login, registration, account recovery, verification and profile flows that an application would otherwise build itself, and applications reach it over HTTP APIs. Email and SMS templates use Go templates and can be translated per user. The [install guide](https://www.ory.com/docs/oss/kratos/install) covers Homebrew, a shell install script, Scoop, Docker, Helm charts and binary downloads, and a build from source. A production deployment needs a database such as PostgreSQL, MySQL or CockroachDB. Ory Corp maintains the project, and the same server powers Ory Identities on the Ory Network.

## Worth knowing

SAML, SCIM and organization login are named as Enterprise License features that the open source version does not include. The APIs come without access control, so the install guide advises putting Ory Oathkeeper or an API gateway in front of them.
