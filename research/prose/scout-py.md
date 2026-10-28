Scout is a RESTful search server written in Python and built with Flask. It keeps its search index in one SQLite database file, which the server is given by path, and it exposes indexing and search as REST endpoints. The server runs as a long-lived process that listens on a port. The deployment page describes running it under a WSGI server such as Gevent or Gunicorn, or under a process manager, and the README names a Docker image that runs it on port 9004.

## Worth knowing

Because the server is its own process with its own database file, a host has to run a Python process for it, and static hosting cannot serve it. The database is one SQLite file that the server opens by path.
