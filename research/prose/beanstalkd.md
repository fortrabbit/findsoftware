beanstalkd is a work queue server written in C. A producer puts a job into the queue, and a worker reserves it, runs it and deletes it, so time-consuming tasks can run outside the request that created them. The project's own description says it was originally designed to reduce the latency of page views in high-volume web applications. The server has no configuration file and takes only a handful of command-line options, and it starts listening on the address and port given on the command line.

## Worth knowing

beanstalkd is a long-running process that listens for connections, so it belongs on a host that keeps services running. The [download page](https://beanstalkd.github.io/download.html) lists the packages that ship it, and the project's own [repository](https://github.com/beanstalkd/beanstalkd) holds the files for running it as a background service.
