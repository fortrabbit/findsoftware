Ackee is a web analytics server that its operator runs on their own infrastructure. The server is a Node.js process that keeps visit data in a MongoDB database, shows the statistics in its own interface, and offers a GraphQL API that other tools can query. Each site to be measured adds a tracking script that sends its visits to the server, so the analytics data stays on the operator's side.

The [get-started guide](https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md) describes a Docker Compose setup with MongoDB included, a single Docker container, a source install, a Helm chart maintained outside the project, and deploy routes on several hosting platforms. The guide recommends placing the server behind a reverse proxy on a subdomain, with SSL and CORS headers configured separately.

## Worth knowing

The FAQ states that one Ackee instance serves one user account, and that several instances can share the same MongoDB.
