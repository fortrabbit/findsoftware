Fastify is a web framework for Node.js that builds HTTP APIs and web applications from routes and plugins registered on a server instance. The server listens on a port once the application calls its listen method, so a container or server deployment runs a process that stays up. The [serverless guide](https://fastify.dev/docs/latest/Guides/Serverless/) also covers running the application on serverless platforms, where the platform starts it per request.

## Worth knowing

The serverless guide notes that a larger application takes longer to boot on a function platform. It names Google Cloud Run, AWS Fargate, Azure Container Instances and Vercel as platforms where the server can handle several requests at once.
