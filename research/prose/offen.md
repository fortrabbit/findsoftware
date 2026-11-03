Offen Fair Web Analytics is web analytics for operators who want usage statistics for their own websites. Visitors opt in through a consent banner, whose colors, shape and font can be customized. The instance runs on the operator's server and is served over HTTPS, and it has an Auditorium interface for operators and for the users whose data it holds. The [installation requirements](https://docs.offen.dev/running-offen/installation-requirements/) say the process must always be running and restart on failure.

The instance is installed from a single binary, a Docker image, a deb package for Ubuntu and Debian, or through deploy routes for Heroku, Uberspace and YunoHost. It stores data in SQLite, MySQL or PostgreSQL. The pages place the tracking script on each website with a script tag that points to the instance, and recommend a subdomain of the website's own domain for the instance. The project describes usage data as encrypted end to end and deleted after six months.

## Worth knowing

The docs advise against running the instance behind a reverse proxy.
