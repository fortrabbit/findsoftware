---
id: pitchfork
name: Pitchfork
urls:
  repository: https://github.com/Shopify/pitchfork
  docs: https://github.com/Shopify/pitchfork/blob/master/docs/CONFIGURATION.md
category:
  - web-server
description: Preforking HTTP server for Rack applications, designed to share memory between worker processes through copy-on-write.
status: active
maintainer: Shopify Inc.
maintainerType: company
firstRelease: 2022
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.5
basedOn:
  - unicorn
runsAs:
  - always-on
installMethod: Bundler (Gemfile)
licenseModel: open-source
license: GPL-2.0+, Ruby 1.8-specific terms
currentMajor: "0"
latestReleaseDate: 2026-01-28
githubStargazers: 837
contributors: 53
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://github.com/Shopify/pitchfork
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/Shopify/pitchfork
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/Shopify/pitchfork/blob/v0.18.2/pitchfork.gemspec
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/Shopify/pitchfork/blob/v0.18.2/pitchfork.gemspec
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/Shopify/pitchfork/blob/v0.18.2/pitchfork.gemspec
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/Shopify/pitchfork/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://rubygems.org/api/v1/versions/pitchfork.json
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/pitchfork.json
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/pitchfork.json
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/Shopify/pitchfork
    checkedAt: 2026-10-30
  - field: contributors
    url: https://github.com/Shopify/pitchfork
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://github.com/Shopify/pitchfork/blob/master/README.md
    checkedAt: 2026-10-30
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

Pitchfork is an HTTP server that preforks worker processes for Rack applications. Its workers share memory through copy-on-write, and the server runs as a long-lived process.

Applications install it with Bundler through the Gemfile, or with gem install. Shopify Inc. maintains it, and the source is hosted in the Shopify GitHub organization.
