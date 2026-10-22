Qwik is a framework for web apps that resumes on the client instead of hydrating. Its documentation describes it as resumable. Qwik City, developed in the same repository, adds routing and server rendering.

The [self-hosting guide](https://qwik.dev/docs/deployments/self-hosting/) describes two outputs. The static adapter produces a directory that is copied to a web server's document root. The Express and Fastify adapters produce a Node.js server entry that runs on the production server, and the guide recommends a process manager such as PM2 for it.
