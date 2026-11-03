Rauthy is an identity provider for single sign-on through OpenID Connect and OAuth 2, and it also supports PAM, as its [documentation](https://sebadob.github.io/rauthy/) states. The project is written in Rust, and the server runs from a container image. The [Docker guide](https://sebadob.github.io/rauthy/getting_started/docker.html) starts it as an HTTPS server, and the Kubernetes guide runs the binary from that image.

By default Rauthy runs on an embedded store and needs no external database, and Postgres can be used instead. The admin UI covers the administration of the application and its users, and each user has an account dashboard. The server offers server-side translation of its end-user pages.

## Worth knowing

The PAM and NSS modules for Linux logins live in a separate repository, and the README says that repository relies on GPLv3 dependencies.
