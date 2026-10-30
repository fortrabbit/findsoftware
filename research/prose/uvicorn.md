Uvicorn is an ASGI web server for Python that serves asynchronous web applications over HTTP and WebSockets. The uvicorn command line tool is the usual way to start an application, and the same server can be started from Python code. Its workers option runs several worker processes, which the deployment page describes as spawn-based rather than pre-forking, so the process manager also works on Windows.

## Worth knowing

The documentation recommends Gunicorn with Uvicorn's worker class for production, and it deprecates the Gunicorn worker class in favour of the uvicorn-worker package. The command line options --reload and --workers cannot be used together.
