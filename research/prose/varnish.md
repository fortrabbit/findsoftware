Varnish Cache is an HTTP accelerator that sits between clients and an origin server. It answers from memory when it holds a cached response and forwards other requests to the origin, and it has native TLS support.

The project describes itself as a distribution of the Vinyl Cache project, with extra modules and tooling layered on top, and the repository's LICENSE file now names the Vinyl Cache Project. The [install guide](https://www.varnish.org/docs/install-guide/install-debian-ubuntu/) covers Debian and Ubuntu packages, and the homepage also names RPM packages, a Docker image and a Helm chart for Kubernetes. Varnish Software AB, headquartered in Stockholm, Sweden, maintains the distribution.

## Worth knowing

On package installs the varnishd process is managed by systemd, so it runs as a long-lived service.
