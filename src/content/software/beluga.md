---
id: beluga
name: Beluga
urls:
  home: https://belugajs.com
  repository: https://github.com/binx/beluga
  docs: https://v1.belugajs.com/docs
category:
  - e-commerce
description: Open-source ecommerce store software built with React and Node.js, using Stripe for payments, that a site owner deploys and runs.
status: discontinued
maintainer: Rachel Binx
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - node
adminUi: true
runsAs:
  - always-on
installMethod: git clone, then yarn, yarn server and yarn start
licenseModel: open-source
license: GPL-3.0
githubStargazers: 305
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://belugajs.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/binx/beluga
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://v1.belugajs.com/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/binx/beluga
    checkedAt: 2026-10-23
  - field: category
    url: https://api.github.com/repos/binx/beluga
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/binx/beluga/master/package.json
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/binx/beluga
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/binx/beluga/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/binx/beluga
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/binx/beluga/contributors
    checkedAt: 2026-10-23
  - field: status
    url: https://raw.githubusercontent.com/binx/beluga/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://v1.belugajs.com/docs/dev-environment
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://v1.belugajs.com/docs/new-store
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://v1.belugajs.com/docs/deploy-to-heroku
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://v1.belugajs.com/docs/managing-orders
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Beluga is open-source software for building an ecommerce store, written in JavaScript with React and run as a Node.js server. It uses Stripe for payment processing, has an admin dashboard for orders, and installs by cloning the repository and running it with yarn. Its documentation describes deployment to Heroku.

## Worth knowing

The repository README says the project is deprecated, because the Stripe product and order objects it relies on were replaced. The homepage now documents a rewrite in a separate repository, beluga-v2, and calls this repository the original.
