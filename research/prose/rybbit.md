Rybbit is an open-source web and product analytics platform. It records sessions, funnels, goals and users, and includes session replays and error tracking. The self-hosted edition runs a Node.js API server behind a Next.js client, with PostgreSQL for user data, ClickHouse for analytics data and Redis for shared state.

The [self-hosting guide](https://rybbit.com/docs/self-hosting) describes a setup script that writes the environment file and starts the stack with Docker Compose. On a blank server the script also sets up Caddy as the reverse proxy. Tomato.gg LLC operates Rybbit and provides the hosted service.

## Worth knowing

Some features exist only on the cloud service or on its paid plans, including Web Vitals. The self-hosting documentation says a self-hosted instance does not send email, so an admin creates accounts directly.
