Magento Open Source is the free, PHP-based e-commerce platform from Adobe, and the code base that Adobe Commerce builds on. A store runs on MySQL or MariaDB with OpenSearch for search, Valkey for cache, and RabbitMQ or ActiveMQ Artemis as the message queue. The project's README lists these as tested versions. It exposes REST and GraphQL APIs for headless use. Default templates are PHTML files, alongside Knockout HTML templates. The install comes from a Composer repository at repo.magento.com that needs Marketplace access keys, so it is not a public Composer package. Many system functions depend on cron, which `bin/magento cron:install` sets up.

## Worth knowing

The published support schedule is written for Adobe Commerce, and those pages do not name Magento Open Source.
