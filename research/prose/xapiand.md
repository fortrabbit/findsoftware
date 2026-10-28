Xapiand is a RESTful search and storage server built as one C++ binary, described on its [project site](https://kronuz.github.io/Xapiand/). Applications send it JSON or MessagePack documents over HTTP and query them with full-text, geospatial and range searches. Its full-text search is built on a customized Xapian fork kept inside the source tree.

The project lists Docker, Homebrew and RPM or DEB packages as install routes, and it can also be built from source with CMake. The README describes a clustering design in which each shard elects a primary over Raft and nodes replicate data by pulling it from one another.

## Worth knowing

No stable release exists yet. The published releases are alpha versions, so this record shows a prerelease date and no stable version. The bundled Xapian fork carries the GPL, while the rest of the source is MIT-licensed.
