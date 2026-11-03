Ory Keto is an authorization server written in Go. It is an open source implementation of Google's Zanzibar model, and it answers permission checks between subjects and objects, with access control policies written in the Ory Permission Language. Applications call its REST or gRPC APIs for those checks. The [install guide](https://www.ory.com/docs/oss/keto/install) covers Homebrew, a shell install script, Scoop, Docker, Helm charts and binary downloads, and a build from source. A production deployment needs a database such as PostgreSQL, MySQL or CockroachDB. Ory Corp maintains the project, and the same server powers Ory Permissions on the Ory Network.

## Worth knowing

The Ory open source servers come without access control on their APIs, so the install guide advises putting Ory Oathkeeper or an API gateway in front of them. An Enterprise License build adds features the open source version does not have; it is distributed from a private Docker registry.
