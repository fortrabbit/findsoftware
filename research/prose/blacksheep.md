BlackSheep is an asynchronous web framework for Python, built on the ASGI standard. It provides routing and dependency injection, templates render through Jinja2 by default, and its docs describe built-in OpenID Connect sign-in. The framework has no server of its own: it runs under an ASGI server such as uvicorn, hypercorn or granian, which keeps the application process running.

## Worth knowing

The application depends on the chosen ASGI server to stay up, so the host needs that server in place. The README points to each ASGI server's own documentation for production runs rather than describing a separate deployment method.
