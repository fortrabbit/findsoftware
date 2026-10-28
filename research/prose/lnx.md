lnx is an open-source search server written in Rust. The [README](https://github.com/lnx-search/lnx/blob/0.9.0/README.md) describes it as a deployment of the tantivy search engine that is reached through a REST API, built on tokio, hyper and tantivy. The [homepage](https://lnx.rs) describes its queries as typo tolerant and names 17 latin languages as supported.

The quick start runs the server from a Docker image on port 8000. The [API documentation](https://docs.lnx.rs) is an OpenAPI reference that is generated from the server's own OpenAPI document.

## Worth knowing

The README marks the repository's default branch as the active development branch and asks readers to use the latest stable release instead. Chinese, Japanese and Korean are listed on the homepage as planned, not supported.
