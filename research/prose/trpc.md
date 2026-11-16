tRPC is a TypeScript library for building and consuming end-to-end typesafe APIs without schemas or code generation. It is installed from npm as two packages, @trpc/server and @trpc/client. The docs say it combines concepts from REST and GraphQL, and that it can run standalone or be mounted as an endpoint on an existing REST API.

The server side has adapters for Express, Fastify, Next.js, AWS Lambda and the Fetch API, and a standalone Node.js adapter. Subscriptions run over WebSockets or HTTP streams.

## Worth knowing

The quickstart requires TypeScript and recommends strict mode in tsconfig.json.
