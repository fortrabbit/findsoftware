---
description: "The software is a program that keeps running and answers requests itself, usually behind a proxy."
lead: A process the host keeps alive.
---

Always on means the software is started once and keeps running, listening for requests on a port. The host has to keep it alive, restart it after a crash or a deploy, and usually puts a web server or proxy in front of it. Node.js servers, Python and Ruby application servers, and single binaries such as databases and caches run this way. Plain web space without process management cannot host it. Ghost, Strapi and Flask are examples.
