---
id: medusa
name: Medusa
urls:
  home: https://medusajs.com
  repository: https://github.com/medusajs/medusa
  docs: https://docs.medusajs.com
  pricing: https://medusajs.com/pricing/
  plugins: https://medusajs.com/integrations/
category:
  - e-commerce
  - framework
description: Open-source headless commerce platform for Node.js with commerce modules, an admin dashboard and REST store and admin APIs.
status: active
maintainer: MedusaJS, Inc.
maintainerType: company
hqCountry: US
language: typescript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
basedOn:
  - express
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: Translation Module, behind a feature flag, since v2.12.3
runsAs:
  - always-on
renderingModes:
  - api-only
installMethod: npx create-medusa-app@latest, docker compose (development)
licenseModel: open-core
license: MIT, except Enterprise Edition materials under a commercial license, NOASSERTION, SEE LICENSE IN LICENSE
currentMajor: "2"
latestReleaseDate: 2026-09-28
githubStargazers: 36787
contributors: 456
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://medusajs.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/medusajs/medusa
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/medusajs/medusa
    checkedAt: 2026-10-18
  - field: urls
    url: https://medusajs.com/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://github.com/medusajs/medusa/blob/develop/ENTERPRISE-LICENSE.md
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://github.com/medusajs/medusa/blob/develop/ENTERPRISE-LICENSE.md
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://api.github.com/orgs/medusajs
    checkedAt: 2026-10-18
  - field: category
    url: https://medusajs.com/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/@medusajs/medusa/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/medusajs/medusa
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.medusajs.com/learn/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/@medusajs/medusa/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.medusajs.com/learn/installation
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.medusajs.com/learn/installation
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.medusajs.com/learn/installation
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://registry.npmjs.org/@medusajs/dashboard/latest
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://docs.medusajs.com/api/store
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.medusajs.com/resources/commerce-modules/translation
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.medusajs.com/learn/installation
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.medusajs.com/learn/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/medusajs/medusa/blob/develop/LICENSE
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/medusajs/medusa
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/@medusajs/medusa/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/medusajs/medusa/blob/develop/LICENSE
    checkedAt: 2026-10-18
  - field: urls
    url: https://medusajs.com/pricing/
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/medusajs/medusa/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/medusajs/medusa
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/medusajs/medusa/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://medusajs.com/integrations/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.medusajs.com/learn/installation
    checkedAt: 2026-10-19
figure:
  emoji: 🛒
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: TypeScript · Shop
ai: authored
packagistDownloads: null
---

Medusa runs as a Node.js backend on Express, with its commerce logic split into modules. It exposes REST store and admin APIs and includes an admin dashboard built in React. Medusa renders no storefront itself, although create-medusa-app can add a Next.js storefront starter. PostgreSQL is the database, Redis is used for sessions in production, and separate server and worker processes run the application. MedusaJS, Inc. maintains it, and the company offers the hosted Medusa Cloud.

## Worth knowing

The repository is MIT licensed except for Enterprise Edition materials, which need a commercial agreement with MedusaJS, Inc. Docker is documented for local development, and the project has no official container image.
