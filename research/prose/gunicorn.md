Gunicorn is a WSGI HTTP server for UNIX that runs Python web applications, and it is written in Python. It serves the application through a pre-fork worker model. It installs with pip or pipx, as a system package, or from a Docker image on GitHub Container Registry. It runs as a long-lived process: the [deployment guide](https://gunicorn.org/deploy/) advises against its daemon mode when a process monitor manages it.

## Worth knowing

The deployment guide strongly recommends running Gunicorn behind a proxy server.
