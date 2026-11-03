LiteLLM is an AI gateway and LLM proxy written in Python. It puts many model providers behind one OpenAI-compatible API, and its homepage lists spend tracking, auth and guardrails among what the gateway adds. Self-hosting starts with a Docker Compose file that brings up the gateway and a Postgres container, and the [Docker quickstart](https://docs.litellm.ai/docs/proxy/docker_quick_start) also starts the single image with docker run. The gateway has a built-in Admin UI. The same project ships a Python SDK, installed with uv, for applications that call model providers directly, and the [production deployment guide](https://docs.litellm.ai/docs/proxy/deploy) covers a Helm chart on EKS, GKE and AKS.

Container images are published to GitHub Container Registry.

## Worth knowing

The core is MIT-licensed. The enterprise/ directory of the repository carries its own license, and the company sells an Enterprise tier that adds SSO, RBAC, audit logs and SCIM on top of the same open-source core. A Rust AI gateway is in beta beside the Python proxy.
