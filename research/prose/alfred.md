Alfred is a web server and REST API framework for Dart. The README describes its routing and middleware as Express-style: handlers are registered for an HTTP method and path, and a handler can return a string, a map or list (sent as JSON), a file or a binary stream instead of calling a response method. Request bodies in URL-encoded, multipart and JSON form are parsed, and the framework includes CORS middleware, static file serving, WebSocket routes and resumable file downloads.

The framework has no database layer. The README points to the Dart drivers for MongoDB, PostgreSQL and SQLite, which applications use directly.

## Worth knowing

The LICENSE file states that the core library is MIT-licensed and that some parts are BSD-licensed, because they were brought in from older Google code.
