Ghost is a Node.js publishing platform for websites, newsletters and paid memberships, built on Express and Knex, with MySQL as the production database. Themes are written in Handlebars and rendered on the server. A read-only Content API serves other frontends, and a separate Admin API is also provided. The documented production setup is ghost-cli on an Ubuntu LTS server behind NGINX. The Ghost Foundation, a non-profit founded in 2013, maintains it. The [hosting guide](https://docs.ghost.org/hosting/) lists the server requirements.

## Worth knowing

Ghost renders its own pages, so it runs as a server process rather than producing static files. The official Docker Compose setup is labeled preview, and self-hosting ActivityPub and Tinybird analytics requires it. Ghost(Pro) is the project's hosted offering.
