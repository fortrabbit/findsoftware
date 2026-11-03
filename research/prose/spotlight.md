Spotlight is a local development tool that brings Sentry's error tracking into the developer's own environment. An application adds Spotlight to its Sentry SDK configuration, and the SDK sends its events to the Sidecar, a local proxy server that runs on the developer's machine. The [getting-started guide](https://spotlightjs.com/docs/getting-started/) starts it with npx, and also covers a global npm install, a desktop app and a container image.

The tool works without a Sentry account.

## Worth knowing

The container image is published to GitHub Container Registry rather than Docker Hub, and the desktop app is a separate download from the npm package.
