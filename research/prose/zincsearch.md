ZincSearch is a search engine written in Go and distributed as a single binary that runs a full-text indexing server. It takes data through an API compatible with Elasticsearch's ingestion calls, and its web UI for querying data is embedded in the binary. The index is stored on disk.

The [installation guide](https://zincsearch-docs.zinc.dev/installation/) covers binary downloads, a Homebrew tap, a Docker image and a Helm chart for Kubernetes.

## Worth knowing

The README calls ZincSearch a lighter alternative to Elasticsearch, says Kibana is not supported, and points users who need log search to OpenObserve, a separate project.
