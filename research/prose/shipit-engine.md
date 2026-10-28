Shipit is a Rails engine that adds a web interface for deploying GitHub repositories, with deploy checklists, locks and rollbacks. It is set up as a Rails application from a template the project provides.

A running Shipit needs a database (MySQL, PostgreSQL or SQLite3), Redis, and a GitHub App that authenticates users, receives webhooks and accesses the API. Shopify Inc. publishes the project.

## Worth knowing

Shipit runs as an always-on Rails application, because GitHub delivers webhooks to it.
