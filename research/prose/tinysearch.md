tinysearch is a full-text search engine for static websites. It is written in Rust and compiled to WebAssembly, so the search runs in the visitor's browser, and its index ships as static files alongside the rest of the site. The README says it can be seen as an alternative to elasticlunr, and that it is used together with static site generators. Matthias Endler is named first among its maintainers.

## Worth knowing

The site needs no search server, because the index is bundled into the WebAssembly output. The tool that builds that output is run on a developer's machine, and it is installed through Cargo, as a library crate or from a Docker image.
