dotCMS is a content management system written in Java. It serves content through REST and GraphQL APIs and manages several sites and languages from one installation, with roles and permissions for the people who edit them. The [quick start guide](https://www.dotcms.com/docs/manage/installation-and-deployment/installation/quick-start-guide) starts it from the standard Docker image. The [requirements page](https://www.dotcms.com/docs/manage/installation-and-deployment/installation/requirements) lists PostgreSQL for the database, OpenSearch for search, and Redis or Valkey for cache and pub-sub, with Tomcat bundled in the standard stack.

The same software is offered as dotCMS Cloud, a hosted option that dotCMS runs for its customers, alongside the self-hosted image.

## Worth knowing

The source is published under the Business Source License 1.1. The README says all features are free for organizations whose total finances are below a stated threshold. The license text sets a change date after which the code moves to the GPL v3.

The requirements page says the search server must move to a newer OpenSearch line from Q1 2027.
