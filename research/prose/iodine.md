iodine is a Ruby gem that provides a C-powered HTTP and WebSocket server for Rack and NeoRack applications. Its README lists built-in WebSockets, Server-Sent Events, Pub/Sub, static file serving and TLS, and describes a master process that monitors worker processes. The Pub/Sub engine can use Redis or Valkey when a deployment needs an external broker.

It is installed with gem install iodine or added to a Gemfile for Bundler-managed applications. It runs as a long-lived server in front of the application, not as a script that runs per request. Boaz Segev is the copyright holder named in the MIT license, and the API reference is published on rubydoc.info.

## Worth knowing

The project has no website of its own: the repository and the API reference are its pages. On Windows the README describes single-process mode.
