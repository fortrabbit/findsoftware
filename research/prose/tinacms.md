TinaCMS is a Git-backed headless content management system. Content lives as Markdown, MDX, JSON and YAML files in a Git repository, and editors save changes from an admin interface built into the site. A GraphQL API serves the content to the front end. The admin is a statically built single-page app, and the site itself can be built as static HTML or rendered on the server.

Locally, TinaCMS reads the project's own files. A self-hosted backend runs as a Node.js serverless function with its own database adapter, auth provider and Git provider, and the docs say some features are not available when self-hosting.

## Worth knowing

TinaCloud is the hosted backend that the project offers next to the open source package. It provides a hosted GraphQL endpoint, Git integration, user management and editorial workflow features.
