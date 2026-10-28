Daphne is an HTTP, HTTP/2 and WebSocket server for ASGI applications, written in Python and developed by the Django project to power Django Channels. It is started as a command that points at an ASGI application and listens on localhost port 8000 by default. It can listen on a UNIX socket behind a reverse proxy or run inside a process manager. The Channels documentation installs it as the channels[daphne] extra of the Channels package.

## Worth knowing

HTTP/2 is served natively only when Daphne runs with TLS, set up through Twisted endpoint strings. A reverse proxy in front of it has to pass the HTTP/2 connection through for the protocol to reach the browser.
