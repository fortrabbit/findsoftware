Apache HTTP Server, usually called httpd, is a web server maintained by The Apache Software Foundation. The [documentation](https://httpd.apache.org/docs/2.4/) describes it as a server for modern operating systems, and its modules add reverse proxying through [mod_proxy](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html) and load balancing through [mod_proxy_balancer](https://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html). On Unix the program runs as a daemon that keeps running in the background to handle requests. The project publishes source code; the [installation guide](https://httpd.apache.org/docs/2.4/install.html) covers building it on Unix-like systems, and operating system distributions ship their own packages.

## Worth knowing

The daemon model means a host has to allow a long-running server process, not only static files. The 2.2 line is end-of-life; the 2.4 line is the current one.
