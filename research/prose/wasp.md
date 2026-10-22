Wasp is a full-stack framework for web apps on React, Node.js and Prisma. An app is described in a declarative configuration file, and Wasp builds the frontend, backend and database parts from that description.

The deployment overview splits a Wasp app into three parts. The client is a single-page application that is usually served by a static file server or a CDN. The server is an Express app on Node.js, which handles requests from the client and comes with a Dockerfile. The production database is PostgreSQL. Individual routes can be prerendered to static content.
