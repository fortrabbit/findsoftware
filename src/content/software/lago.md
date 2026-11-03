---
id: lago
name: Lago
urls:
  home: https://www.getlago.com
  repository: https://github.com/getlago/lago
  docs: https://getlago.com/docs
  pricing: https://getlago.com/pricing
category:
  - e-commerce
description: Open-source billing server for metering usage, managing subscriptions and invoicing, which apps call through its API.
status: active
maintainer: Get Lago Corp.
maintainerType: company
firstRelease: 2022
language: go
runtime:
  - ruby
hosting:
  - ruby
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: AGPL-3.0, Commercial
currentMajor: "1"
latestReleaseDate: 2026-11-02
githubStargazers: 10752
contributors: 49
social:
  x: https://x.com/getlago
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.getlago.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/getlago/lago
    checkedAt: 2026-11-03
  - field: urls
    url: https://getlago.com/docs
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/getlago/lago/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.getlago.com/privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/getlago/lago
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/getlago/lago
    checkedAt: 2026-11-03
  - field: license
    url: https://getlago.com/docs/guide/lago-self-hosted/overview
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/getlago/lago
    checkedAt: 2026-11-03
  - field: license
    url: https://getlago.com/docs/guide/lago-self-hosted/overview
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/getlago/lago/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/getlago/lago/releases/tag/v1.56.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/getlago/lago
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/getlago/lago
    checkedAt: 2026-11-03
  - field: databases
    url: https://getlago.com/docs/guide/lago-self-hosted/docker
    checkedAt: 2026-11-03
  - field: databases
    url: https://getlago.com/docs/guide/lago-self-hosted/docker
    checkedAt: 2026-11-03
  - field: databases
    url: https://getlago.com/docs/guide/lago-self-hosted/docker
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://getlago.com/docs/guide/lago-self-hosted/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://getlago.com/docs/guide/lago-self-hosted/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://getlago.com/docs/guide/lago-self-hosted/overview
    checkedAt: 2026-11-03
  - field: runtime
    url: https://getlago.com/docs/guide/lago-self-hosted/kubernetes
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://getlago.com/docs/guide/lago-self-hosted/kubernetes
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://getlago.com/docs/guide/lago-self-hosted/kubernetes
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://getlago.com/docs/llms.txt
    checkedAt: 2026-11-03
  - field: urls
    url: https://getlago.com/pricing
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Lago is a billing server for usage-based and subscription pricing. It meters usage events and produces subscriptions and invoices, and applications call its REST API to do that, directly or through one of the client libraries. The back end is a Rails API with a web interface in front of it. The [self-hosting overview](https://getlago.com/docs/guide/lago-self-hosted/overview) describes two install routes, Docker Compose and the official Helm charts for Kubernetes.

The Docker stack runs a front application, the API, its workers, a clock worker, Postgres, Redis and a PDF service. Postgres stores the application data, Redis serves as the queue for asynchronous tasks, and ClickHouse can be enabled as the event store for new organizations.

## Worth knowing

The open source edition is licensed under AGPL-3.0. A premium edition with features and support that differ from the open source edition is offered under a commercial license, and custom roles are a premium add-on. Lago Cloud is the hosted option for teams that do not want to operate the stack.
