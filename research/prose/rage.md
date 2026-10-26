Rage is an API-first Ruby web framework that runs APIs and background jobs in one process, using fibers for concurrency. The README says it uses Rails compatibility as a foundation, so an existing Rails application can move endpoints to Rage gradually. The gem is installed with gem install rage-rb, and rage new creates an application; the database adapter is chosen at creation with the -d option, from MySQL, Trilogy, PostgreSQL or SQLite.

## Worth knowing

The background job queue runs inside the web server process rather than in a separate worker, so the server process has to stay running for queued work to finish. The Rails integration guide starts Rage in production with a Docker command that binds to all interfaces.
