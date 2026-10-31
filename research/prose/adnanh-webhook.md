webhook is a Go program that serves HTTP endpoints, called hooks, and runs a configured command when a request matches the rules for that hook. Adnan Hajdarevic maintains the project under the MIT license.

The server listens on a TCP port or a Unix domain socket, can serve https with a flag, and can run behind a reverse proxy or under systemd socket activation. The README gives a GitHub push example, where a hook runs a redeploy script on a staging server. Install routes named in the README include snap, apt and FreeBSD packages, prebuilt binaries from the GitHub releases, and a build from source.

## Worth knowing

A hook without a trigger rule can be called by anyone who knows its endpoint, so the README points to the hook rules for restricting it. The README lists community-made Docker images, which the project does not publish itself.
