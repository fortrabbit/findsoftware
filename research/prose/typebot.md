Typebot is a chatbot builder in which bots are designed visually and then embedded in a website or app through its JavaScript library. Visitor answers are collected in the builder and can be exported as CSV. The self-hosted version has two Next.js applications, the builder where bots are designed and the viewer where visitors answer them, and it needs a Postgres database.

The self-hosting guides cover three routes: Docker, where a compose file starts the builder and viewer images on one server; Vercel, where each application is a separate project built from a fork of the repository; and a manual route on a Node.js server with bun, Nginx and PM2. The Docker route starts the server with docker-compose and serves the builder and the viewer on separate ports. The project is maintained by Typebot SASU, which also runs the Typebot Cloud service.

## Worth knowing

The code is under the Functional Source License. The license bars making the software available as a product that competes with Typebot's own service, and it becomes Apache 2.0 two years after the software is made available.
