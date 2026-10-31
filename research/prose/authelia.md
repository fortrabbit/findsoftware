Authelia is an open-source authentication and authorization server and portal. Its [introduction](https://www.authelia.com/overview/prologue/introduction/) calls it a 2FA and SSO authentication server, and the homepage presents it as a companion to common reverse proxies. Applications can send their users to it for a session-cookie login, or use it as an OpenID Connect 1.0 provider, or accept identity from trusted headers. Users sign in through its web portal, which also supports passwordless authentication via passkeys and WebAuthn.

The project documents a [Docker](https://www.authelia.com/integration/deployment/docker/) install, a [Helm chart](https://www.authelia.com/integration/kubernetes/chart/) for Kubernetes, and a bare-metal install with example systemd unit files, published binaries, Debian packages with an APT repository, and an AUR package.

## Worth knowing

The bare-metal guide says Authelia runs as a daemon, so a host install keeps a process running rather than starting per request. The repository is maintained by the Authelia GitHub organization, and the homepage's copyright line names Authelia.
