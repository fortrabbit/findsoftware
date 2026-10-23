ReactPress is a publishing system for React developers, combining a NestJS API, a web admin built with Vite and React, and swappable Next.js themes. Writers publish through the admin, and the public site is a Next.js theme that renders on the server. The default setup stores content in an embedded SQLite database, and an external MySQL database can be configured instead. A headless REST API with API keys lets other frontends read the same content. Installation is a global npm package, `npm install -g @fecommunity/reactpress`, followed by `reactpress init`, which starts the API, the admin and the default theme. The docs also describe a Docker Compose setup and an Electron desktop client with a local SQLite mode.

## Worth knowing

Docker is needed only for the embedded-docker or external MySQL configurations. The README and install docs state Node.js 20 or newer.
