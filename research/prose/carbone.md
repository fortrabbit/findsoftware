Carbone is a document generator: it analyzes a template, injects JSON data into it and exports the result in the template's own format or converted to another one. The on-premise distribution runs as a single executable that embeds the template engine, an API server with a REST API and Carbone Studio, a template editor. It comes as a standalone binary or as a Docker image, and the [introduction to on-premise installation](https://carbone.io/documentation/developer/on-premise-installation/introduction.html) describes both. An npm package embeds the generator in a Node.js application.

PDF output needs LibreOffice on the system, and the full Docker image bundles it. Without LibreOffice, the npm package still generates formats that match the template type. The on-premise REST API is the same as the one on [Carbone Cloud](https://carbone.io/pricing.html), the hosted service.

## Worth knowing

The license does not allow offering Carbone, or a wrapper around it, as a hosted document generation service outside a product of the user's own. Authentication is disabled by default on on-premise deployments. The npm package is one major version behind the on-premise distribution.
