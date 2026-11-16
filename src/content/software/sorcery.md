---
id: sorcery
name: Sorcery
urls:
  repository: https://github.com/Sorcery/sorcery
  docs: https://rubydoc.info/gems/sorcery
category:
  - auth
description: Ruby gem for Rails that provides authentication building blocks such as login, logout, password reset and remember-me.
status: active
maintainer: Noam Ben-Ari
firstRelease: 2011
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - rails
installMethod: bundler, gem
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-12-06
githubStargazers: 1460
contributors: 189
dependentRepos: 3175
dependentPackages: 19
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/Sorcery/sorcery
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/Sorcery/sorcery/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/Sorcery/sorcery/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/Sorcery/sorcery/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/Sorcery/sorcery/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/Sorcery/sorcery
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/Sorcery/sorcery/blob/v0.18.0/sorcery.gemspec
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/Sorcery/sorcery/blob/v0.18.0/sorcery.gemspec
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/Sorcery/sorcery/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/Sorcery/sorcery/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/Sorcery/sorcery
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/Sorcery/sorcery/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/Sorcery/sorcery/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/Sorcery/sorcery/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/sorcery.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/Sorcery/sorcery
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/Sorcery/sorcery/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/sorcery
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/sorcery
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Sorcery is an authentication library for Rails applications. Its methods cover login, logout, password reset and remember-me, and the application's own controllers and models call them. The README lists ActiveRecord, DataMapper, Mongoid and MongoMapper as the ORMs it supports.

The install generator writes a migration, an initializer and a User model, and configuration sits in the initializer.

## Worth knowing

OAuth support covers logging in through external providers such as Facebook and Google.
