Tantivy is a Rust library for full-text search. A program links it in as a crate and builds its own search engine on it, because the project is a library and not a search server that runs on its own. The README names Quickwit, a distributed search engine built on Tantivy, as a separate project. Its FAQ lists bindings for Python and Ruby, which are separate records.

## Worth knowing

Tantivy has no server to install. A search built on it runs inside the program that links the library, so the host of that program is what runs the search.
