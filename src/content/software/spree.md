---
id: spree
name: Spree Commerce
urls:
  home: https://spreecommerce.org
  repository: https://github.com/spree/spree
  docs: https://spreecommerce.org/docs/
  pricing: https://spreecommerce.org/pricing
category:
  - e-commerce
description: Open-source commerce platform built on Ruby on Rails, with a REST API, TypeScript SDKs and a Next.js storefront.
status: active
maintainer: Vendo Connect Inc
maintainerType: company
firstRelease: 2009
language: ruby
runtime:
  - ruby
  - node
hosting:
  - ruby
  - node
runtimeMin: ruby 3.2
basedOn:
  - rails
contentStore:
  - database
databases:
  - postgres
  - mysql
  - sqlite
adminUi: true
headlessApi:
  - rest
i18n: yes
runsAs:
  - always-on
installMethod: npx create-spree-app, or manual installation with rails new and a Spree template
licenseModel: open-core
license: BSD-3-Clause
currentMajor: "5"
latestReleaseDate: 2026-07-28
githubStargazers: 15778
contributors: 307
social:
  x: https://x.com/spreecommerce
  discord: https://discord.spreecommerce.org
  youtube: https://www.youtube.com/@SpreecommerceInc
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/spree/spree
    checkedAt: 2026-10-26
  - field: urls
    url: https://spreecommerce.org
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/spree/spree/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://spreecommerce.org/terms
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/spree/spree
    checkedAt: 2026-10-26
  - field: runtime
    url: https://rubygems.org/api/v2/rubygems/spree/versions/5.6.1.json
    checkedAt: 2026-10-26
  - field: runtime
    url: https://spreecommerce.org/docs/v5/developer/getting-started/quickstart.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://rubygems.org/api/v2/rubygems/spree/versions/5.6.1.json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://spreecommerce.org/docs/v5/developer/getting-started/quickstart.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://spreecommerce.org/docs/v5/developer/create-spree-app/quickstart.md
    checkedAt: 2026-10-26
  - field: category
    url: https://spreecommerce.org
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://spreecommerce.org/docs/v5/developer/getting-started/quickstart.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://spreecommerce.org/docs/v5/developer/deployment/database.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://spreecommerce.org/docs/v5/developer/deployment/database.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://spreecommerce.org/docs/v5/developer/deployment/docker.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/spree/spree/blob/main/README.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/spree/spree/blob/main/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://spreecommerce.org
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/spree/spree/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/spree/spree/blob/main/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/spree/spree/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/spree.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/spree/spree/releases/tag/v5.6.1
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/spree/spree/releases/tag/v5.6.1
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/spree/spree
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/spree/spree/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Spree Commerce is an e-commerce platform whose backend is a Ruby on Rails application. It exposes a REST API for storefronts, admin tools and sellers, and ships a React admin dashboard built with Vite. The Next.js storefront is a separate application. One installation can run several brand stores under one admin panel, and staff can sign in through OpenID Connect.

The backend keeps its data in the application's database and runs as one container that serves web requests and background jobs.

## Worth knowing

The project is open core. The paid [Enterprise Edition](https://spreecommerce.org/pricing) adds modules such as B2B approval workflows and multi-tenant SaaS, and its code is not in the repository. The Sandbox that the site offers for free is an evaluation service; its terms say it is not a production host.
