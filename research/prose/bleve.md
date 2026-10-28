Bleve is an indexing and search library for Go. A Go program imports it as a package, builds an index from a mapping that describes its fields, and queries the index in process. It indexes text, numeric, date, boolean, geo-spatial and vector fields, and it supports term, phrase, prefix, fuzzy, query-string and nested queries, faceting and result highlighting. Pre-built analyzers cover a set of languages, and a command-line tool installs with go install. The contributing guide describes Bleve as a Couchbase project.

## Worth knowing

Bleve has no server of its own: the index is served by the process that imports the library, and the examples write it to a file path the program chooses.
