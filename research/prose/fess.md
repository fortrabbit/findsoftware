Fess is an enterprise search server written in Java. It has a built-in crawler, a browser-based administration UI and a search UI. Crawled documents are indexed in OpenSearch, and the project's own pages state that Fess is built on OpenSearch. Fess runs as a service that depends on OpenSearch being started first. It is installed from a ZIP, RPM or DEB package, or run as a Docker image. The code is licensed under Apache-2.0 and maintained by CodeLibs, Inc.

## Worth knowing

The installation guide says Fess does not bundle a search engine and that every installation method needs a separate OpenSearch server. The README says the Docker images bundle OpenSearch, so the two statements differ for Docker.

A commercial version, N2 Search from N2SM, is offered beside the open-source product, with paid support.
