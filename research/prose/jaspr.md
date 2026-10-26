Jaspr is a Dart framework for building websites with client-side, server-side and static rendering. A site picks one of three rendering modes: static builds it to files at build time, server runs a Dart HTTP server that renders each request, and client mode leaves rendering to the browser. The [quickstart](https://docs.jaspr.site/quick_start) installs the jaspr_cli package from pub.dev, where the framework is published as jaspr, and creates the project with the jaspr create command.

## Worth knowing

A server-mode site is a Dart process that keeps running, so it needs a host that runs one. The [deployment guide](https://docs.jaspr.site/dev/deploying) lists static hosts for static output, and Firebase Hosting and GitHub Pages are named there as examples.
