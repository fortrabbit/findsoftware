---
id: unchained
name: Unchained Engine
urls:
  home: https://unchained.shop
  repository: https://github.com/unchainedshop/unchained
  docs: https://docs.unchained.shop
category:
  - e-commerce
description: Headless e-commerce engine for Node.js, with a GraphQL API, an admin UI and a modular package set.
status: active
maintainer: Unchained Commerce GmbH
maintainerType: company
firstRelease: 2022
hqCountry: CH
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - mongodb
adminUi: true
headlessApi:
  - graphql
i18n: yes, language management in the core-languages package
runsAs:
  - always-on
installMethod: npm init @unchainedshop
licenseModel: open-source
license: EUPL-1.2
currentMajor: "4"
latestReleaseDate: 2026-10-16
githubStargazers: 204
npmWeeklyDownloads: 467
contributors: 15
social:
  x: https://x.com/unchained_shop
  discord: https://discord.gg/WGdYTqtw72
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: urls
    url: https://unchained.shop
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.unchained.shop
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://unchained.shop
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: runtime
    url: https://registry.npmjs.org/@unchainedshop/platform
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://registry.npmjs.org/@unchainedshop/platform
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://unchained.shop/imprint
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://unchained.shop/imprint
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/@unchainedshop/platform
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/@unchainedshop/platform
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@unchainedshop/platform
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/unchainedshop/unchained
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/unchainedshop/unchained/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@unchainedshop/platform
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Unchained Engine is a modular, API-first e-commerce engine for Node.js, published as a monorepo of npm packages. Its docs describe it as a headless e-commerce SDK with a GraphQL API, and the README says it is embedded in the integrator's own server process. Data is kept in MongoDB, and the admin UI is started locally on a port the README names. Access control comes from a role-based package, and OIDC login is shown in an example.

The packages cover the domains of an online shop: products, orders, users, payments, delivery, assortments, filters, warehousing, enrollments, quotations and files, with a core package that combines them.

## Worth knowing

The source is licensed under the EUPL 1.2. The engine is maintained by Unchained Commerce GmbH, a Swiss company. Its homepage links a comparison page titled "Unchained vs MedusaJS".
