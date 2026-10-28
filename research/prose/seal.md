SEAL is a PHP library that gives one interface for adding, removing and searching documents across several search engines. A schema defines the indexes and their fields, an engine object runs the operations, and an adapter package connects the engine to each search service. The introduction names Loupe, Meilisearch, Algolia, Elasticsearch, OpenSearch, RediSearch, Solr and Typesense as the supported engines. The library is installed with Composer, and at least one adapter is required next to it.

The data is kept by the search engine the adapter talks to, not by SEAL itself. The framework integrations for Laravel, Symfony, Spiral, Mezzio and Yii are separate packages that wrap the core.

## Worth knowing

The README states that the project is heavily under development. The Composer package is split from the cmsig/search repository, where development happens and issues are tracked.
