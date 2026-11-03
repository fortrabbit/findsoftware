Mercure is a protocol for pushing updates from a server to browsers and other HTTP clients, and its reference hub is a server that implements it. The hub is a custom build of the [Caddy](https://mercure.rocks/docs/hub/install) web server with the Mercure module. The project publishes a Docker image, a Compose file, a Helm chart and prebuilt archives, and a Go library is available for applications written in Go.

## Worth knowing

The [license page](https://mercure.rocks/docs/hub/license) states AGPL-3.0 for the hub and offers a commercial license through Mercure Enterprise. The paid tiers add multi-node clustering and the Redis and PostgreSQL transports, and the hosted Mercure Cloud runs its servers in Amsterdam.
