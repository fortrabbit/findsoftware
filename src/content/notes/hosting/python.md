---
description: The deployed software runs as a Python application on the server.
lead: Needs a server that runs Python.
---

Python here means the production server runs the application through a WSGI or ASGI server such as Gunicorn or Uvicorn, usually behind a reverse proxy. The host has to support Python applications with their dependencies installed from PyPI. A record carries this value when its documentation requires Python on the production server. Python tools that only build files, such as some [static site generators](/categories/ssg/), carry [static files](/hosting/static/) instead. Django and Saleor are examples.
