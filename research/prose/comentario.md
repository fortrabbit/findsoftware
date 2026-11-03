Comentario is a web comment engine. It adds threaded comments, voting and moderation to the pages of a site, through an embedded widget. The server is written in Go and runs as a systemd service when installed from a binary package, or as a container, a Helm chart in Kubernetes, or a build from source. It stores its data in SQLite or PostgreSQL, and a moderator works in an administration UI that covers several domains. The project's README says it started as a fork of Commento, the predecessor it describes as now discontinued.

## Worth knowing

The README states that the code no longer shares legacy code with its predecessor since version 3.0, so the fork relationship describes the origin and not the current code. A cloud-hosted version is offered beside the self-hosted software; the [cloud page](https://docs.comentario.app/en/getting-started/cloud/) calls it a turnkey cloud solution.
