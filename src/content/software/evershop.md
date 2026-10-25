---
id: evershop
name: EverShop
urls:
  home: https://evershop.io/
  repository: https://github.com/evershopcommerce/evershop
  docs: https://evershop.io/docs/development/getting-started/introduction
category:
  - e-commerce
description: Open-source TypeScript e-commerce platform built on Node.js and PostgreSQL, with a GraphQL API and React storefront and admin.
status: active
maintainer: The Nguyen
firstRelease: 2024
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
basedOn:
  - react
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes, multiple storefront languages from one running process
runsAs:
  - always-on
renderingModes:
  - server
installMethod: npx create-evershop-app
licenseModel: open-source
license: GPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-08
githubStargazers: 10524
npmWeeklyDownloads: 566
contributors: 46
dependentRepos: 10
dependentPackages: 3
social:
  x: https://twitter.com/evershopjs
  discord: https://discord.gg/GSzt7dt7RM
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://raw.githubusercontent.com/evershopcommerce/evershop/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://evershop.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/evershopcommerce/evershop
    checkedAt: 2026-10-23
  - field: urls
    url: https://evershop.io/docs/development/getting-started/introduction
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/evershopcommerce/evershop/main/package.json
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/evershopcommerce/evershop
    checkedAt: 2026-10-23
  - field: category
    url: https://evershop.io/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/evershopcommerce/evershop/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://evershop.io/docs/development/getting-started/system-requirements
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://evershop.io/docs/development/getting-started/system-requirements
    checkedAt: 2026-10-23
  - field: databases
    url: https://evershop.io/docs/development/getting-started/system-requirements
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://evershop.io/docs/development/getting-started/system-requirements
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://evershop.io/docs/development/getting-started/installation-guide
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://evershop.io/docs/development/deployment
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://evershop.io/docs/development/getting-started/introduction
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://evershop.io/docs/api/overview
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://evershop.io/docs/api/overview
    checkedAt: 2026-10-23
  - field: i18n
    url: https://evershop.io/docs/development/knowledge-base/multi-language
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/evershopcommerce/evershop
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/evershopcommerce/evershop/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/evershopcommerce/evershop/releases/tag/v1.0.0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/evershopcommerce/evershop/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/evershopcommerce/evershop/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/evershopcommerce/evershop
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/evershopcommerce/evershop/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@evershop/evershop
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://evershop.io/docs/development/getting-started/introduction
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40evershop%2Fevershop
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40evershop%2Fevershop
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

EverShop is an open-source e-commerce platform written in TypeScript. React components are rendered on the server and hydrated in the browser, and the platform exposes a GraphQL API for reading and a REST API for creating, updating and deleting resources. The store runs as a Node process on top of PostgreSQL, which holds the catalog, orders and settings. The admin panel is a React application served at /admin.

A new store is created with the create-evershop-app command; the [installation guide](https://evershop.io/docs/development/getting-started/installation-guide) covers the setup wizard, which asks for the database connection and the first admin user. Core modules cover the catalog, checkout, orders, promotions, tax, CMS pages, a page builder and a blog, and Stripe, PayPal and cash on delivery ship as built-in payment modules. Themes and extensions customize the storefront and the platform. The [deployment guides](https://evershop.io/docs/development/deployment) cover AWS, Azure, DigitalOcean and Heroku. One running process can serve several storefront languages.

## Worth knowing

The public Docker image is meant for a local environment only. Database migrations run when the application starts. The README mentions EverShop Cloud, a hosted offering whose plans are not described on the pages read.
