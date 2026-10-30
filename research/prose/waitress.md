Waitress is a WSGI server for Python 3 applications. Its docs describe it as a production-quality, pure-Python server with no dependencies outside the Python standard library. It runs on CPython on Unix and Windows.

An application starts the server with a single call to the serve function on a chosen host and port, or with the bundled waitress-serve command. The server runs until it is stopped, for example with Ctrl-C.

## Worth knowing

Waitress does not natively support TLS, and its docs describe placing it behind a reverse proxy. The Pylons Project maintains it and points users to its website for support and development information.
