soketi is an open-source WebSocket server that speaks the Pusher protocol, and according to the [README](https://github.com/soketi/soketi/blob/1.x/README.md) existing projects that connect to Pusher need minimal code change to work with it. It is written in TypeScript and runs on Node.js. It installs from npm, from a Docker image, or as a Helm chart for Kubernetes. The [install guide](https://docs.soketi.app/getting-started/installation/cli-installation) describes running it under a process manager so that it stays up and restarts on failure.

App definitions, which hold the credentials that clients and the backend authenticate with, may be stored in MySQL, PostgreSQL or DynamoDB. Redis holds data for horizontal scaling, rate limiting and queues.

## Worth knowing

The install guide says Node.js LTS is required for the CLI build, because of uWebSockets.js build limitations. The Helm chart lives in a separate GitHub repository, and the Docker images are published to quay.io rather than Docker Hub.
