InstantSearch.js is an open source JavaScript library for building a search interface in a web frontend. It is made of predefined widgets, such as a search box and a list of refinements, that sit on an instantsearch wrapper. The wrapper passes queries to Algolia's search API and returns the results to the widgets. A developer can style the widgets with CSS, change their output through connectors, or write custom widgets. The library loads into a page from npm or a content delivery network, and the install guide also names a generator that creates a starter app.

## Worth knowing

The wrapper needs an Algolia application ID, a search API key and an index name, so the widgets depend on an Algolia index. The library has no server part of its own, and Algolia's hosted search service answers every query. The project also has React and Vue wrappers, which are separate packages in the same repository.
