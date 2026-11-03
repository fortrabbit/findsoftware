Steel Browser is a server that AI agents and apps call to start browser sessions and control them. It drives Chrome, so Puppeteer, Playwright and Selenium clients can connect to it, and it exposes a [REST API](https://github.com/steel-dev/steel-browser/blob/main/README.md) with an OpenAPI reference. The server runs as a Docker image or as a Node.js process with Chrome installed, and the README names one-click deploys to Railway and Render. The company also runs Steel Cloud, a managed version of the same product.

## Worth knowing

The project has no stable release: every tag so far is a beta, so the record has no current major version. The server is Apache 2.0 licensed. The Docker image is published on the GitHub container registry rather than Docker Hub.
