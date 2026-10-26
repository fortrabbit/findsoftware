Wisp is a web framework for the Gleam language, built around handlers and middleware. A handler is a function that takes an HTTP request and returns a response, and middleware is a function that takes a response-returning function and wraps it, so one handler can be combined with logging, static file serving and other steps. The framework runs through an adapter package: wisp_mist starts the Mist web server inside the application's own program, and the README example keeps that program running to serve requests. A second adapter, wisp_ewe, is in the same repository.

## Worth knowing

The server runs as a long-running process started by the application.
