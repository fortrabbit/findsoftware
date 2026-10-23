xmcp is a TypeScript framework for building MCP servers, which give AI applications tools, prompts and resources through the Model Context Protocol. The [installation page](https://xmcp.dev/docs/getting-started/installation) scaffolds a project with create-xmcp-app and asks which transport to use: HTTP, which runs on a server, or STDIO, which runs on the user's machine.

An HTTP server can be hosted as a Node.js web service, as the [Render guide](https://xmcp.dev/docs/deployment/render) describes, or run as a Vercel Function, as the [Vercel guide](https://xmcp.dev/docs/deployment/vercel) describes.

## Worth knowing

The build step needs the xmcp compiler as a development dependency, and the Vercel guide says to keep development dependencies installed during the build. The built server is self-contained at runtime.
