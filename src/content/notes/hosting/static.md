---
description: "The software's output is plain files that any web server can serve, with no code running per request."
lead: Plain files, any host.
---

Static files here means the build output is plain HTML, CSS, JavaScript and assets. Nothing runs on the server when a page is requested, so any web server, a CDN or object storage can host the result. A record carries this value when producing such a build is a documented way to deploy it. The tool itself still runs somewhere, on a developer machine or in CI, and that requirement shows under [runtime](/runtimes/). Frameworks that can also run a server carry [Node.js](/hosting/node/) as well. Hugo and Eleventy are examples.
