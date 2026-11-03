---
id: kestra
name: Kestra
urls:
  home: https://kestra.io
  repository: https://github.com/kestra-io/kestra
  docs: https://kestra.io/docs
  pricing: https://kestra.io/pricing
  plugins: https://kestra.io/plugins
category:
  - backend
description: Open-source orchestration platform for data, AI and infrastructure workflows, defined in YAML and run on a server with a web UI.
status: active
maintainer: Kestra Technologies
firstRelease: 2020
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
  - mysql
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-27
githubStargazers: 30133
contributors: 429
social:
  x: https://twitter.com/kestra_io
  bluesky: https://web-cdn.bsky.app/profile/kestra.io
  subreddit: https://www.reddit.com/r/kestra_io/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://kestra.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: urls
    url: https://kestra.io/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://kestra.io/privacy-policy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/kestra-io/kestra/tree/v0.1.0
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: runtime
    url: https://kestra.io/docs/administrator-guide/requirements
    checkedAt: 2026-11-03
  - field: category
    url: https://kestra.io/docs/architecture
    checkedAt: 2026-11-03
  - field: databases
    url: https://kestra.io/docs/administrator-guide/requirements
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kestra.io/docs/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kestra.io/docs/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kestra.io/docs/installation
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://kestra.io/docs/architecture
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: urls
    url: https://kestra.io/pricing
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/kestra-io/kestra
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/kestra-io/kestra/releases/tag/v2.0.8
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/kestra-io/kestra/releases/tag/v2.0.8
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kestra is an orchestration platform for workflows declared in YAML. It has a web UI and a server that keeps running. A standalone deployment runs every server role as a thread in one process, and a distributed deployment runs each role as its own process.

A webhook trigger gives a flow a URL that an external application can call over HTTP to start an execution. Official SDKs for Java, Python, JavaScript/TypeScript and Go cover the API. The [requirements page](https://kestra.io/docs/administrator-guide/requirements) lists PostgreSQL or MySQL for the queue and repository. Docker, Docker Compose, a Helm chart for Kubernetes and a standalone executable JAR are the documented install routes.

## Worth knowing

Each webhook URL requires a secret key. Single sign-on, RBAC and LDAP are Enterprise Edition features, and Kestra Cloud is the managed service for the Enterprise Edition. A standalone server needs at least 4 GiB of memory and 2 vCPUs, and script tasks need Docker-in-Docker, which AWS ECS Fargate does not support.
