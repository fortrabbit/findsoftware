Papercut SMTP is a desktop email viewer with a built-in SMTP server, meant for development. An application points its mail settings at that server, and each message it sends is stored as an .eml file and shown in the app instead of being delivered. An optional service runs the same server as a Windows service or in a Linux container, adds a browser-based web UI and an HTTP API for scripting, and offers an MCP server that AI agents can use to read the captured mail.

## Worth knowing

The desktop app lists Windows 10 or later as its requirement. The server delivers nothing, but the service has no built-in authentication for its web UI, so a network address needs a firewall or a reverse proxy with authentication in front of it. The service can also reject mail once a rate limit is reached, which lets a team test how an application handles a throttling mail server.
