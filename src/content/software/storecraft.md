---
id: storecraft
name: Storecraft
urls:
  home: https://storecraft.app
  repository: https://github.com/store-craft/storecraft
  docs: https://storecraft.app/docs
category:
  - e-commerce
description: Headless e-commerce backend framework for TypeScript and JavaScript, with a REST API, an admin dashboard and an AI chat endpoint.
status: active
maintainer: Tomer Shalev
firstRelease: 2024
language: javascript
runtime:
  - node
  - deno
  - bun
hosting:
  - node
  - deno
  - bun
runtimeMin: node 18
databases:
  - mongodb
  - sqlite
  - postgres
  - mysql
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: npx storecraft create
licenseModel: source-available
license: custom license (LICENSE.md), restricted by a ban on a public cloud product or hosting based on it
currentMajor: "1"
latestReleaseDate: 2026-05-02
githubStargazers: 878
npmWeeklyDownloads: 60
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/store-craft/storecraft/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://storecraft.app
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: urls
    url: https://storecraft.app/docs/start-here/what
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/store-craft/storecraft/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/store-craft/storecraft/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/store-craft/storecraft/blob/main/packages/docs/content/docs/backend/platforms/overview.mdx
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/store-craft/storecraft/blob/main/packages/docs/content/docs/start-here/why.mdx
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/store-craft/storecraft/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/@storecraft/core
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/@storecraft/core
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@storecraft/core
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/store-craft/storecraft
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/store-craft/storecraft/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@storecraft/core
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Storecraft is a headless e-commerce backend for TypeScript and JavaScript. The README lists the JavaScript runtimes it runs on as Deno, Bun, Node.js, Cloudflare Workers, AWS Lambda and Google Functions, in serverless or serverful setups. The supported databases are MongoDB, libSQL, SQLite, Postgres, MySQL and several hosted variants of them. The REST API is documented, and an official dashboard is included.

The project is installed with a scaffolding command. The source is a monorepo of packages published to npm, and the core package is the one the install docs build on.

## Worth knowing

The license is a custom one, not a standard open-source license. It reserves all rights and does not allow the software to be offered as a service or product, or as a public cloud or hosting product, without permission. The npm metadata labels the same package MIT with a special clause that repeats the restriction. The README also names an AI chat endpoint, several LLM providers and vector stores, and PayPal, Stripe and RazorPay as payment gateways.
