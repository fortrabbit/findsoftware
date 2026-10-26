Flamingo Commerce is a set of Go modules for building headless e-commerce applications on the Flamingo framework. The modules cover price, product, category, cart, payment, search, checkout, customer, order and w3cdatalayer. Each one is a bounded context with its own ports and adapters, and the modules provide GraphQL support. An application imports them with `go get` and loads them in its Flamingo bootstrap.

## Worth knowing

The project states that its API is still Beta and that its models and methods may change, so an update can require code changes in an application built on it. The modules are built on the Flamingo framework, which the project names as their base.
