---
id: webmock
name: WebMock
urls:
  repository: https://github.com/bblimke/webmock
  docs: https://github.com/bblimke/webmock/blob/master/README.md
category:
  - testing
description: Ruby library that stubs HTTP requests and sets expectations on them in tests.
status: active
maintainer: Bartosz Blimke
maintainerType: individual
firstRelease: 2009
language: ruby
runtime:
  - ruby
runtimeMin: ruby 2.6
installMethod: gem, source
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-14
githubStargazers: 4049
contributors: 251
dependentRepos: 60590
dependentPackages: 8353
social:
  forum: https://groups.google.com/group/webmock-users
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://api.github.com/repos/bblimke/webmock
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/bblimke/webmock/blob/master/README.md
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/webmock.json
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://raw.githubusercontent.com/bblimke/webmock/master/LICENSE
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/bblimke/webmock
    checkedAt: 2026-11-17
  - field: runtime
    url: https://raw.githubusercontent.com/bblimke/webmock/master/README.md
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://raw.githubusercontent.com/bblimke/webmock/v3.34.0/webmock.gemspec
    checkedAt: 2026-11-17
  - field: category
    url: https://raw.githubusercontent.com/bblimke/webmock/master/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://raw.githubusercontent.com/bblimke/webmock/master/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://raw.githubusercontent.com/bblimke/webmock/master/README.md
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/bblimke/webmock/releases?per_page=100
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/bblimke/webmock/releases?per_page=100
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/bblimke/webmock
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/bblimke/webmock/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: license
    url: https://raw.githubusercontent.com/bblimke/webmock/master/LICENSE
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/webmock
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/webmock
    checkedAt: 2026-11-17
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

WebMock stubs HTTP requests and sets expectations on them in Ruby tests. It works at the level of the low HTTP client library, so tests keep their stubs when an application changes its HTTP library, and it supports RSpec, MiniTest and Test::Unit. For recording real traffic and replaying it later, the README points to VCR used together with WebMock.
