search-index is a JavaScript full-text search library that runs in the browser and in Node.js. An index is opened with a `SearchIndex` constructor, documents are added with `PUT`, and results come back from `QUERY`. The index is kept in a persistent store: IndexedDB in a browser and LevelDB in Node.js by default.

The store can be swapped through the `db` option for any abstract-level compatible backend, such as the in-memory store or a backend for Redis or Postgres. The FAQ shows the library loaded with a script tag from its built file.

## Worth knowing

In a browser the index lives in that browser's own IndexedDB storage, so an index belongs to the browser it was built in.
