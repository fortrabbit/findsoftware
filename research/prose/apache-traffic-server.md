Apache Traffic Server is a caching proxy server from The Apache Software Foundation. The [getting-started guide](https://docs.trafficserver.apache.org/en/latest/getting-started/index.en.html) describes it as a server for forward and reverse proxying of HTTP and HTTPS traffic, and it can run in either or both modes at once. The `trafficserver` command starts the set of processes that handle requests and monitor the system, and a stop subcommand ends them. The [installation guide](https://docs.trafficserver.apache.org/en/latest/admin-guide/installation/index.en.html) covers building from the source archive or a git clone with cmake.

## Worth knowing

The project ships no binary downloads, so a host needs a C++ build toolchain and the build dependencies the installation guide lists. The project also publishes a long-term support line beside the current major version.
