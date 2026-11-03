Coral is a comment platform that a site embeds to show and manage its comment stream. The embed script loads from the Coral server and renders the thread into an element on the page, while moderation settings, user roles and login options are set in the server's admin area. The server runs as a long-lived Node process that listens for HTTP and WebSocket requests, uses MongoDB and Redis, and can hold several tenants in one installation. It installs from a Docker image or from source. Vox Media maintains the project and offers a hosted version alongside the open-source code.

## Worth knowing

Logins can come from the host site through a JWT token or an OpenID Connect provider, so the site's own user database stays the source of truth for those accounts. Spam and toxicity filters call third-party services when they are enabled. The hosted version is run by the Coral Project, and the open-source server is the self-hosted route.
