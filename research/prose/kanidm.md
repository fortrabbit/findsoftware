Kanidm is an identity management server written in Rust. It offers passkey login through WebAuthn, OAuth 2.0 and OpenID Connect for single sign-on into web applications, a read-only LDAPS gateway for legacy systems and RADIUS for network and VPN authentication. Users have a web UI for self service, and administrators use the command line tools.

The server runs from a container image, which the [evaluation quickstart](https://kanidm.github.io/kanidm/stable/evaluation_quickstart.html) pulls and starts with Docker or Podman. The [client tools page](https://kanidm.github.io/kanidm/stable/installing_client_tools.html) covers system packages and cargo. The project's [comparison page](https://kanidm.com/comparisons/) compares Kanidm with LLDAP, Keycloak, Authentik, Authelia, Zitadel and Rauthy.

## Worth knowing

The evaluation quickstart is for trying Kanidm out; the project recommends following the installation chapter for a production deployment because of security considerations. The project's support page gives each stable release a limited support window.
