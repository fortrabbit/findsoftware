Bugsink is a self-hosted error tracking server that accepts events from Sentry SDKs. It is written in Python, and the [single server guide](https://www.bugsink.com/docs/single-server-production/) runs it with Gunicorn behind Nginx, while the Docker guides run it in a container. The data goes to SQLite, MySQL or PostgreSQL, and the quickest Docker setup uses SQLite in a throw-away container, as the [Docker install guide](https://www.bugsink.com/docs/docker-install/) describes. Bugsink B.V. develops it and also runs the same product as a managed service.

## Worth knowing

Most of the code is under the PolyForm Shield 1.0.0 license, and the ee/ directory may be used only under a separate license from Bugsink B.V.
