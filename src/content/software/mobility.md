---
id: mobility
name: Mobility
urls:
  repository: https://github.com/shioyama/mobility
  docs: https://github.com/shioyama/mobility/wiki
category:
  - library
description: Ruby gem that stores and retrieves translations as attributes on ActiveRecord and Sequel models.
status: active
maintainer: Chris Salzberg
maintainerType: individual
firstRelease: 2016
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.5
databases:
  - postgres
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-01-25
githubStargazers: 1142
contributors: 38
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/shioyama/mobility
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/shioyama/mobility/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/shioyama/mobility/blob/master/LICENSE.txt
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/mobility.json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/shioyama/mobility
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/shioyama/mobility/blob/v1.3.2/mobility.gemspec
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/shioyama/mobility/blob/v1.3.2/mobility.gemspec
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/shioyama/mobility/blob/master/README.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/shioyama/mobility/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/shioyama/mobility/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/shioyama/mobility
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/shioyama/mobility/blob/master/README.md
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/shioyama/mobility
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/shioyama/mobility/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/shioyama/mobility/releases/tag/v1.3.2
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/shioyama/mobility/releases/tag/v1.3.2
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Mobility is a Ruby gem that stores translations as attributes on a class, so a model can keep its title or body in several languages. Its backends decide where the translations live: shared tables by default, translated columns, a translation table per model, or PostgreSQL json, jsonb and hstore columns. The gem works with ActiveRecord and Sequel models. In a Rails project a generator creates the initializer and the shared translation tables; with Sequel, the migrations are written by hand.

## Worth knowing

Each ORM integration has its own minimum version, listed in the install sections of the README. The PostgreSQL-only backends need PostgreSQL. The README says the json backend may also work with MySQL, but that combination is not tested.
