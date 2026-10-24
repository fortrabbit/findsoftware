---
id: flagsmith
name: Flagsmith
urls:
  home: https://www.flagsmith.com
  repository: https://github.com/Flagsmith/flagsmith
  docs: https://docs.flagsmith.com/
  pricing: https://www.flagsmith.com/pricing
category:
  - dev-tool
description: Open-source feature flag and remote config platform, available self-hosted or as a cloud service, with SDKs for web, mobile and server-side apps.
status: active
maintainer: Bullet Train Ltd.
maintainerType: company
language: python
runtime:
  - python
  - node
runtimeMin: python 3.11
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker compose up with docker-compose.yml from the repository
licenseModel: open-core
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2026-10-15
githubStargazers: 6602
npmWeeklyDownloads: 33539
contributors: 153
social:
  x: https://x.com/getflagsmith
  discord: https://discord.gg/hFhxNtXzgm
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://www.flagsmith.com/
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/Flagsmith/flagsmith
    checkedAt: 2026-10-19
  - field: urls
    url: https://docs.flagsmith.com/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://docs.flagsmith.com/deployment-self-hosting
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://docs.flagsmith.com/deployment-self-hosting
    checkedAt: 2026-10-19
  - field: category
    url: https://docs.flagsmith.com/
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/Flagsmith/flagsmith
    checkedAt: 2026-10-19
  - field: runtime
    url: https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/Flagsmith/flagsmith/blob/v2.286.0/api/pyproject.toml
    checkedAt: 2026-10-19
  - field: databases
    url: https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker
    checkedAt: 2026-10-19
  - field: headlessApi
    url: https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker
    checkedAt: 2026-10-19
  - field: adminUi
    url: https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/Flagsmith/flagsmith
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://github.com/Flagsmith/flagsmith/blob/main/README.md
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.flagsmith.com/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/Flagsmith/flagsmith/releases/tag/v2.286.0
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/Flagsmith/flagsmith/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/Flagsmith/flagsmith
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/Flagsmith/flagsmith/contributors
    checkedAt: 2026-10-19
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@flagsmith/flagsmith
    checkedAt: 2026-10-19
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Flagsmith manages feature flags and remote config for web, mobile and server-side apps. Its server is a Python API built with Django and the Django REST Framework, a web dashboard written in Node.js and React talks to it over REST, and PostgreSQL stores the data. Besides self-hosting, the docs describe a cloud service and a private cloud deployment.

## Worth knowing

A self-hosted instance keeps the API, the dashboard and the database running, so it needs a host that runs processes; the [Docker guide](https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker) sets them up with Docker Compose. Enterprise Edition requires a Flagsmith Enterprise license, and the core functionality is open source.
