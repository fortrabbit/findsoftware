Sharaf is a Scala 3 web framework. Routes match on the request method and path segments, and query strings, forms and JSON bodies are parsed into case classes, optionally with validation. HTML is written with Twirl, and server-sent events are supported. The Undertow integration is the stable one and runs on the JVM, and an app adds the library as a dependency for Scala CLI, sbt or Mill. The README's example starts the server from the app's own code.

The framework can also generate models and routes from an OpenAPI 3.0 or 3.1 document through OpenApi4s. The README lists GraalVM and Scala Native examples and an AWS Lambda starter that runs an Undertow app through the Lambda Web Adapter.

## Worth knowing

The [servers reference](https://sake92.github.io/sharaf/reference/servers.html) says the http4s, JDK HTTP server, Helidon and snunit integrations are beta or experimental, with narrower form handling, incomplete request features and possible changes between releases. The project is pre-1.0 and its releases are numbered 0.x.
