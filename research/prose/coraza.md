Coraza is a web application firewall library written in Go. It runs rule sets written in SecLang, the rule language of ModSecurity, including the OWASP Core Rule Set. At its core it is a library: a Go program imports it, and the Coraza Project maintains integrations that place it inside an existing server or proxy, among them Caddy, Envoy through proxy-wasm, HAProxy, Traefik and NGINX through a C library.

The OWASP Foundation maintains the project as an OWASP Production Project. Development happens in the public GitHub repository, and questions go to GitHub Discussions.

## Worth knowing

The integrations do not share one stability status. The docs introduction and the README disagree on the HAProxy and Traefik integrations, and the Caddy plugin is marked as needing a maintainer. A reader choosing an integration should check its own repository and status before relying on it.

The README lists a Linux distribution or macOS as prerequisites and says Windows is not supported yet.
