PgCat is a Rust pooler and proxy that sits between clients and PostgreSQL servers and adds sharding, load balancing, failover and mirroring. The README gives a Docker image and a build from source with Cargo as ways to run it, and it names PgBouncer as the pooler it resembles.

The README's deployment section sets the pooler to spawn four workers, a number that can be adjusted. Its configuration is described in [CONFIG.md](https://github.com/postgresml/pgcat/blob/main/CONFIG.md).

## Worth knowing

No separate project website is named, so the repository and its README are the project's own pages.
