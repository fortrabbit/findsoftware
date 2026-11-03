---
id: temporal
name: Temporal
urls:
  home: https://temporal.io
  repository: https://github.com/temporalio/temporal
  docs: https://docs.temporal.io
  pricing: https://temporal.io/pricing
category:
  - backend
description: Open-source durable execution platform whose server runs workflows and retries failed steps, self-hosted or as Temporal Cloud.
status: active
maintainer: Temporal Technologies Inc.
maintainerType: company
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-02
githubStargazers: 24158
contributors: 308
social:
  x: https://twitter.com/temporalio
  forum: https://community.temporal.io
  youtube: https://www.youtube.com/temporalio
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://temporal.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://temporal.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/temporalio/temporal
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.temporal.io
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/temporalio/temporal/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docs.temporal.io/self-hosted-guide
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://docs.temporal.io/self-hosted-guide
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/temporalio/temporal
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.temporal.io/self-hosted-guide/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.temporal.io/self-hosted-guide/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.temporal.io/self-hosted-guide/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.temporal.io/self-hosted-guide/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.temporal.io/self-hosted-guide/deployment
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.temporal.io/self-hosted-guide/embedded-server
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.temporal.io/self-hosted-guide/deployment
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/temporalio/temporal
    checkedAt: 2026-11-03
  - field: urls
    url: https://temporal.io/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/temporalio/temporal/releases/tag/v1.32.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/temporalio/temporal/releases/tag/v1.32.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/temporalio/temporal/releases/tag/v0.10.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/temporalio/temporal
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/temporalio/temporal
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Temporal is a durable execution platform: its server runs workflows and retries failed steps. The server is built from Go binaries that the [deployment guide](https://docs.temporal.io/self-hosted-guide/deployment) describes running as separate services, through Docker Compose, a Helm chart on Kubernetes, or systemd units. Production deployments keep persistence in MySQL, PostgreSQL or Cassandra, and the advanced visibility store in Elasticsearch or OpenSearch. The Temporal Web UI runs alongside the service for viewing workflow executions. Temporal Technologies Inc. maintains the project, and the company also offers the Temporal Service as a hosted product, Temporal Cloud.

## Worth knowing

The docs say a self-hosted Temporal Service should be secured like a database and kept off the public internet. Self-hosted installs have no role-based access control or audit logging out of the box; the SSO and user roles that the docs describe belong to Temporal Cloud. The `temporal server start-dev` command starts a development server that the docs say is not meant for production.
