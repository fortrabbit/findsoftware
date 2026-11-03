---
id: langfuse
name: Langfuse
urls:
  home: https://langfuse.com
  repository: https://github.com/langfuse/langfuse
  docs: https://langfuse.com/docs
  pricing: https://langfuse.com/pricing
category:
  - analytics
description: Open-source platform for tracing, evaluating and monitoring LLM applications, sent from application code through SDKs and OpenTelemetry.
status: active
maintainer: ClickHouse, Inc.
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: MIT, Enterprise License
currentMajor: "4"
latestReleaseDate: 2026-10-29
githubStargazers: 36931
contributors: 226
social:
  x: https://x.com/langfuse
  discord: https://langfuse.com/discord
  forum: https://github.com/orgs/langfuse/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://langfuse.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/langfuse/langfuse
    checkedAt: 2026-11-03
  - field: urls
    url: https://langfuse.com/docs
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/langfuse/langfuse/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/langfuse/langfuse/blob/v4.72.0/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://langfuse.com
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/langfuse/langfuse
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/langfuse/langfuse/blob/v4.72.0/package.json
    checkedAt: 2026-11-03
  - field: license
    url: https://langfuse.com/self-hosting/license-key
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/langfuse/langfuse/blob/v4.72.0/ee/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/langfuse/langfuse/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/langfuse/langfuse/releases/tag/v4.72.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/langfuse/langfuse
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/langfuse/langfuse
    checkedAt: 2026-11-03
  - field: databases
    url: https://langfuse.com/self-hosting
    checkedAt: 2026-11-03
  - field: databases
    url: https://langfuse.com/self-hosting
    checkedAt: 2026-11-03
  - field: databases
    url: https://langfuse.com/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://langfuse.com/self-hosting/docker-compose
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://langfuse.com/self-hosting/kubernetes-helm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://langfuse.com/self-hosting/deployment/aws
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://langfuse.com/self-hosting/docker-compose
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://langfuse.com/self-hosting
    checkedAt: 2026-11-03
  - field: urls
    url: https://langfuse.com/pricing
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Langfuse is a platform for tracing, evaluating and improving LLM applications and agents. Applications send traces through native Python and JavaScript SDKs. Two application containers make up a self-hosted install: Langfuse Web serves the UI and APIs, and Langfuse Worker processes events asynchronously. The web component connects to PostgreSQL, Redis or Valkey, ClickHouse and S3 or blob storage. The self-hosting guide covers [Docker Compose](https://langfuse.com/self-hosting/docker-compose) on one machine, a [Helm chart](https://langfuse.com/self-hosting/kubernetes-helm) for Kubernetes and a Terraform module for AWS.

Sign-in can use OAuth and SSO providers, each configured through environment variables.

## Worth knowing

The core is MIT licensed. Some add-on features need an Enterprise license key, and the directory holding those parts carries its own Enterprise License. The hosted option, Langfuse Cloud, runs the same codebase as the self-hosted product.
