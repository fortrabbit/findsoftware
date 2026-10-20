Comet is a PHP framework for REST APIs, CRUDs, admin panels and microservices. The README says it is based on components from Guzzle, Slim and Workerman, and it is installed with Composer.

A Comet app starts its own HTTP server from the command line, and that server keeps running to answer requests. The [README](https://github.com/gotzmann/comet/blob/master/README.md) is the project's documentation. It also describes putting Nginx in front of a Comet app as a reverse proxy or load balancer.

## Worth knowing

Because a Comet app is a long-running process that listens on its own host and port, it needs a host that can run such a process.
