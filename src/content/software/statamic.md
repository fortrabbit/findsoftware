---
id: statamic
name: Statamic
urls:
  home: https://statamic.com
  repository: https://github.com/statamic/cms
  docs: https://statamic.dev
  pricing: https://statamic.com/pricing
  plugins: https://statamic.com/marketplace
category:
  - cms
  - headless-cms
description: Laravel-based content management system that stores content in flat files or a database, with a control panel and optional static site generation.
status: active
maintainer: Statamic, LLC
maintainerType: company
hqCountry: US
language: php
runtime:
  - php
hosting:
  - php
  - static
runtimeMin: php 8.3
basedOn:
  - laravel
contentStore:
  - flat-file
  - database
databases:
  - sqlite
adminUi: true
headlessApi:
  - rest
  - graphql
templating: antlers, blade
i18n: yes, multilingual in Pro edition
runsAs:
  - per-request
  - static
renderingModes:
  - server
  - static
installMethod: statamic new (Statamic CLI), composer create-project statamic/statamic
licenseModel: source-available
license: proprietary, Statamic License (custom, not SPDX)
currentMajor: "6"
latestReleaseDate: 2026-10-16
githubStargazers: 4906
packagistDownloads: 4268843
contributors: 365
pluginCount: 490
social:
  x: https://x.com/statamic
  bluesky: https://bsky.app/profile/statamic.com
  mastodon: https://mastodon.social/@statamic
  discord: https://statamic.com/discord
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://statamic.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/statamic/cms
    checkedAt: 2026-10-18
  - field: urls
    url: https://packagist.org/packages/statamic/cms.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://statamic.dev/requirements
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://statamic.com/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://statamic.com/
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://api.github.com/orgs/statamic
    checkedAt: 2026-10-18
  - field: category
    url: https://statamic.com/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://repo.packagist.org/p2/statamic/cms.json
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://statamic.com/
    checkedAt: 2026-10-18
  - field: language
    url: https://statamic.dev/requirements
    checkedAt: 2026-10-18
  - field: runtime
    url: https://statamic.dev/requirements
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://statamic.dev/requirements
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://statamic.com/
    checkedAt: 2026-10-18
  - field: databases
    url: https://statamic.dev/tips/storing-content-in-a-database
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://statamic.com/pricing
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://statamic.dev/rest-api
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://statamic.com/pricing
    checkedAt: 2026-10-18
  - field: templating
    url: https://statamic.dev/frontend/antlers
    checkedAt: 2026-10-18
  - field: i18n
    url: https://statamic.com/pricing
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://statamic.dev/static-caching
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://statamic.dev/installing/local
    checkedAt: 2026-10-18
  - field: license
    url: https://packagist.org/packages/statamic/cms.json
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/statamic/cms/blob/6.x/LICENSE.md
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/statamic/cms/blob/6.x/LICENSE.md
    checkedAt: 2026-10-18
  - field: urls
    url: https://statamic.com/pricing
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/statamic/cms/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/statamic/cms/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/statamic/cms
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/statamic/cms/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/statamic/cms.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://statamic.com/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://statamic.com/marketplace/addons
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://statamic.dev/getting-started/deploying
    checkedAt: 2026-10-19
ai: authored
npmWeeklyDownloads: null
---

Statamic is a content management system built on Laravel that stores content in flat files or in a database, with a control panel for editors. Templates are written in Antlers or Blade. A Statamic site is a Laravel application, and its default setup uses SQLite. The static site generator is a separate package that pre-generates fully static HTML sites. Scheduled cache invalidation and queued cache warming need a scheduler and a queue driver other than sync.

## Worth knowing

The Statamic license is custom and source-available. Each copy may be active in one production environment. Multi-site, multilingual, the REST and GraphQL APIs and Git integration sit in the paid Pro edition.
