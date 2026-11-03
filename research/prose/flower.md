Flower is a web dashboard for Celery, the distributed task queue. It runs beside the Celery application: `celery -A tasks.app flower` loads that application's configuration, and the dashboard listens on port 5555 by default. It shows worker and task status as events arrive, offers remote control of workers and queues, and exposes an HTTP API and Prometheus metrics for the same cluster. Sign-in can use HTTP Basic Auth or OAuth with Google, GitHub, GitLab or Okta.

## Worth knowing

Flower reads from a Celery broker that the application uses, given as a broker URL or taken from the application's configuration, so a broker has to run alongside it. The configuration page describes a persistent mode that keeps task results and events in a database file.
