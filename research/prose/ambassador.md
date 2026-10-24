Ambassador is a web framework for Swift that maps URL paths to response handlers, so an app can answer HTTP requests with fixed or generated responses. It is based on SWSGI, the Swift web server gateway interface. The README's example runs it on Embassy, the HTTP server that the package depends on, and says it can run with other SWSGI-compatible servers.

Handlers include a JSON response, a data response with a custom status and headers, and a decorator that delays another response by a set time or never returns it. Readers collect request bodies as data, JSON or URL-encoded parameters. The router can match paths with regular expressions and passes the captured groups to the handler.

## Worth knowing

The README describes the framework as designed for UI automatic testing and API mocking, and its example mocks API endpoints.
