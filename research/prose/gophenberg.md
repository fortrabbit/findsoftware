Gophenberg is a content management system that runs as one Go binary beside a PostgreSQL database. Posts are written in the Gutenberg block editor inside a React admin at `/admin`, and the binary publishes them on the public site at the root. The published content is also readable through a read-only JSON API at `/api/content/v1`, which needs no authentication.

Themes are optional. A theme is an Astro project that reads that JSON API, and the built-in renderer serves the posts when no theme is active or the theme is down. Plugins are Go packages compiled into the binary, each with its own routes and database tables. A reference plugin serves the posts as an RSS feed.

The [install guide](https://docs.gophenberg.org/self-hosting/install/) runs the binary and PostgreSQL with Docker Compose behind a reverse proxy that holds the HTTPS certificate. The admin login cookie is marked secure, so the site needs HTTPS in front to be used.

## Worth knowing

Gophenberg is below 1.0 according to its own pages. Built frontend artifacts bundle WordPress packages under GPL-2.0-or-later, so a built admin or theme carries those terms while the source stays Apache-2.0.
