Datasette is an open source Python tool for exploring data held in SQLite and publishing it as an interactive website with a JSON API. It serves SQLite files from a directory or from an application deployed with its publish command. It is installed with pip, Homebrew, a Docker image or a Mac app, and a plugin ecosystem extends it. Simon Willison maintains it on GitHub.

Datasette Lite packages the same software for WebAssembly, so it runs in the browser without a Python server. A normal server install runs as a single process that listens on a port.

## Worth knowing

The deployment guide says Datasette is not designed to run as root. It recommends a proxy such as nginx, Apache or HAProxy to serve ports 80 and 443 and forward traffic to the process.
