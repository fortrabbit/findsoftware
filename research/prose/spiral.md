Spiral is a PHP framework for building web applications and services. According to the [lifecycle guide](https://spiral.dev/docs/framework-lifecycle/current/en), it can run behind a traditional Nginx and PHP-FPM setup, or on RoadRunner, an application server that starts its workers once and then passes them requests, so the application stays loaded between requests.

The [installation guide](https://spiral.dev/docs/start-installation/current/en) creates a project with Composer and starts the server with the `rr` binary that RoadRunner provides. Spiral Scout LLC maintains the framework.

## Worth knowing

The database guide says that using SQLite with multiple workers can present significant challenges.
