River is a reverse proxy application written in Rust and built on [Pingora](https://github.com/cloudflare/pingora), the Rust network services framework from Cloudflare. The project page describes River as a Prossimo initiative, and the Internet Security Research Group maintains it. The application runs as a binary that reads a configuration file in KDL format. Its command line can daemonize the process after startup, and the process otherwise runs until it is stopped.

## Worth knowing

The README says there is no expectation of stability until further notice. The project page says development is paused while the team works on other projects. The project publishes prebuilt binaries for installation and no registry package.
