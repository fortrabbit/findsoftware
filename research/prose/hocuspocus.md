Hocuspocus is a WebSocket backend for collaborative documents, and its docs say it is based on Y.js. The server package, `@hocuspocus/server`, is installed with npm, as the [upgrade guide](https://tiptap.dev/docs/hocuspocus/getting-started/upgrade) shows, and it runs on Node.js, Bun and Deno. The server listens on a configurable port and address, and a SQLite extension ships for persistence.

The project is maintained by Tiptap GmbH in Berlin. Redis is an optional dependency for scaling across several nodes, and the vendor also offers a hosted version named Tiptap Collab.
