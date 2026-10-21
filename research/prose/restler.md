Restler is a PHP framework for building REST API servers. Developers write ordinary PHP classes, and the public methods of those classes become URLs. Luracast maintains the project.

With a traditional web server, PHP-FPM starts Restler for each request, as the [README's production deployment section](https://github.com/Luracast/Restler/blob/6.0.3/README.md) describes. The README also describes a second option: a persistent server process under the Swoole or OpenSwoole extension, which keeps connections open and includes its own HTTP server.

## Worth knowing

The Swoole and OpenSwoole mode is a long-running process, so it needs a host that keeps a process running.
