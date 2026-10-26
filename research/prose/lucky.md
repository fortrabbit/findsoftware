Lucky is a web framework written in Crystal for HTML pages, JSON APIs and single-page frontends. Its homepage lists generators, optional built-in authentication and a frontend setup with Bun, Webpack or Vite. Requests are handled by action classes that map each route to its response, and the database layer is built from model and query classes.

A new project starts with the Lucky command-line tool and `lucky init`. The [deployment guides](https://luckyframework.org/guides/deploying/heroku) cover Heroku, Fly.io, Dokku and an Ubuntu server.

## Worth knowing

An app is a long-lived process rather than a set of static files. The Ubuntu guide runs the app under a systemd unit, so the host has to keep that process running, and static hosting does not fit the framework's server-side model.
