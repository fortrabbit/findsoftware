Webhook.site is a tool for testing webhooks that gives each user a unique URL and email address and shows the requests and emails it receives. The open-source edition can be self-hosted with Docker Compose, from a Helm chart, or on a PHP web server. The hosted cloud at webhook.site has more features, some of them behind a paid subscription, and the open-source edition does not include Custom Actions.

## Worth knowing

The open-source edition runs with SQLite and depends on Redis, which its compose file starts as a separate service, along with Laravel Echo Server for realtime updates.
