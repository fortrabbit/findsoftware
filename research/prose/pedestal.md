Pedestal ships as Clojure libraries under the io.pedestal group, published on Clojars. A project declares the libraries it uses in a deps.edn file and runs them with the clj tool, on the Java Virtual Machine from Java 17 upward.

Pedestal's primary deployment mode is embedded: the application starts and launches a servlet container that receives its requests. The README names Jetty 12 and Http-Kit as the connectors it integrates by default, and the repository is a monorepo that holds the libraries together.
