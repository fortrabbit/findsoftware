Mage-OS is an e-commerce platform forked from the Magento core, which its about page calls a community-driven alternative to Magento Open Source. A store is created with Composer from the `mage-os/project-community-edition` project on the Mage-OS package repository, as the [installation guide](https://mage-os.org/get-started/installation) describes.

## Worth knowing

A store needs a search engine, OpenSearch or Elasticsearch, next to the database and web server. Scheduled tasks for indexing, email sending and cache management are required, so the host has to start scheduled jobs as well as serve PHP.
