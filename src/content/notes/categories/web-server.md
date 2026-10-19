---
description: Software that accepts HTTP connections and serves files or hands requests on to an application, including proxies and load balancers.
lead: What answers the request.
---

Servers and proxies accept HTTP requests, serve static files, handle TLS, and pass dynamic requests on to an application, either as a reverse proxy or by running the application code inside the server process. App servers of the second kind keep the application in memory between requests. Load balancers and caching proxies sit in front of one or more of these. A record carries this category when serving or routing HTTP is its main job. Many ship as a [single binary](/hosting/binary/). Caddy, nginx and Traefik are examples.
