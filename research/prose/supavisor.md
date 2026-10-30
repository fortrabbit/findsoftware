Supavisor is a connection pooler for Postgres that proxies client connections into pools of database connections. The [installation guide](https://supabase.github.io/supavisor/development/installation/) runs it from a source checkout with mix, and the repository's docker-compose file builds the service from its own Dockerfile. The docs also carry a [migration guide](https://supabase.github.io/supavisor/migrating/pgbouncer/) for moving from PgBouncer.

## Worth knowing

The project's security policy says Supavisor runs as the connection pooler on the hosted Supabase platform, and that people also run it on their own infrastructure.
