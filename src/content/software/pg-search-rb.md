---
id: pg-search-rb
name: pg_search
urls:
  repository: https://github.com/Casecommons/pg_search
  docs: https://github.com/Casecommons/pg_search/blob/master/README.md
category:
  - search
description: Ruby gem that adds PostgreSQL full-text search scopes to Active Record models.
status: active
maintainer: Casebook, PBC
firstRelease: 2011
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.3
basedOn:
  - rails
databases:
  - postgres
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-07
githubStargazers: 1589
contributors: 74
dependentRepos: 6913
dependentPackages: 31
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/Casecommons/pg_search
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/Casecommons/pg_search/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/pg_search.json
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/Casecommons/pg_search/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/Casecommons/pg_search/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/Casecommons/pg_search
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/Casecommons/pg_search/blob/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/Casecommons/pg_search/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/Casecommons/pg_search/blob/v2.4.0/pg_search.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/Casecommons/pg_search/blob/v2.4.0/pg_search.gemspec
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/Casecommons/pg_search/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Casecommons/pg_search/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Casecommons/pg_search/blob/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/pg_search.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/pg_search.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/Casecommons/pg_search
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/Casecommons/pg_search/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/pg_search
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/pg_search
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

pg_search is a Ruby gem that builds named scopes for Active Record models, taking advantage of PostgreSQL's full-text search. The [README](https://github.com/Casecommons/pg_search/blob/master/README.md) is the reference for its setup and search options.

Rails projects get the gem's rake tasks through a Railtie, which the README contrasts with non-Rails projects. The gem is installed with gem install or a Gemfile line, and it needs a PostgreSQL server. Some of its features need PostgreSQL extensions.

Casebook, PBC maintains the gem.

## Worth knowing

The name is shared with ParadeDB's pg_search, a PostgreSQL extension and a separate project with its own record. The gem has no project site of its own, so the repository is the reference.
