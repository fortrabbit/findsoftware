Hummingbird is a Swift web framework for server-side web applications and APIs. It runs on top of a SwiftNIO-based server implementation and is added to a Swift package through the Swift Package Manager. Its core is minimal, with additional features provided through extensions, one of which is Mustache templating.

## Worth knowing

The project's features page describes the server finishing in-progress requests before going offline, so a deployment needs a host that keeps a process running. The README lists an AWS Lambda integration among the extensions in separate repositories, so a Lambda deployment depends on that extension rather than the core framework.
