Scout for Craft CMS is a Craft plugin that adds full-text search to Craft entries. It keeps Algolia search indexes in sync with the entries, and each index is defined in the site's config file with an element type, a criteria function and a transformer for the data sent to Algolia.

The plugin is installed with Composer into a Craft project and then activated from the Craft command line. Studio Espresso maintains it.

## Worth knowing

Search runs on Algolia, a hosted service: the configuration takes an Algolia application ID and admin API key, so an Algolia account is needed for indexing and search.
