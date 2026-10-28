---
id: sunspot
name: Sunspot
urls:
  home: https://sunspot.github.io
  repository: https://github.com/sunspot/sunspot
  docs: https://github.com/sunspot/sunspot/blob/master/README.md
category:
  - search
description: Ruby library that provides a DSL for indexing Ruby objects and searching them through the Solr search engine.
status: active
maintainer: Mat Brown
maintainerType: individual
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
basedOn:
  - solr
installMethod: bundler
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2024-07-16
githubStargazers: 2977
contributors: 190
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://sunspot.github.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/sunspot/sunspot
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/sunspot/sunspot/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/sunspot/sunspot/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/sunspot/sunspot/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/sunspot/sunspot
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/sunspot/sunspot/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/sunspot/sunspot/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/sunspot/sunspot/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/sunspot/sunspot
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/sunspot/sunspot/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/sunspot/sunspot/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/sunspot/sunspot/releases
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/sunspot.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/sunspot/sunspot
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/sunspot/sunspot/contributors
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://sunspot.github.io/
    checkedAt: 2026-10-28
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

Sunspot is a Ruby library for interacting with the Solr search engine. It provides a DSL for indexing Ruby objects and for building search queries against Solr. The sunspot_rails gem integrates the library into Rails applications, and the core library can be used without Rails. The gems are installed through Bundler, and Solr runs as its own server beside the application.

The sunspot_solr gem bundles a Solr distribution, which the project describes as meant for development use.

## Worth knowing

A production site needs a Solr server of its own that keeps running alongside the application, because the bundled Solr distribution is not meant for production.
