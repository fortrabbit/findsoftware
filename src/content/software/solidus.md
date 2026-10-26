---
id: solidus
name: Solidus
urls:
  home: https://solidus.io
  repository: https://github.com/solidusio/solidus
  docs: https://guides.solidus.io
  plugins: https://extensions.solidus.io
category:
  - e-commerce
description: Open-source eCommerce framework for Ruby on Rails, built as a Rails engine.
status: active
maintainer: Nebulab, Inc.
maintainerType: company
firstRelease: 2015
hqCountry: US
language: ruby
runtime:
  - ruby
hosting:
  - ruby
databases:
  - mysql
  - postgres
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes
installMethod: Rails generator solidus:install in a new or existing Rails application
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2026-10-09
githubStargazers: 5345
contributors: 307
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://solidus.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/solidusio/solidus
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/solidusio/solidus/blob/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://guides.solidus.io/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/solidusio/solidus
    checkedAt: 2026-10-26
  - field: runtime
    url: https://guides.solidus.io/getting-started/installing-solidus/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://guides.solidus.io/getting-started/installing-solidus/
    checkedAt: 2026-10-26
  - field: databases
    url: https://guides.solidus.io/getting-started/installing-solidus/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://guides.solidus.io/getting-started/installing-solidus/
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://solidus.io/enterprise/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://solidus.io/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/solidusio/solidus
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://solidus.io/terms/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://solidus.io/terms/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/solidusio/solidus/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/solidusio/solidus/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/solidusio/solidus/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/solidusio/solidus
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/solidusio/solidus/contributors
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/solidusio/solidus/blob/main/README.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Solidus is an open-source eCommerce platform built as a Rails engine on Ruby on Rails. A standard installation is made of gems: `solidus_core` holds the data models and business logic, `solidus_backend` provides an administrative UI, and `solidus_api` provides a REST API. The [installation guide](https://guides.solidus.io/getting-started/installing-solidus/) describes adding it to a new or existing Rails application with the `solidus:install` generator. Solidus is a fork of Spree, and it can run with MySQL or PostgreSQL.

Nebulab, Inc. is named as the operator of the website, and the homepage says the project is maintained by Nebulab and the open source community. Solidus Cloud is offered as a hosted option next to the open source gems.

## Worth knowing

The guides do not state a Ruby or Rails version and say the project supports the oldest maintained branch of each. The guides name `solidus_starter_frontend` as the ready-made storefront.
