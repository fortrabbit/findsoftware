Elasticsearch Rails is a Ruby gem that adds Elasticsearch integrations to Rails applications. Its features include an ActiveModel integration with adapters for ActiveRecord and Mongoid, convenience model methods for search and import, wrappers that return search results as records, pagination support for Kaminari and WillPaginate, and rake tasks for importing data. The README also lists templates that generate an example Rails application.

The repository holds three gems: elasticsearch-model, elasticsearch-persistence and elasticsearch-rails. The gem described here is elasticsearch-rails, and it is installed with gem install. The Elasticsearch client itself comes from the separate elasticsearch-ruby project. The example application template needs a running Elasticsearch cluster.

## Worth knowing

The gem follows the Elasticsearch major version, so its version 8 line targets Elasticsearch 8.x. The README points to Elastic's support lifecycle page to check which releases are still supported.
