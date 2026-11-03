GoAccess reads a web server's access log and reports HTTP statistics for the person who runs the server. It runs in a terminal by default. It can also write a static HTML report, and JSON and CSV output, and it reads several log formats, among them Apache, Nginx, CloudFront and Caddy.

The static HTML report is a file that the creator's own web server has to serve, because GoAccess does not serve it. The real-time HTML mode is different: GoAccess runs its own WebSocket server and pushes new data to the open report, and the download page asks the operator to open port 7890 for it. The install routes are a source tarball built with configure and make, distribution packages, Homebrew, a Docker image and a build from the GitHub repository.

## Worth knowing

The get-started page says the operator may want to configure the web server to restrict access to the report. The real-time mode keeps a process running on the server while it is in use.
