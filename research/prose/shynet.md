Shynet is web analytics software written in Python on Django. A site is added as a service in the dashboard, which produces a tracking script to place on the pages; visitors without JavaScript are counted through a 1x1 tracking pixel. The README describes the tool as working without cookies and as keeping visitor data on the operator's own server. Each instance runs as a long-lived web server, and the documented deployments are a Docker image, Docker Compose, Heroku and Render. Data is stored in PostgreSQL or SQLite. The dashboard supports several users: administrators can share services with other users, and the dashboard data can be read through an API that takes a user token.

## Worth knowing

The [usage guide](https://github.com/milesmcc/shynet/blob/master/GUIDE.md) says Heroku's free Postgres add-on is unlikely to support an instance that records more than a few hundred requests per day. Every tracked page needs the script tag that points at the instance.
