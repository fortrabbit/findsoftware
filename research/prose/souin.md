Souin is an HTTP cache written in Go. It can be placed on top of an existing reverse proxy, or added to one as a plugin, and the project's docs list integrations for Caddy, Traefik, Tyk and several Go web frameworks. The [Caddy module](https://docs.souin.io/docs/middlewares/caddy/) is built into a Caddy binary with xcaddy. The [quickstart](https://docs.souin.io/docs/quickstart/) also runs it from a Docker image.

## Worth knowing

The standalone server is described on the quickstart page as deprecated and meant only for testing. Souin keeps one in-memory store; other storage backends are added at build time from a separate repository.
