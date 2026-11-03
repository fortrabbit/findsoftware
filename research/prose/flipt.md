Flipt is a Git-native feature flag platform. The server is a single binary that runs as a long-lived process and serves a web UI and an API. Its storage backends hold flag state in a local directory, in memory or in a Git repository; the local backend serves flag state from a git repository on the local filesystem.

Applications evaluate flags through REST and gRPC APIs, through client SDKs, or through OpenFeature providers that Flipt publishes. The web UI can sign users in with OIDC. The server is written in Go, and the [installation guide](https://docs.flipt.io/v2/installation) lists Docker, release archives, a Helm chart and Homebrew as install routes.

## Worth knowing

The server code is under the Fair Core License, which is source-available and excludes competing uses. The client code is under the MIT license. Some features need a commercial license. Flipt Cloud is a hosted product, and the project's migration guide moves users from it to a self-hosted Flipt v2 instance.
