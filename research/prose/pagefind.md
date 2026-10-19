Pagefind runs as a step after the site generator has produced its HTML. It reads those pages, writes a search bundle beside them, and the browser queries that bundle directly, so the site needs no search server. The npm and PyPI packages wrap the same Rust binary. The [Pagefind site](https://pagefind.app/) covers installation and indexing.

## Worth knowing

Indexing happens at build time only, so search reflects the pages present when the build last ran.
