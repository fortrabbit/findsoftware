Janssen is an open-source identity and access management server written in Java. Its Auth Server implements OAuth 2.0, OpenID Connect, SAML 2.0, FIDO2, SCIM and UMA 2.0, and it is built on the Java Weld framework. The Linux Foundation hosts the project, which Gluu contributed in 2020.

The [documentation](https://docs.jans.io/v2.6.0/) describes three install routes: a Docker demo that runs the server with MySQL or PostgreSQL, a [Helm chart](https://docs.jans.io/v2.6.0/janssen-server/install/helm-install/) for Kubernetes that recommends PostgreSQL, and Linux packages for Ubuntu and Red Hat on virtual machines. Administrators connect to the server with a terminal UI.

## Worth knowing

The Docker demo installer is meant as a demonstration, and its page lists 8 GB of RAM and 4 CPU cores as the requirement. The same repository holds Agama, a language for web authentication flows, and Cedarling, a policy engine with SDKs for Java, Go, Rust, Python and C.
