Langfuse is a platform for tracing, evaluating and improving LLM applications and agents. Applications send traces through native Python and JavaScript SDKs. Two application containers make up a self-hosted install: Langfuse Web serves the UI and APIs, and Langfuse Worker processes events asynchronously. The web component connects to PostgreSQL, Redis or Valkey, ClickHouse and S3 or blob storage. The self-hosting guide covers [Docker Compose](https://langfuse.com/self-hosting/docker-compose) on one machine, a [Helm chart](https://langfuse.com/self-hosting/kubernetes-helm) for Kubernetes and a Terraform module for AWS.

Sign-in can use OAuth and SSO providers, each configured through environment variables.

## Worth knowing

The core is MIT licensed. Some add-on features need an Enterprise license key, and the directory holding those parts carries its own Enterprise License. The hosted option, Langfuse Cloud, runs the same codebase as the self-hosted product.
