http4s is a Scala library for HTTP servers and clients written as typed, functional and streaming code. It is built on FS2, manages its effects through cats-effect, and runs on the JVM. Its quickstart adds the Ember client and server modules to an sbt build through libraryDependencies, and its deployment page packages a service as an assembled jar that runs with `java -jar`.

## Worth knowing

The README states that the blaze backend needs a JDK newer than 8u252. The quickstart runs the service as a server on a port, so it needs a host that keeps a process running.
