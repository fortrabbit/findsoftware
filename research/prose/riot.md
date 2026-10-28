Riot is a Go library for indexing and searching text inside an application. A program opens an index on disk or in memory, adds documents with typed fields, and runs queries that include phrase, prefix, fuzzy and numeric range matches, along with vector nearest-neighbour search. Its README describes it as a fork of Bluge, and a separate `gse` package wraps it with a tokenizer for Chinese and Japanese text.

## Worth knowing

Riot is not a server. The library runs inside the process that opens the index, so a site reaches search only through a program that uses it. The README names zed, a separate project, as a distributed search engine built on riot.
