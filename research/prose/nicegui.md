NiceGUI is a Python framework for building web user interfaces. The developer writes the interface in Python, and the framework shows it in the browser, keeping a WebSocket connection open between the page and the Python process. The project states that it is built on top of FastAPI. The same code can also run in a native desktop window instead of the browser. Redis is available as an optional storage backend next to the default file storage, and the project's own website at nicegui.io is built with NiceGUI.

## Worth knowing

All UI logic runs in the Python process, which uses a single uvicorn worker. The deployment guide describes starting the main script with systemd or a similar service, or running the Docker image, so the process has to keep running for connected browsers to work.
