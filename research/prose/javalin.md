Javalin is a Java and Kotlin web framework. Starting a Javalin application starts an embedded Jetty server, and the process keeps serving requests until the application is stopped. It is added to a project as a Maven or Gradle dependency, and template rendering comes from separate per-engine artifacts for engines such as FreeMarker, Velocity and Thymeleaf. The [documentation](https://javalin.io/documentation) describes the setup.

## Worth knowing

Because the server runs inside the application's own process, a host has to keep a Java process alive for the site to answer requests.
