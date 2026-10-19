Payload is part of a Next.js application: a config file defines collections, and from them Payload generates a database schema, a React admin panel and REST, GraphQL and local APIs. A project starts from the create-payload-app scaffolder, or Payload is added to an existing Next.js app. Payload joined Figma, and its announcement says the project remains open source. The [deployment guide](https://payloadcms.com/docs/production/deployment) covers Vercel, Netlify, AWS, self-hosted servers and other targets.

## Worth knowing

Payload has no separate server. Hosting follows Next.js, which means a Node.js server or a serverless Next.js host, and uploads need persistent storage or a cloud storage adapter.
