Instatic is a self-hosted CMS in which a visual canvas editor, the content engine, media, sign-in, forms, plugins and the publisher run in one Bun server. Editors place modules on breakpoint frames side by side and can turn part of a page into a Visual Component with typed parameters. Pages, posts and custom tables share one store, which is SQLite or Postgres.

Publishing renders each page to an HTML file and swaps the live folder over in one move, so visitors read finished files that the Bun server answers. Plugin server code runs in a per-plugin QuickJS interpreter compiled to WebAssembly, and can reach only the network hosts its manifest lists and the owner approves at install. Instatic also acts as an MCP server and has a built-in AI agent. The [README](https://github.com/CoreBunch/Instatic/blob/main/README.md) gives a Docker compose setup alongside the Bun development setup.

## Worth knowing

The README says the project is version 0.0.x and that "APIs and workflows can still shift before 1.0".

The one-click deploy section links to Railway templates. Railway is a third-party host, not a hosted version of Instatic.
