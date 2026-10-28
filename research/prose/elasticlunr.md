Elasticlunr.js is a full-text search engine written in JavaScript, built on Lunr.js. It builds an index from JSON documents and searches it in the browser or in Node.js. The README describes building the index ahead of time and loading it on the client, for static web pages and offline document sets. Fields are chosen when the index is created, and queries can boost fields at query time.

The library is installed with npm for Node.js use. For browser use, the README describes including the library's source file on the page.

## Worth knowing

The README asks for a new maintainer, because the author is focusing on a new domain. Older browsers that lack ES5 need a JavaScript shim, as the README states.
