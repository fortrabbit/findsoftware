Prism is an open-source HTTP server that a developer runs from the command line to mock an API described by an OpenAPI or Postman Collection file. Its mock mode answers requests from that description, and its validation proxy sits in front of a real API and checks the traffic against the same description. Stoplight maintains it and also offers hosted mock servers through its platform and studio.

## Worth knowing

The mock server listens on the local machine by default, so a copy running in Docker is reachable from outside its container only when started to listen on all addresses, as the README's FAQ explains. The CLI page says it can run in production, for example in a container, with its log printing in a separate process. The hosted mock servers are a separate vendor service, not part of the open-source package.
