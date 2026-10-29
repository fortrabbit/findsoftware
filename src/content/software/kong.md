---
id: kong
name: Kong Gateway
urls:
  home: https://konghq.com/products/kong-gateway
  repository: https://github.com/Kong/kong
  docs: https://developer.konghq.com/gateway/
  pricing: https://konghq.com/pricing
category:
  - backend
description: Open source API gateway, built on NGINX, that routes, secures and transforms traffic to APIs through plugins, with a Kong Konnect SaaS option.
status: active
maintainer: Kong Inc.
maintainerType: company
firstRelease: 2015
hqCountry: US
language: other
basedOn:
  - nginx
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker-image, debian-package, rpm
licenseModel: open-core
license: Apache-2.0, Apache License, Version 2.0
currentMajor: "3"
latestReleaseDate: 2026-10-12
githubStargazers: 44321
contributors: 335
social:
  x: https://x.com/kong
  forum: https://discuss.konghq.com/
  youtube: https://www.youtube.com/@KongInc
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://konghq.com/products/kong-gateway
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/Kong/kong
    checkedAt: 2026-10-29
  - field: urls
    url: https://developer.konghq.com/gateway/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://konghq.com/privacy
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://konghq.com/privacy
    checkedAt: 2026-10-29
  - field: hqCountry
    url: https://konghq.com/privacy
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://github.com/Kong/kong/blob/master/CHANGELOG-OLD.md
    checkedAt: 2026-10-29
  - field: category
    url: https://developer.konghq.com/gateway/
    checkedAt: 2026-10-29
  - field: language
    url: https://github.com/Kong/kong
    checkedAt: 2026-10-29
  - field: basedOn
    url: https://konghq.com/products/kong-gateway
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/Kong/kong/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/Kong/kong/releases/tag/3.9.4
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/Kong/kong
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/Kong/kong/blob/master/README.md
    checkedAt: 2026-10-29
  - field: urls
    url: https://konghq.com/products/kong-gateway
    checkedAt: 2026-10-29
  - field: databases
    url: https://developer.konghq.com/gateway/configuration/
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://github.com/Kong/kong/blob/master/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://developer.konghq.com/gateway/deployment-topologies/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://developer.konghq.com/gateway/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://developer.konghq.com/gateway/install/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://github.com/Kong/kong
    checkedAt: 2026-10-29
  - field: contributors
    url: https://github.com/Kong/kong/graphs/contributors
    checkedAt: 2026-10-29
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kong Gateway is an API gateway that routes traffic to APIs and applies security, authentication, transformation and analytics through plugins. It is built on NGINX, and its source code is written in Lua. Docker images and deb and rpm packages are the install routes the current docs name. Once installed, the data plane serves traffic continuously, and PostgreSQL is the database the docs name. A web interface, Kong Manager, is available for managing it.

## Worth knowing

The source is Apache-2.0, but Kong also sells an Enterprise edition, which needs a Kong Gateway license key supplied through an environment variable when it starts. Kong Konnect is the vendor's SaaS platform for running the gateway without any infrastructure to manage.
