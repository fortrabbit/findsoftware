---
description: The deployed software runs as a Node.js process on the server.
lead: Needs a server that runs Node.js.
---

Node.js here means the production server runs a long-lived JavaScript process that answers requests, so the host has to support Node.js applications and not only files. A record carries this value when its documentation names Node.js for running the deployed site. Frameworks that also run on [Bun](/hosting/bun/) or [Deno](/hosting/deno/) carry those values too, and those that can export a finished build also carry [static files](/hosting/static/). A tool that needs Node.js only to build shows under [runtime](/runtimes/node/). Ghost and Next.js are examples.
