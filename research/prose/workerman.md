Workerman is a PHP framework for building network servers. It handles TCP, UDP and UNIX socket connections, HTTP and HTTPS, WebSocket and WSS, and custom protocols. It is installed with Composer, and the [installation guide](https://www.workerman.net/doc/workerman/install/install.html) gives the command. The project's pages are in Chinese.

## Worth knowing

Workerman runs as a long-lived process. The [start and stop page](https://www.workerman.net/doc/workerman/install/start-and-stop.html) describes a daemon mode that keeps running after the terminal closes, so a host has to allow a PHP process to keep running.

On Linux and macOS the requirements page lists the pcntl and posix PHP extensions; for the Windows version it lists no extensions.
