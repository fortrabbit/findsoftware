Keepalived is routing software written in C that adds load balancing and high availability to Linux systems. Its load balancing builds on the IPVS kernel module, with health checkers that keep each server pool current. Its high availability uses the VRRP protocol for router failover.

Keepalived runs as a daemon, and the installation page shows it enabled as a systemd service that starts at boot. Most Linux distributions ship a package. The download page says the project itself provides no binary packages, and the source is compiled with configure and make.

## Worth knowing

Keepalived's pages describe load balancing for server pools and failover for routers. They do not name websites or web applications.
