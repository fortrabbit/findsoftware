# Site search: research notes

135 candidates checked 2026-10-19: 69 accepted, 20 boundary, 24 hosted-service, 22 rejected (all on criterion 4). Sources: GitHub API (repo, releases, tags, README), npm, Packagist, PyPI and pypistats, crates.io, RubyGems, NuGet, Hex, wordpress.org plugin API, updates.drupal.org and drupal.org API. Hosted rows: homepage reachable, adoption and date from the vendor's SDK on npm where one exists.

Accepted by category: 21 search-library, 20 search-server, 18 search-integration, 9 search-index, 7 search-ui. By language: PHP 13, Rust 10, TS/JS 15, Ruby 7, Java 7, C/C++ 6, C# 4, Go 3, Python 3, Scala 1.

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| GitHub topic `search-engine`, top 300 by stars | ~45 | Mostly metasearch, OSINT, AI answer engines, torrent search |
| GitHub topics `full-text-search`, `fulltext-search`, `fulltext` | ~25 | |
| GitHub topics `instantsearch`, `search-ui`, `site-search`, `search-server`, `typo-tolerance` | ~12 | `static-search`, `client-side-search`, `search-library` return nothing at 100+ stars |
| GitHub topics `vector-search`, `fuzzy-search` | ~10 | Vector databases and fuzzy matchers |
| frutik/awesome-search, Tools section | 15, 0 new | Engines and vector DBs only |
| Search sections of awesome-php, -python, -ruby, -go, -rust, -dotnet, -elixir, -java | ~60, ~20 new | Most entries are API clients for Elasticsearch or Solr |
| npm keywords `full-text-search`, `search-engine`, `static-search`, `site-search`, `fuzzy-search`, `search-index` | ~990 packages, ~5 new | Keyword search misses Fuse.js and Lunr; ranking is noisy |
| Packagist tags `search`, `full-text-search`, `elasticsearch`, `meilisearch` | ~200, ~15 new | Laravel Scout drivers and CMS extensions |
| crates.io keywords `full-text-search`, `search-engine` | ~50, 2 new | Mostly string-matching algorithms |
| Own knowledge, checked against the primary source | ~35 | Hosted services, CMS plugins, static indexes |

Left out: API clients and SDKs for one engine (elasticsearch-php, Solarium, opensearch-py), Laravel Scout drivers, metasearch engines (SearXNG, Whoogle), desktop and file search, code search (zoekt), command-palette UIs, RAG and AI answer engines.

## Recurring facts

- Kind: build-time static index, in-browser library, embedded library, standalone server, database extension, UI kit, framework or CMS integration
- Index location: built at deploy time and fetched in chunks (Pagefind, tinysearch, docfind), in memory in the browser, file or SQLite on the server (Loupe, TNTSearch, Scout), separate server process
- Needs a running process: yes for every search-server; no for static indexes and embedded libraries
- Storage backend: own files, SQLite, Postgres, Redis/Valkey, Lucene segments
- Query features: typo tolerance, prefix and search-as-you-type, faceting and filters, geo search, synonyms, highlighting, custom ranking rules
- Languages: stemmers, stop words, CJK tokenization, per-language support lists
- Vector or hybrid search: in the repo description of Meilisearch, Typesense, Manticore, Orama, SeekStorm, Nixiesearch
- API compatibility: Elasticsearch-compatible (OpenSearch, ZincSearch, Quickwit), Algolia/InstantSearch-compatible through adapters (Typesense, Meilisearch)
- Backends supported by integrations and UI kits: Scout, Haystack, SEAL, Searchkit and Search UI each list engines
- Index size and WASM bundle size for static indexes
- Crawler included (Fess, YaCy, SOSSE) or content pushed by API
- License: GitHub detects none for Elasticsearch, Meilisearch, Orama, Weaviate, RediSearch, ZincSearch; several are dual or source-available
- Vendor cloud beside the open source engine: Meilisearch, Typesense, Elastic, Orama, Vespa, Manticore
- Registry: npm, Packagist, PyPI, crates.io, RubyGems, NuGet, Hex, wordpress.org, drupal.org

## Surprises

- Lunr.js has no release since 2020 and still 4.1M npm downloads a week. Elasticlunr.js, JS Search and Stork are stale too. Criterion 4 rejects the long-standing default for static-site search.
- Fuzzy matchers (fuzzysort 8.1M/wk, match-sorter 2.0M/wk, uFuzzy) out-download most real search libraries. They rank a list in memory without an index. One scope call decides the whole group.
- 20 boundary rows fall into seven groups: vector databases (5), database extensions (5), fuzzy matchers (3), log search engines (2), crawler-based web search engines (2), an AI search framework, DocSearch (UI open, index only on Algolia), and SearchWP (changelog has no dates, so criterion 4 cannot be checked mechanically).
- Repos move: Pagefind went from CloudCannon to its own org, Tantiny from baygeldin to altertable-ai, Sphinx 3.x ships binaries from sphinxsearch.com while the GitHub repo stopped at 2.x.
- Release signals disagree: elasticlunr-rs stopped GitHub releases in 2022 but keeps publishing to crates.io; Lucene.NET publishes only betas of 4.8 on NuGet, last stable 2012.
- Adoption on GitHub and in the registry diverge: Relevanssi has 52 stars and 100k+ WordPress installs; ke_search has 15 stars and 1.1M Packagist downloads.
- Name collision: "Haystack" is both the Django search integration and deepset's LLM framework; Sphinx collides with the Python docs generator, so its id is `sphinx-search`.
- Hosted services split three ways: site-search widgets (AddSearch, Cludo, Site Search 360), e-commerce search (Klevu, Doofinder, Constructor), managed hosting of an open source engine (Bonsai, SearchStax, Opensolr). The last group overlaps FindHost.
- AI docs search (Inkeep, kapa.ai) and hosted vector databases (Pinecone, turbopuffer) sit beside classic site search. Google's enterprise-search URL now redirects to "Agent Search".
