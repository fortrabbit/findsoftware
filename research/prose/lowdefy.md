Lowdefy is a config-first web framework for business apps and internal tools. An app is described in YAML config, covering pages, blocks, operators, actions and connections, and the framework builds it into a running web app.

Lowdefy connects to databases and services through connections. Roles limit which users reach which pages and API endpoints, OpenID Connect identity providers can sign users in, and a config block sets up translations. The production build is a Node.js server: the [Node.js guide](https://docs.lowdefy.com/md/deployment/node-server.md) describes building it into a folder and starting it, and the [Docker guide](https://docs.lowdefy.com/md/deployment/docker.md) describes building an image.

## Worth knowing

The production server is a long-running Node.js process, so the host has to run Node.js.
