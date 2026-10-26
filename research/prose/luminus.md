Luminus is a Clojure web framework built from a set of libraries. Applications are created with a Leiningen template, using `lein new luminus my-app`, and the template adds options for the web server, the database, ClojureScript and other features as profiles. Pages are rendered with Selmer templates. A generated app runs on the JVM with an embedded Jetty server by default, and `lein uberjar` builds a standalone JAR.

The [deployment guide](https://luminusweb.com/docs/deployment) covers running the JAR directly, deploying a WAR file to Apache Tomcat, deploying to WildFly, running on a VPS under systemd, and deploying to Heroku.

## Worth knowing

The homepage names [Kit](https://kit-clj.github.io/) as a successor to Luminus. The template's README marks its Immutant server option as no longer funded or maintained, and that option is one of the server choices the template offers.
