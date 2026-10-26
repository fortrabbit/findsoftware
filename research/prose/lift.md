Lift is a web framework for Scala that runs on the JVM. Applications are created with sbt, using the lift/basic-app.g8 or lift/blank-app.g8 templates. Lift applications are deployed to a Java servlet container or application server, so they run as long-lived server processes.

## Worth knowing

The README's compatibility table gives Java 11 as the minimum for the 4.0 line.

The persistence components, Mapper and Record, have been removed from the main repository; projects that rely on them stay on an earlier release line or use another ORM.
