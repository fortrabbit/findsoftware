---
id: spurtcommerce
name: Spurtcommerce
urls:
  home: https://www.spurtcommerce.com
  repository: https://github.com/spurtcommerce/spurtcommerce
  docs: https://docs.spurtcommerce.com
  pricing: https://www.spurtcommerce.com/price-details
category:
  - e-commerce
  - backend
description: Node.js and TypeScript backend API for B2C single-vendor eCommerce, with separate admin, vendor and storefront frontends.
status: active
maintainer: Spurtcommerce eSolutions (P) Limited
maintainerType: company
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - express
contentStore:
  - database
databases:
  - mysql
adminUi: true
i18n: yes, storefront language files and admin language setting
runsAs:
  - always-on
installMethod: npm install from source, or docker compose from docker-spurtcommerce
licenseModel: open-core
license: MIT, CPAL-1.0
currentMajor: "6"
latestReleaseDate: 2026-10-16
githubStargazers: 284
contributors: 8
social:
  x: https://twitter.com/spurtcommerce
  discord: https://discord.com/invite/hyW4MXXn8n
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.spurtcommerce.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.spurtcommerce.com/getting-started/introduction.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/spurtcommerce/spurtcommerce
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/spurtcommerce/spurtcommerce
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/spurtcommerce/spurtcommerce/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/spurtcommerce/spurtcommerce/blob/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://api.github.com/repos/spurtcommerce/spurtcommerce
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/spurtcommerce/spurtcommerce/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/spurtcommerce/spurtcommerce/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.spurtcommerce.com/api-deployment-and-setup/deployment-from-docker.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.spurtcommerce.com/api-deployment-and-setup/deployment-from-source-code.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/spurtcommerce/spurtcommerce/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/spurtcommerce/spurtcommerce/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://docs.spurtcommerce.com/api-deployment-and-setup/deployment-from-source-code.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://docs.spurtcommerce.com/how-to-guides/store-language-setup.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/spurtcommerce/spurtcommerce/master/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://www.spurtcommerce.com/open-source-license
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.spurtcommerce.com/price-details
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/spurtcommerce/spurtcommerce/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/spurtcommerce/spurtcommerce/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/spurtcommerce/spurtcommerce
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/spurtcommerce/spurtcommerce/contributors
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.spurtcommerce.com/open-source-license
    checkedAt: 2026-10-23
figure:
  emoji: 🛒
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Shop
ai: authored
packagistDownloads: null
---

Spurtcommerce is a backend API for B2C single-vendor eCommerce, according to its README. It is written in TypeScript on Node.js, built on Express, and stores its data in MySQL. The API runs as a long-lived process under the pm2 process manager, and the admin panel, vendor panel and storefront are separate applications that call it. The [documentation](https://docs.spurtcommerce.com/getting-started/introduction.md) describes installing from source with npm or running the stack with Docker Compose.

## Worth knowing

The repository LICENSE file is MIT, but the open-source license agreement on the company's site names the Common Public Attribution License 1.0 for the same software and prohibits selling or claiming ownership of a modified version. The company describes the software as self-hosted, not as a SaaS platform, and sells multi-vendor and shopping-cart source code products on its [pricing page](https://www.spurtcommerce.com/price-details).
