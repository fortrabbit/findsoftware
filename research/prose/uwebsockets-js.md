uWebSockets.js is a native addon that exposes the µWebSockets web server, written in C++, to Node.js code. The addon is not in the npm registry: the README installs it with the npm client from the GitHub repository. The [generated API reference](https://unetworking.github.io/uWebSockets.js/generated/functions/App.html) documents the App entry point.

## Worth knowing

The web server is a long-running process, so it needs a host that keeps a Node.js process running. The README reserves intellectual property in general and licenses only source code that carries an explicit Apache-2.0 notice.
