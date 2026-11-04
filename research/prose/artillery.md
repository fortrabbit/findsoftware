Artillery is a command-line load testing tool that runs scripted virtual-user flows against HTTP, WebSocket, Socket.IO and Playwright targets. Scripts are written in YAML by default, and the docs also accept JavaScript or TypeScript. The tool runs on Node.js and is installed globally from npm; the [documentation](https://www.artillery.io/docs/get-started/get-artillery) covers setup. Distributed runs can be launched on AWS Lambda, AWS Fargate or Azure Container Instances.

Artillery Cloud is a hosted subscription that covers both the CLI and the Artillery Cloud dashboard, separate from the open-source package.

## Worth knowing

Most of the code is licensed under the Mozilla Public License 2.0, but the README says some Azure-specific modules fall under the Business Source License and that commercial or production use of those modules requires a commercial license.
