Hibernate Search adds full-text search to Java applications that use Hibernate ORM. It indexes Hibernate ORM entities into Apache Lucene indexes or Elasticsearch and OpenSearch clusters and runs full-text queries against them.

The index is either local Lucene storage or a remote Elasticsearch or OpenSearch cluster that is configured separately. The project ships no server of its own, and the [documentation](https://hibernate.org/search/documentation/) is the place to start.

## Worth knowing

Hibernate Search is a library inside a Java application, not a search service a site can call. A site built with it needs a Java build that pulls the Maven artifacts, and the Elasticsearch option adds a cluster to run beside the application.
