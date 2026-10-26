Play Framework is a web framework for Java and Scala, maintained by The Play Framework Contributors and published under the Apache License 2.0. Projects are created with sbt new from a giter8 template, such as the Scala seed. Templates are written in Twirl, the template engine Play ships with, and the docs describe messages per language tag for internationalization.

For production, the dist task builds a binary distribution whose start script runs the application as a server that listens on an HTTP port. The server needs only a Java installation to run it.

## Worth knowing

The docs describe the current line of Play as built on Pekko in place of Akka, following Akka's license change.
