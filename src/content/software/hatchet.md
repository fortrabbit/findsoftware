---
id: hatchet
name: Hatchet
urls:
  home: https://hatchet.run
  repository: https://github.com/hatchet-dev/hatchet
  docs: https://docs.hatchet.run/
  pricing: https://hatchet.run/pricing
category:
  - backend
description: Orchestration engine for background tasks, durable workflows and AI agents, self-hostable with Docker or Helm and also offered as Hatchet Cloud.
status: active
maintainer: Hatchet Technologies, Inc.
maintainerType: company
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker, hatchet-lite single image
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-26
githubStargazers: 8219
contributors: 92
social:
  x: https://x.com/hatchet_dev
  discord: https://discord.com/invite/ZMeUafwH89
  forum: https://github.com/hatchet-dev/hatchet/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hatchet.run/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hatchet-dev/hatchet
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.hatchet.run/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://hatchet.run/terms
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.hatchet.run/
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.hatchet.run/v1/webhooks
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/hatchet-dev/hatchet/languages
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.hatchet.run/self-hosting/configuration-options
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.hatchet.run/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hatchet.run/self-hosting/docker-compose
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hatchet.run/self-hosting/docker-compose
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hatchet.run/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hatchet.run/self-hosting
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hatchet-dev/hatchet
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.hatchet.run/
    checkedAt: 2026-11-03
  - field: urls
    url: https://hatchet.run/pricing
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.hatchet.run/self-hosting
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.hatchet.run/self-hosting
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/hatchet-dev/hatchet/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hatchet-dev/hatchet/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/hatchet-dev/hatchet/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/hatchet-dev/hatchet
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/hatchet-dev/hatchet/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hatchet is an orchestration engine for background tasks, durable workflows and AI agents, as its [documentation](https://docs.hatchet.run/) describes. It supports applications written in Python, TypeScript, Go and Ruby, and the self-hosted control plane has an API server with REST endpoints, an engine with a gRPC API, a PostgreSQL database and a dashboard. RabbitMQ is an optional message queue for the same control plane. Workers connect to the control plane to execute tasks, and each tenant has user roles.

The [self-hosting guide](https://docs.hatchet.run/self-hosting) lists the routes: a single hatchet-lite image, Docker Compose for production, a Helm chart on Kubernetes, and the Hatchet CLI for a local instance, which wraps hatchet-lite.

## Worth knowing

Hatchet Cloud is the same platform run by the vendor. Single sign-on through SAML is listed on the Custom plan of the pricing page.
