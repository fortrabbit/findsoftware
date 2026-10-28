---
id: thinking-sphinx
name: Thinking Sphinx
urls:
  home: https://freelancing-gods.com/thinking-sphinx/
  repository: https://github.com/pat/thinking-sphinx
  docs: https://freelancing-gods.com/thinking-sphinx/v5/
category:
  - search
description: Ruby library that connects ActiveRecord to the Sphinx or Manticore full-text search servers.
status: active
maintainer: Pat Allan
maintainerType: individual
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.0
basedOn:
  - rails
databases:
  - mysql
  - postgres
runsAs:
  - always-on
  - scheduled
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-01-11
githubStargazers: 1620
contributors: 49
dependentRepos: 1995
dependentPackages: 24
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://freelancing-gods.com/thinking-sphinx/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/pat/thinking-sphinx
    checkedAt: 2026-10-28
  - field: urls
    url: https://freelancing-gods.com/thinking-sphinx/v5/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/thinking-sphinx.json
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/pat/thinking-sphinx
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://freelancing-gods.com/thinking-sphinx/v5/deployment.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://freelancing-gods.com/thinking-sphinx/v5/deployment.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/pat/thinking-sphinx/blob/develop/README.textile
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/thinking-sphinx.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/pat/thinking-sphinx
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/pat/thinking-sphinx/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/thinking-sphinx
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/thinking-sphinx
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

Thinking Sphinx is a Ruby library that connects ActiveRecord to the Sphinx or Manticore full-text search servers. It is installed as a gem, and the search server runs beside the application, which queries it through the library. The README says the library integrates closely with Rails and also works with other Ruby web frameworks. Pat Allan develops and maintains it.

## Worth knowing

The search server is a long-running daemon that the application needs in production. The v5 deployment guide also asks for a cron job that regularly processes the indices, so that recent changes become searchable. The documentation site answers with the v5 pages, so its install and deployment steps describe version 5 while the current release is version 6.
