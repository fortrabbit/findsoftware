Pushpin is a reverse proxy that sits in front of a web service and holds client connections open, so the backend can stream data to browsers and apps. The backend answers each proxied request with GRIP response headers that tell Pushpin to hold the connection and which channel it belongs to, and it pushes data to clients by calling Pushpin's control API. Pushpin supports HTTP streaming, HTTP long-polling and WebSockets.

The [install guide](https://pushpin.org/docs/install/) covers a Debian or Ubuntu package that runs Pushpin as a systemd service, a Homebrew formula, a Docker image and a build from source.

## Worth knowing

Pushpin is a proxy, so a site that uses it still needs its own backend service behind it. Fastly maintains it and provides commercial support.
