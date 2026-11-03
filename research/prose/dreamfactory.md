DreamFactory is a self-hosted platform that generates REST APIs for databases and file services. Its README says it creates REST endpoints automatically for SQL and NoSQL databases, and it is built on the Laravel framework. A web-based admin console manages services, roles, users and API keys, and role-based access control sets permissions per table, endpoint and HTTP verb.

It installs with a Linux installer script, on Windows with IIS or Apache, with Docker Compose, through a Helm chart on Kubernetes, or with an npx command. The Docker image includes NGINX and PHP 8.3 or later. The [documentation](https://docs.dreamfactory.com) covers the installers and the platform.

## Worth knowing

The core platform is open source, and a commercial edition adds connectors and features that the open source edition lacks, as the [about page](https://www.dreamfactory.com/about) states. The README lists SAML, OAuth 2.0, OpenID Connect and LDAP among its single sign-on options, and its FAQ places LDAP and SAML in the commercial edition.
