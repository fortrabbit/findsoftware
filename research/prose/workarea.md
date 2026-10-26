Workarea is a commerce platform built on Ruby on Rails, and it describes itself as combining commerce, content, search and insights in one platform. It is built as a collection of Rails Engines. The developer guide adds the workarea gem to a new Rails app and runs its installer generator, and the data sits in MongoDB, with Elasticsearch and Redis alongside it.

## Worth knowing

The application needs a Sidekiq background process running next to the application server, so a host has to run more than one process. The developer hosting article recommends the Workarea Commerce Cloud subscription for hosting, and the README places features such as B2B functionality, order management and running multiple sites in that subscription. The source is public on GitHub, but the README and the LICENSE file name different licenses, and the LICENSE file limits production use to cases that are not a Commerce Service.
