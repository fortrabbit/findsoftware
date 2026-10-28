Norch is a standalone search server that runs on Node.js and stores its data in LevelDB. It is installed from npm and started with a single command in a terminal, after which it serves its own pages for uploading documents and running searches, plus an OpenAPI description of its HTTP endpoints. The query language comes from the search-index package that Norch depends on.

## Worth knowing

Norch is a long-running process that keeps answering requests, so it needs a host that can run a Node.js process; static file hosting does not fit it.
