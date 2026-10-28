---
id: searchkick
name: Searchkick
urls:
  repository: https://github.com/ankane/searchkick
  docs: https://github.com/ankane/searchkick/blob/master/README.md
category:
  - search
description: Ruby gem that adds search to Active Record and Mongoid models, backed by an Elasticsearch or OpenSearch server.
status: active
maintainer: Andrew Kane
maintainerType: individual
firstRelease: 2013
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.3
installMethod: Gemfile gem, added to an application's Gemfile
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-27
githubStargazers: 6720
contributors: 117
dependentRepos: 1314
dependentPackages: 12
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/ankane/searchkick
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/ankane/searchkick/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/ankane/searchkick/blob/master/LICENSE.txt
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/ankane/searchkick
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/searchkick.json
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/ankane/searchkick
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/ankane/searchkick/blob/v6.2.0/searchkick.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/ankane/searchkick/blob/v6.2.0/searchkick.gemspec
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/ankane/searchkick/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/ankane/searchkick/blob/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/ankane/searchkick/tags
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/searchkick.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/ankane/searchkick
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/ankane/searchkick/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/searchkick
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/searchkick
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

Searchkick is a Ruby gem that adds search to Active Record and Mongoid models. A model declares the gem, its records are indexed into an Elasticsearch or OpenSearch server, and queries run through the model. The gem runs inside the application, while the search server is a separate process that the application queries. The project is maintained by Andrew Kane.

## Worth knowing

Searchkick needs an Elasticsearch or OpenSearch server to index into and query.
