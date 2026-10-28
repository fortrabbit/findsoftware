php-fts is a full-text search library written in PHP. It keeps its index in a directory of files, so it needs no database and no separate search service. Projects add it with Composer or by copying the source into the project. The README states that a request opens the index directory, reads what it needs and ends, so the library runs inside each request rather than as a process of its own. Documents are stored in that directory in readable form. The library requires PHP 8.1 or higher, and Olivier maintains it.

## Worth knowing

The README says to keep the index directory outside the web root, because the documents can be read from its files. The 2.0 release cannot open an index written by the 1.x line, so a 1.x index is rebuilt from the source data.
