DocSearch is a search service from Algolia for documentation sites. The Algolia Crawler reads a documentation site and writes its content to an Algolia index, which Algolia hosts. Open source frontend packages, built on Algolia Autocomplete, then add a search box to the site that queries that index. The packages are installed from npm as @docsearch/js or @docsearch/react, or loaded from a script tag.

## Worth knowing

The program is free for documentation sites that Algolia accepts, and a site applies before it is indexed. The index exists only on Algolia's servers, so a site that uses DocSearch depends on that index and on the search key Algolia issues for it.
