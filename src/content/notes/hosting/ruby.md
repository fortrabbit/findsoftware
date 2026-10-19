---
description: The deployed software runs as a Ruby application on the server.
lead: Needs a server that runs Ruby.
---

Ruby here means the production server runs the application through a Rack-compatible app server such as Puma, usually behind a reverse proxy, with gems installed by Bundler. The host has to support Ruby applications and not only files. A record carries this value when its documentation requires Ruby on the production server. Ruby tools that only build pages carry [static files](/hosting/static/) instead. Ruby on Rails is an example, and Bridgetown carries both values because it can build a static site or run a server.
