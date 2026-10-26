Litestar is an ASGI framework for Python that is used to build API and web applications. It is installed with pip install litestar and has built-in support for the Jinja, Mako and Minijinja template engines, which are installed through extras.

An application runs on an ASGI server such as Uvicorn, Hypercorn, Daphne or Granian. The deployment guide calls running it manually with an ASGI server mainly suited to development and testing, and recommends a container or a process control system such as Supervisor or systemd for production.

## Worth knowing

A Litestar application needs a host that keeps a process running for it.
