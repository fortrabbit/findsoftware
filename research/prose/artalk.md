Artalk is a comment system for blogs, websites and web applications, made of a Go server and a browser client. The server is installed from a Docker image, a binary, a Linux distribution package, a `go install` command or a build from source. The client is added to a page as a script or as the npm package `artalk`. Comments are kept in SQLite by default, and MySQL, PostgreSQL or SQL Server can be configured instead. Administrators manage comments and sites from a dashboard reached through the comment widget's sidebar, and several administrator accounts can be set up for multiple sites. The project's documentation describes importing comments from Typecho, WordPress, Disqus, Commento, Waline and Twikoo.

## Worth knowing

The server runs as a long-running process, so the host has to keep it running.
