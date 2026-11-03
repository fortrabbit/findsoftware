---
id: poeticmetric
name: PoeticMetric
urls:
  home: https://poeticmetric.com
  repository: https://forgejo.localherd.org/poeticmetric/poeticmetric
  docs: https://poeticmetric.com/docs/open-source/self-hosting
  pricing: https://poeticmetric.com/pricing
category:
  - analytics
description: Open source website analytics tool that uses no cookies, offered as a managed service on poeticmetric.com or self-hosted with Docker Compose.
status: active
maintainer: WebGazer, Inc.
maintainerType: company
firstRelease: 2025
hqCountry: US
language: javascript
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: Docker Compose
licenseModel: open-source
license: AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-02-27
githubStargazers: 268
contributors: 1
social:
  mastodon: https://fosstodon.org/@poeticmetric
  forum: https://github.com/th0th/poeticmetric/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://poeticmetric.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/th0th/poeticmetric
    checkedAt: 2026-11-03
  - field: urls
    url: https://poeticmetric.com/docs/open-source/self-hosting
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://poeticmetric.com/terms-of-service
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://poeticmetric.com/terms-of-service
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/th0th/poeticmetric/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/th0th/poeticmetric/languages
    checkedAt: 2026-11-03
  - field: language
    url: https://poeticmetric.com/docs/open-source/technical-architecture
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://poeticmetric.com/docs/open-source/technical-architecture
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://poeticmetric.com/docs/open-source/technical-architecture
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://poeticmetric.com/privacy-policy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://poeticmetric.com/docs/open-source/self-hosting
    checkedAt: 2026-11-03
  - field: databases
    url: https://poeticmetric.com/docs/open-source/technical-architecture
    checkedAt: 2026-11-03
  - field: databases
    url: https://poeticmetric.com/docs/open-source/technical-architecture
    checkedAt: 2026-11-03
  - field: databases
    url: https://poeticmetric.com/docs/open-source/technical-architecture
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://poeticmetric.com/docs/open-source/technical-architecture
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/th0th/poeticmetric/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/th0th/poeticmetric/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://poeticmetric.com/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://forgejo.localherd.org/api/v1/repos/poeticmetric/poeticmetric/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://forgejo.localherd.org/api/v1/repos/poeticmetric/poeticmetric/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://forgejo.localherd.org/api/v1/repos/poeticmetric/poeticmetric/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/th0th/poeticmetric
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/th0th/poeticmetric/contributors?per_page=100
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

PoeticMetric is a web analytics tool that does not use cookies. It is offered as a managed service on poeticmetric.com and can be self-hosted with Docker Compose. The backend is a Go application with a REST API, a worker and a scheduler, and the frontend is a Next.js application served by NGINX in the official Docker image. PostgreSQL holds accounts and site data, ClickHouse holds the analytics data and Redis holds transient data. The project names a Forgejo instance as its original repository, and a GitHub repository mirrors it.

## Worth knowing

The self-hosted services keep running under Docker Compose, so the host has to stay on. The managed service is contracted with WebGazer, Inc. under its terms of service.
