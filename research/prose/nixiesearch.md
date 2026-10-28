Nixiesearch is a search server that uses Apache Lucene for its indexes and can keep them in S3-compatible object storage, a local directory or memory. A standalone deployment runs the whole server in one process, started from the [quickstart](https://nixiesearch.ai/quickstart/) Docker image. A distributed deployment splits the work: searcher pods load the indexes from S3 and answer queries, while one indexer pod builds the indexes and uploads them, as the [deployment overview](https://nixiesearch.ai/deployment/distributed/overview/) describes. The index schema and the embedding models are declared in a YAML config file, and the server answers queries over HTTP, with vector search among its index types.

## Worth knowing

The searchers can also run as AWS Lambda functions, but the Lambda deployment covers searchers only; the indexer runs separately on Kubernetes, ECS or EC2. Local ONNX embedding inference is not recommended on Lambda because the CPU is limited, so embeddings there come from an API provider.

Usage telemetry is sent by default. The help pages name two ways to switch it off: the NIXIESEARCH_CORE_TELEMETRY environment variable and the core.telemetry setting in the config file.
