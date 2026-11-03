Kestra is an orchestration platform for workflows declared in YAML. It has a web UI and a server that keeps running. A standalone deployment runs every server role as a thread in one process, and a distributed deployment runs each role as its own process.

A webhook trigger gives a flow a URL that an external application can call over HTTP to start an execution. Official SDKs for Java, Python, JavaScript/TypeScript and Go cover the API. The [requirements page](https://kestra.io/docs/administrator-guide/requirements) lists PostgreSQL or MySQL for the queue and repository. Docker, Docker Compose, a Helm chart for Kubernetes and a standalone executable JAR are the documented install routes.

## Worth knowing

Each webhook URL requires a secret key. Single sign-on, RBAC and LDAP are Enterprise Edition features, and Kestra Cloud is the managed service for the Enterprise Edition. A standalone server needs at least 4 GiB of memory and 2 vCPUs, and script tasks need Docker-in-Docker, which AWS ECS Fargate does not support.
