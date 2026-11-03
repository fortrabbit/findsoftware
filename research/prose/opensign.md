OpenSign is an electronic signature application for PDF documents. Besides the web application, it has a REST API and webhooks, so an application can create documents, send signature requests and track them. The README lists multi-signer support with signing links, templates, and audit trails with a completion certificate. The Docker install downloads a compose file and a Caddyfile for the operator's own domain, and the stack includes a MongoDB container.

Qik Innovations Private Limited develops and maintains OpenSign and runs a hosted service at app.opensignlabs.com next to the self-hosted build.

## Worth knowing

The default MongoDB container does not keep data across restarts unless the operator supplies a connection URL for a persistent database. The docs warn that the default configuration does not enable MongoDB authentication, so port 27017 must not be exposed to the internet. The repository is AGPLv3, and one directory of the repository is under a separate license that the LICENSE file does not name.
