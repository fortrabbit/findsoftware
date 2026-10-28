---
id: elasticsearch-rails
name: Elasticsearch Rails
urls:
  repository: https://github.com/elastic/elasticsearch-rails
  docs: https://www.elastic.co/guide/en/elasticsearch/client/ruby-api/current/ruby_on_rails.html
category:
  - search
description: Ruby gem of Elasticsearch integrations for Ruby on Rails applications, maintained by Elastic.
status: active
maintainer: Elasticsearch B.V.
maintainerType: company
firstRelease: 2013
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3
basedOn:
  - rails
installMethod: gem install
licenseModel: open-source
license: Apache-2.0
currentMajor: "8"
latestReleaseDate: 2025-09-01
githubStargazers: 3083
contributors: 99
dependentRepos: 2495
dependentPackages: 22
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/elastic/elasticsearch-rails
    checkedAt: 2026-10-28
  - field: urls
    url: https://rubygems.org/api/v1/gems/elasticsearch-rails.json
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/elastic/elasticsearch-rails/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/elasticsearch-rails.json
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/elastic/elasticsearch-rails/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/elastic/elasticsearch-rails/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/elastic/elasticsearch-rails
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/elastic/elasticsearch-rails/v8.0.1/elasticsearch-rails/elasticsearch-rails.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/elastic/elasticsearch-rails/v8.0.1/elasticsearch-rails/elasticsearch-rails.gemspec
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/elastic/elasticsearch-rails/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/elastic/elasticsearch-rails/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/elastic/elasticsearch-rails/releases/tags/v8.0.1
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/elastic/elasticsearch-rails/releases/tags/v8.0.1
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/elastic/elasticsearch-rails
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/elastic/elasticsearch-rails/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/elasticsearch-rails
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/elasticsearch-rails
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

Elasticsearch Rails is a Ruby gem that adds Elasticsearch integrations to Rails applications. Its features include an ActiveModel integration with adapters for ActiveRecord and Mongoid, convenience model methods for search and import, wrappers that return search results as records, pagination support for Kaminari and WillPaginate, and rake tasks for importing data. The README also lists templates that generate an example Rails application.

The repository holds three gems: elasticsearch-model, elasticsearch-persistence and elasticsearch-rails. The gem described here is elasticsearch-rails, and it is installed with gem install. The Elasticsearch client itself comes from the separate elasticsearch-ruby project. The example application template needs a running Elasticsearch cluster.

## Worth knowing

The gem follows the Elasticsearch major version, so its version 8 line targets Elasticsearch 8.x. The README points to Elastic's support lifecycle page to check which releases are still supported.
