Redict is a distributed key/value store that its project describes as an independent fork of Redis. The source is hosted on Codeberg, and the project names itself, the Redict project, as the maintainer.

The server is C software started with `redict-server`. The [installation guide](https://redict.io/docs/install/) lists three routes: a distribution's package manager, a container image from the project's own registry, and a source build with GNU make. The compatibility guide describes switching from Redis by installing Redict in its place, with the existing configuration file and database.

## Worth knowing

Redict is designed as a long-running process on a server, so the host has to keep it running.
