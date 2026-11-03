---
id: growthbook
name: GrowthBook
urls:
  home: https://www.growthbook.io/
  repository: https://github.com/growthbook/growthbook
  docs: https://docs.growthbook.io
  pricing: https://www.growthbook.io/pricing
category:
  - dev-tool
  - analytics
description: Open-core feature flagging, experimentation and product analytics platform, available self-hosted or as a cloud service, with SDKs for application code.
status: active
maintainer: GrowthBook, Inc.
maintainerType: company
firstRelease: 2021
hqCountry: US
language: javascript
runtime:
  - node
  - python
hosting:
  - node
  - python
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-core
license: MIT, GrowthBook Enterprise License (packages/back-end/src/enterprise, packages/front-end/enterprise, packages/shared/src/enterprise)
currentMajor: "5"
latestReleaseDate: 2026-11-03
githubStargazers: 8560
npmWeeklyDownloads: 1559180
contributors: 151
social:
  x: https://x.com/growth_book
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.growthbook.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/growthbook/growthbook
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.growthbook.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/growthbook/growthbook/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.growthbook.io/terms
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/growthbook/growthbook/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/growthbook/growthbook
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.growthbook.io/self-host
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.growthbook.io/self-host
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.growthbook.io/self-host
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/growthbook/growthbook/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.growthbook.io/self-host
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.growthbook.io/self-host
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.growthbook.io/self-host
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/growthbook/growthbook/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/growthbook/growthbook/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.growthbook.io/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/growthbook/growthbook/releases/tag/v5.2.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/growthbook/growthbook/releases/latest
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/growthbook/growthbook/commits/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/growthbook/growthbook
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/growthbook/growthbook/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/@growthbook/growthbook
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

GrowthBook is a platform for feature flags, experiments and product analytics. Applications connect to it through SDKs, and the same code runs as a self-hosted server and as the GrowthBook Cloud service.

The self-hosted server combines a Next.js front-end, an Express API and a Python stats engine, and it keeps its data in MongoDB or a compatible database. The [self-hosting guide](https://docs.growthbook.io/self-host) starts it with Docker Compose, and the project also publishes a Helm chart for Kubernetes.

## Worth knowing

The repository is open core. Most of it is MIT licensed, and the directories named in its LICENSE file fall under a separate commercial enterprise license. The docs describe single sign-on through OpenID Connect, and the pricing page lists SAML single sign-on and SCIM provisioning under its Enterprise plans.
