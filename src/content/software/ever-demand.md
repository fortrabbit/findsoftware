---
id: ever-demand
name: Ever Demand
urls:
  home: https://everdemand.co
  repository: https://github.com/ever-co/ever-demand
  docs: https://docs.ever.co
category:
  - e-commerce
description: Open-source, real-time commerce platform for single-store, multi-vendor and on-demand marketplaces, with a Nest backend and GraphQL and REST APIs.
status: stub
maintainer: Ever Co. LTD.
maintainerType: company
firstRelease: 2019
hqCountry: IL
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 14
basedOn:
  - nestjs
databases:
  - mongodb
adminUi: true
headlessApi:
  - graphql
  - rest
i18n: yes, multi-language and culture settings
runsAs:
  - always-on
installMethod: git clone, then yarn bootstrap and yarn build:all
licenseModel: open-core
license: AGPL-3.0, GPL-3.0 for the Shopping Mobile App, the Carrier Mobile App and other shared modules, MIT for the Pyro shared modules, commercial licenses (Small Business, Enterprise) under a separate written agreement
githubStargazers: 1868
contributors: 29
social:
  x: https://x.com/everplatform
  discord: https://discord.gg/msqRJ4w
  forum: https://github.com/ever-co/ever-demand/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: urls
    url: https://everdemand.co
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.ever.co
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ever-co/ever-demand/blob/develop/LICENSES.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ever-co/ever-demand/blob/develop/LICENSES.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ever-co/ever-demand/blob/develop/LICENSES.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ever-co/ever-demand/blob/develop/LICENSES.md
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/ever-co/ever-demand/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/ever-co/ever-demand/blob/develop/package.json
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://everdemand.co/privacy
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/ever-co/ever-demand/releases/tag/v0.2.0-alpha.1
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/ever-co/ever-demand
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ever-co/ever-demand/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: 🛒
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Shop
ai: authored
packagistDownloads: null
---

Ever Demand is a commerce platform for single-store, multi-store, multi-vendor, peer-to-peer and on-demand marketplaces. Its headless backend is a Node.js server built with Nest that exposes GraphQL and REST APIs, and it keeps data in MongoDB. An admin website manages platform features and settings. The source is cloned from GitHub, bootstrapped with Yarn and built from the monorepo, and the README recommends PM2 for production.

The company behind the platform also offers Cloud Commerce, a hosted version of the platform, next to the open-source code. Ever Co. LTD. holds the copyright. Besides the Community Edition license, its LICENSES.md names commercial Small Business and Enterprise licenses.

## Worth knowing

The README calls the platform alpha work in progress and warns that the develop branch may be unstable. No stable release is tagged. User roles and permissions are listed as a planned feature. Stripe is the only payment gateway the README names, and tax calculation and third-party shipping integrations are planned.
