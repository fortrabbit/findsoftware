Trigger.dev is an open-source platform for building durable AI agents and workflows in TypeScript. Its managed cloud service runs the tasks, and the same open-source code can be self-hosted with Docker Compose or with the official Helm chart for Kubernetes. A self-hosted instance runs a webapp that includes the dashboard, and a worker that executes tasks. The self-hosted stack uses PostgreSQL, Redis and ClickHouse.

## Worth knowing

The self-hosting docs state that the self-hosted version is functionally the same as the cloud service with some exceptions. Warm starts, auto-scaling, checkpoints and dedicated support are listed as cloud features. The SDK package is published under the MIT license, which differs from the Apache-2.0 license of the platform code.
