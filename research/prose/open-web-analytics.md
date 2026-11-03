Open Web Analytics is a web analytics framework written in PHP. A JavaScript tracker sends visits from websites and applications to a server that stores them in a MySQL database and reports on them through a web interface. The packaged release is unpacked into a directory the web server can reach, and an install wizard creates the database tables.

## Worth knowing

The install wizard, the reporting interface and the JavaScript tracker are all served from the same directory, so that directory has to be reachable from browsers. A cron entry runs the periodic maintenance, and the [installation guide](https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Installation) says that without it no scheduled job runs.
