---
id: redcarpet
name: Redcarpet
urls:
  repository: https://github.com/vmg/redcarpet
  docs: https://github.com/vmg/redcarpet/blob/master/README.markdown
category:
  - library
description: Ruby library for Markdown processing, with its HTML renderers implemented in C.
status: active
maintainer: Vicent Martí
maintainerType: individual
firstRelease: 2011
language: c
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 1.9
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2025-03-06
githubStargazers: 5077
contributors: 98
dependentRepos: 82414
dependentPackages: 2520
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/vmg/redcarpet
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/vmg/redcarpet/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/vmg/redcarpet/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/vmg/redcarpet
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/vmg/redcarpet/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/vmg/redcarpet/blob/v3.6.1/redcarpet.gemspec
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/vmg/redcarpet/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/vmg/redcarpet
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/vmg/redcarpet/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/vmg/redcarpet/blob/master/README.markdown
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/redcarpet.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/vmg/redcarpet/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/vmg/redcarpet/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/vmg/redcarpet
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/vmg/redcarpet/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/redcarpet
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/redcarpet
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
runsAs: null
---

Redcarpet parses Markdown into HTML or XHTML from Ruby code. Its renderers, the HTML and XHTML classes, a table-of-contents variant and a plain-text renderer, are called through the Ruby API, and custom renderers inherit from a built-in renderer and override the methods for individual elements.

## Worth knowing

Installing the gem builds some native extensions, though the README says the parser is standalone and requires no installed libraries.
