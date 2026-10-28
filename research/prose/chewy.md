Chewy is an object document mapper for Elasticsearch, written in Ruby and built on the official elasticsearch-ruby client. Index classes declare which model attributes become document fields, and the index is updated through bulk imports and atomic update strategies. Its chainable query DSL builds search requests against those indexes. The gem integrates with ActiveRecord and updates indexes on model changes through update_index callbacks, and the [docs](https://github.com/toptal/chewy/tree/master/docs) describe use without Rails. Installation is through the gem, and the Elasticsearch server runs separately.

## Worth knowing

Chewy targets Elasticsearch, and the README says OpenSearch is not officially supported. Each major Chewy version follows a major Elasticsearch version, and minor versions may include breaking changes.
