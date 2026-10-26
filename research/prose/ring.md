Ring is a Clojure web applications library that its README says was inspired by Python's WSGI and Ruby's Rack. Applications are built from modular components that can be shared among applications, web servers and web frameworks. The repository holds several libraries: ring-core for handlers, requests, responses and middleware; ring-devel for debugging; adapters for Java Servlets in both the older and the Jakarta forms; and ring-jetty-adapter, which runs an application on an embedded Jetty server. The interface is described in a SPEC.md file in the repository.

## Worth knowing

The Jetty adapter needs a newer Java runtime than the core library, as the changelog records for the 1.14.0 release.
