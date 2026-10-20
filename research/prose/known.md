Known is a publishing platform for groups and individuals, where any number of users post blog posts and status updates to one shared site. It is written in PHP and keeps its content in MySQL, MariaDB or MongoDB, behind a web server with URL rewriting. It installs with Composer or from a release archive, and the project also runs Known as a hosted service at withknown.com.

## Worth knowing

By default Known processes events such as Webmention pings and ActivityPub deliveries inside the web request that triggered them. An asynchronous queue moves that work into a background worker, which the README says is required for ActivityPub. The worker must stay running, started by systemd or once a minute by cron.
