ke_search is a search extension for [TYPO3](https://docs.typo3.org/p/tpwd/ke_search/main/en-us/Introduction/Index.md) that indexes pages, content elements and records from the TYPO3 database and offers full-text search with faceted filters. It requires MySQL or MariaDB, so no separate search server is installed. The index is kept in the `tx_kesearch_index` table of the TYPO3 database, and the frontend is rendered with Fluid templates.

Indexing is started from a TYPO3 backend module, or by a command that the TYPO3 scheduler can run on a schedule. Installation goes through Composer or the TYPO3 extension manager.

## Worth knowing

A paid add-on, ke_search_premium, [sold by the maintainer](https://www.kesearch.de/preise), adds a Sphinx-based search for large data sets and a remote indexer.
