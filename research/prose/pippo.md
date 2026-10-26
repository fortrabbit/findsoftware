Pippo is a micro web framework for Java. The docs recommend deploying an application as a normal executable application with an embedded web server, and the framework is added as the Maven dependency pippo-core in the ro.pippo group. Freemarker is the default template engine, with Jade, Groovy, Pebble, Trimou and Velocity as built-in alternatives, and messages can be translated through per-language properties files.

## Worth knowing

The server page states that Pippo needs a servlet container to run. The embedded container is Jetty by default, and another container, such as Tomcat, can be used instead.
