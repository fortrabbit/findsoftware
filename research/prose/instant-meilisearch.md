Instant Meilisearch is a JavaScript package that connects a Meilisearch index to InstantSearch.js, the front-end search UI library that Algolia develops. It supplies the search client that InstantSearch.js calls, so queries go to Meilisearch and InstantSearch.js draws the search interface. The [README](https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md) describes an npm install and a script-tag setup from a CDN, and it runs in the browser of the site visitor.

The package lives in the meilisearch-js-plugins repository, which holds other packages. It needs a Meilisearch instance that holds the data, and the Meilisearch server is a separate product.

## Worth knowing

The README limits its compatibility guarantee to one major release of InstantSearch.js and one of Meilisearch, and it marks some InstantSearch widgets as unsupported where Meilisearch lacks the feature they use.
