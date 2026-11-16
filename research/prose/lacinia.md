Lacinia is a GraphQL execution engine written in Clojure. The schema is written as Clojure data in EDN, or in GraphQL's schema definition language, and field resolver functions return the data for each field. A compiled schema executes the query it is given, typically inside a Ring handler function of the application, so the application's own HTTP code takes the request and returns the JSON. Lacinia does not decide where data comes from: a resolver can query a database or call another web service. The companion library lacinia-pedestal supplies HTTP support for the Pedestal framework.

## Worth knowing

The library ships precompiled ANTLR parsers, so a project that uses it as a dependency has to run a preparation step before first use. The documentation says the library targets Clojure 1.9 and uses clojure.spec.
