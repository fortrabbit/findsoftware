Outerbase Studio is a database client that runs in the browser and connects to SQLite and LibSQL-based databases such as Turso, rqlite and Cloudflare D1. The [README](https://github.com/outerbase/studio/blob/master/README.md) lists MySQL and PostgreSQL as beta connections with limited features. The project is a web app that can be deployed to Cloudflare Workers from its repository with a deploy button, and a desktop build wraps the same web version. The desktop build is the route for drivers that a browser cannot run, such as MySQL and PostgreSQL. Outerbase, Inc. maintains the project, as its [terms page](https://outerbase.com/terms/) states.

## Worth knowing

The beta status of the MySQL and PostgreSQL connections is stated in the README, so a reader who needs those engines should check the feature list before choosing it. The latest tagged release is older than the most recent commits on the default branch, so a reader who needs the newest code has to build from the repository.
