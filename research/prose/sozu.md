Sōzu is a reverse proxy written in Rust that routes HTTP and TCP traffic to backend servers. It accepts configuration changes at runtime without a reload, and it upgrades itself while still processing requests, so the proxy stays up during updates. The [repository](https://github.com/sozu-proxy/sozu) ships pre-built Linux binaries with each tagged release, a Docker image on Docker Hub, and a source build with cargo. Clever Cloud SAS, a company in Nantes, France, maintains the project.

## Worth knowing

The main program is licensed under AGPL-3.0 and the command library under LGPL-3.0. The project's about page says a business building on Sōzu should contribute back or agree a separate business arrangement with Clever Cloud.
