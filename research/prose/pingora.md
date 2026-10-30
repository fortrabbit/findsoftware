Pingora is a framework written in Rust for network services, and the README describes APIs for building HTTP proxies. The quick start builds a load balancer with it. Cloudflare, Inc. maintains the project in its GitHub organization.

An application adds the pingora crate with cargo, Rust's package manager. The program is a server process that hosts one or more services and compiles to a binary. The [daemonization guide](https://github.com/cloudflare/pingora/blob/main/docs/user_guide/daemon.md) describes running it as a daemon.

## Worth knowing

The README marks the caching APIs as experimental and says they are highly volatile. Building needs Clang and Perl 5 installed on the system, according to the README.
