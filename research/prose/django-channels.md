Channels extends Django to handle WebSocket connections, long-poll HTTP and background tasks next to the regular request cycle. It is built on ASGI, the Python specification for asynchronous servers, and Django's native ASGI support still serves plain HTTP. A project sets the ASGI_APPLICATION setting to a routing object in its asgi.py, which sends HTTP to Django and other protocols to their own handlers, and runs that application under a server such as Daphne. The Django Software Foundation maintains it as an official Django project.

## Worth knowing

A Channels project runs as a long-lived server process under a process supervisor or an orchestration system, so a host that serves static files or starts a script per request is not enough. The channel layer is optional. A backend such as the Redis one connects the server processes through a central server.
