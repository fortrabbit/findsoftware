HonoHub is a headless CMS framework that runs as middleware in a Hono app. A project describes its data with Drizzle schemas and a hub configuration file, and HonoHub generates REST endpoints for each collection, validated with Zod schemas derived from the Drizzle schema. A GraphQL endpoint is added through the `useGraphQL` plugin. The hub is mounted as a route in the Hono app.

The admin panel is a React application built with Vite. It connects to the API server and can be served from that server or deployed as static files, and the APIs work without it. The project is maintained by Rhinobase.

## Worth knowing

The README describes HonoHub as being in the alpha stage, with breaking changes that do not follow semantic versioning.
