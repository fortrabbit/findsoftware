Zipkin is a distributed tracing system written in Java. Applications report spans to the Zipkin server over HTTP POST, and the server stores them and serves a query API and a web UI for finding traces by service, operation, tags and duration. The [quickstart](https://zipkin.io/pages/quickstart.html) starts it as a Docker container, as an executable jar, through Homebrew or from source.

The server keeps spans in memory or in a persistent storage backend. The [architecture page](https://zipkin.io/pages/architecture.html) names Cassandra, Elasticsearch and MySQL as backends, and the README says the slim build supports only in-memory and Elasticsearch storage.

## Worth knowing

The web UI has no built-in authentication, as the architecture page states, so access to it is not restricted by the software itself.
