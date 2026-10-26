Fiber is an Express-inspired web framework written in Go and built on Fasthttp. A Go program imports the framework and starts its own server, so a deployed Fiber app is a single Go binary that stays up and answers requests.

Fiber renders HTML on the server through a views interface, and one wildcard route can serve a single-page app. The template engines the homepage lists are supported through that interface.

## Worth knowing

The template engines, storage drivers and contrib packages are separate modules and are not part of the core install.
