FrankenPHP is an application server for PHP written in Go and built on top of Caddy. It embeds the official PHP executor in the Caddy web server, so PHP runs inside the server process. Kévin Dunglas maintains the project. The binaries bundle a PHP build, so the PHP version ships with the server.

## Worth knowing

In [worker mode](https://frankenphp.dev/docs/worker/) the application stays in memory between requests instead of starting fresh for each one.
