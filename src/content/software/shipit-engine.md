---
id: shipit-engine
name: Shipit
urls:
  repository: https://github.com/Shopify/shipit-engine
  docs: https://github.com/Shopify/shipit-engine/blob/main/README.md
category:
  - dev-tool
description: Rails engine that adds a web interface for deploying GitHub repositories, with deploy checklists, locks and rollbacks.
status: active
maintainer: Shopify Inc.
maintainerType: company
firstRelease: 2015
hqCountry: CA
language: ruby
runtime:
  - ruby
hosting:
  - ruby
basedOn:
  - rails
databases:
  - mysql
  - postgres
  - sqlite
runsAs:
  - always-on
installMethod: rails new with the Shipit Rails template
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-08-20
githubStargazers: 1493
contributors: 168
dependentRepos: 6
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/Shopify/shipit-engine
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/Shopify/shipit-engine/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.shopify.com/legal/terms
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.shopify.com/legal/terms
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.shopify.com/legal/terms
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/Shopify/shipit-engine
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/Shopify/shipit-engine/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/Shopify/shipit-engine/blob/main/docs/setup.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/Shopify/shipit-engine/blob/main/README.md
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/Shopify/shipit-engine/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Shopify/shipit-engine/blob/main/docs/setup.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/Shopify/shipit-engine/blob/main/docs/setup.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/Shopify/shipit-engine
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/Shopify/shipit-engine/blob/main/LICENSE.txt
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/Shopify/shipit-engine/commits/v0.0.1.pre
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/Shopify/shipit-engine/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/shipit-engine.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/Shopify/shipit-engine
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/Shopify/shipit-engine/contributors
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/shipit-engine
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Shipit is a Rails engine that adds a web interface for deploying GitHub repositories, with deploy checklists, locks and rollbacks. It is set up as a Rails application from a template the project provides.

A running Shipit needs a database (MySQL, PostgreSQL or SQLite3), Redis, and a GitHub App that authenticates users, receives webhooks and accesses the API. Shopify Inc. publishes the project.

## Worth knowing

Shipit runs as an always-on Rails application, because GitHub delivers webhooks to it.
