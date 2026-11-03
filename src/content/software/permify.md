---
id: permify
name: Permify
urls:
  home: https://permify.co
  repository: https://github.com/Permify/permify
  docs: https://docs.permify.co
  pricing: https://permify.co/pricing/
category:
  - auth
description: Open-source authorization service, inspired by Google Zanzibar, that stores relationships and answers access checks over an API.
status: active
maintainer: Permify
parent: FusionAuth
firstRelease: 2022
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-10-09
githubStargazers: 5968
contributors: 74
social:
  x: https://twitter.com/GetPermify
  discord: https://discord.com/invite/MJbUjwskdH
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://permify.co/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Permify/permify
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.permify.co/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://api.github.com/users/Permify
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://permify.co/
    checkedAt: 2026-11-03
  - field: parent
    url: https://fusionauth.io/blog/fusionauth-acquires-permify
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/Permify/permify/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/Permify/permify
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Permify/permify
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/Permify/permify/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://permify.co/pricing/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/Permify/permify/releases/tag/v1.7.5
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/Permify/permify/releases/tag/v1.7.5
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/Permify/permify/tree/v0.0.0-alpha1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/Permify/permify
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/Permify/permify
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.permify.co/setting-up/installation/container
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.permify.co/setting-up/installation/brew
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.permify.co/setting-up/installation/helm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.permify.co/setting-up/installation/kubernetes
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Permify/permify/releases/tag/v1.7.5
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.permify.co/setting-up/installation/brew
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.permify.co/setting-up/configuration
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/Permify/permify/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/Permify/permify/releases/tag/v1.7.5
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Permify is an open-source authorization service that stores relationships and answers access checks over an API. It is written in Go, and its model is inspired by Google Zanzibar. Applications and services send their permission questions to the server, which exposes a REST API. The official install routes are a Docker image, a Homebrew formula and a Helm chart for Kubernetes, and the server keeps authorization data in memory unless it is configured with PostgreSQL, the only database engine the configuration page names.

FusionAuth acquired the project, and the acquisition announcement says the project stays open source.

## Worth knowing

Permify Cloud is the managed version of the same software. The README says the Community Edition does not include some premium features, such as observability dashboards and data synchronization.
