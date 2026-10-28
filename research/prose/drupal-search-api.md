Search API is a Drupal module that builds searches over any entity Drupal knows, using whichever search engine a site connects to it. A site builder defines an index of entity fields in Drupal and sends its content to a backend module. The project names Apache Solr and Elasticsearch as backends for larger sites and includes a Database search module that indexes and searches content in Drupal's own database. Search results can be shown with the Views module, and faceted search uses the Facets module.

The module is installed with Composer like other Drupal modules, and it is developed on [drupal.org](https://www.drupal.org/project/search_api) with its source on [git.drupalcode.org](https://git.drupalcode.org/project/search_api).

## Worth knowing

The Database search backend is meant for testing and for smaller sites, and the project page points larger sites to Solr or Elasticsearch. Search API does not restrict access on its own. The site owner has to index and display only items the visitor may see, and the project offers node access checks as one way to do that.
