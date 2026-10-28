Sunspot is a Ruby library for interacting with the Solr search engine. It provides a DSL for indexing Ruby objects and for building search queries against Solr. The sunspot_rails gem integrates the library into Rails applications, and the core library can be used without Rails. The gems are installed through Bundler, and Solr runs as its own server beside the application.

The sunspot_solr gem bundles a Solr distribution, which the project describes as meant for development use.

## Worth knowing

A production site needs a Solr server of its own that keeps running alongside the application, because the bundled Solr distribution is not meant for production.
