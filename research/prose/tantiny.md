Tantiny is a Ruby library that adds full-text search to a Ruby program without a separate search server. It wraps the Tantivy search engine library, written in Rust, and the index lives either in a directory or in memory. A schema declares the fields to index, and a search returns the ids of matching documents. The documents themselves are not stored in the index, so the caller loads them from its own store. The gem is a fork of the original Tantiny gem, and its README records the transfer of the gem to Altertable.

## Worth knowing

Tantiny installs precompiled native binaries from its GitHub releases. A Rust toolchain is needed only where no binary matches the platform, Ruby version and architecture. Writes lock the index, so the README recommends one writer process and several reader processes when more than one process shares an index.
