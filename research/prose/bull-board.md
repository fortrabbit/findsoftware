Bull Board is a dashboard for Bull and BullMQ job queues. It is mounted as a route in an existing Node server through an adapter for the framework in use, and it reads queues from Redis, or from PostgreSQL for BullMQ v6 queues. The [README](https://github.com/felixmosh/bull-board/blob/master/README.md) lists adapters for Express, Fastify, Koa, Hapi, NestJS, Hono, H3, Elysia and Bun, and the same dashboard also runs as a standalone command line tool or Docker image.

## Worth knowing

The optional metrics package, which keeps throughput history beyond the short window BullMQ stores, is marked beta in the README.
