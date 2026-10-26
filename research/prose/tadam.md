Tadam is a web framework for Clojure. Its [site](https://tadam-framework.andros.dev/) describes it as a framework for function-oriented websites, with routes and views written in Clojure and HTML templates rendered through Selmer, and compares it to Flask. The core library is published on Clojars as tadam-core, and a project is created with the tadam-lite Leiningen template and runs on the JVM. The deployment section builds a standalone jar with `lein uberjar` and shows it running as a systemd service behind an Nginx reverse proxy.

## Worth knowing

Creating a project needs a Java installation and Leiningen, as the site's installation steps state.
