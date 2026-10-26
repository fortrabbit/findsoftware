Swifter is an HTTP server engine written in Swift. An application creates an `HttpServer` in code, registers handlers for routes, and calls `start()`, so the server runs as the application's own process. The [README](https://github.com/httpswift/swifter/blob/stable/README.md) shows examples for routes, serving files from a directory, redirects, HTML built in Swift and WebSocket handlers. It is installed through the Swift Package Manager, CocoaPods or Carthage.

## Worth knowing

The default branch is `stable`. The `master` branch adds an experimental web-framework layer on top of it, and the `2.0` branch, an async IO version, is marked experimental in the README.
