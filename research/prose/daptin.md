Daptin is a self-hosted application server written in Go. It runs APIs, identity, permissions, files and automation from a data schema. Each table in the schema becomes stored data with a JSON:API resource, and GraphQL queries and actions are optional. Data is kept in SQLite, MySQL, MariaDB or PostgreSQL. Sites and subsites, routed by host or path, are served with Go templates, and the Subsites page describes hosting static websites from one instance. The documented install paths are a Docker image, Docker Compose, a Linux binary, and a Kustomize deployment guide for Kubernetes. The production checklist expects the process to run under a process supervisor.

## Worth knowing

The pages read describe Daptin as an application server and do not call it a headless CMS, although the repository carries that topic. The README points new users to a Getting Started Guide on the project's wiki.
