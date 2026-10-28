docfind builds a search index from a JSON file of documents and writes it into a WebAssembly module, so that search runs in the visitor's browser with no server. The index maps keywords, extracted at build time with the RAKE algorithm, to documents through a finite state transducer; the stored document text is compressed with FSST. The README describes fuzzy matching with Levenshtein distance at query time.

The command-line tool is a self-contained Rust binary that runs on the developer's machine. Its output is a JavaScript module and a .wasm file, which a page imports as a module.

## Worth knowing

The repository has no documentation site; the README is the only documentation. The project's homepage is a demo that searches 50,000 news articles in the browser.
