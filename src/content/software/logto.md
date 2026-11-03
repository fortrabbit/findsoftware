---
id: logto
name: Logto
urls:
  home: https://logto.io
  repository: https://github.com/logto-io/logto
  docs: https://docs.logto.io
  pricing: https://logto.io/pricing
category:
  - auth
description: Open-source authentication and authorization server built on OIDC and OAuth 2.1, self-hosted or run as Logto Cloud.
status: active
maintainer: Silverhand Inc.
maintainerType: company
firstRelease: 2022
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: MPL-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-13
githubStargazers: 14841
contributors: 119
social:
  x: https://x.com/logto_io
  discord: https://discord.com/invite/UEPaF3j5e6
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://logto.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/logto-io/logto
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.logto.io/introduction
    checkedAt: 2026-11-03
  - field: urls
    url: https://logto.io/pricing
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/logto-io/logto
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/logto-io/logto
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/logto-io/logto/blob/v1.45.0/package.json
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/logto-io/logto/blob/v1.45.0/package.json
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/logto-io/logto
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://logto.io/terms/of-service
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://logto.io/terms/of-service
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/logto-io/logto/releases/tag/v0.1.0-internal
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/logto-io/logto/releases/tag/v1.45.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/logto-io/logto/releases/tag/v1.45.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/logto-io/logto
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/logto-io/logto
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.logto.io/logto-oss/deployment-and-configuration
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.logto.io/logto-oss/get-started-with-oss
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.logto.io/logto-oss/get-started-with-oss
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.logto.io/logto-oss/get-started-with-oss
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.logto.io/logto-oss/get-started-with-oss
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.logto.io/logto-oss/get-started-with-oss
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.logto.io/logto-oss/deployment-and-configuration
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Logto is a self-hostable authentication and authorization server built on OIDC and OAuth 2.1, with an Admin Console on its own port. It runs as a long-lived Node.js service backed by PostgreSQL, and it can be installed with Docker, with npm init, or on Kubernetes. The vendor also runs Logto Cloud, a hosted version of the service, and the company behind both is Silverhand Inc.

## Worth knowing

The Docker Compose setup in the install guide is for local development, and the guide says not to use it in production. A self-hosted Pro license unlocks further features on a self-hosted instance, including managing Console members and their roles. Without a license, the open-source version allows up to three SAML applications.
