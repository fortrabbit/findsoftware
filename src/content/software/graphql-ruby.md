---
id: graphql-ruby
name: graphql-ruby
urls:
  home: https://graphql-ruby.org/
  repository: https://github.com/rmosolgo/graphql-ruby
  docs: https://graphql-ruby.org/guides/development/getting_started_md.html
category:
  - backend
description: Ruby implementation of GraphQL for defining schemas, executing queries and serving them from Ruby applications.
status: active
maintainer: Robert Mosolgo
maintainerType: individual
firstRelease: 2015
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.7
installMethod: RubyGems (Gemfile and bundler)
licenseModel: open-core
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-29
githubStargazers: 5445
contributors: 399
dependentRepos: 4698
dependentPackages: 186
social:
  discord: https://discord.com/invite/xud7bH9
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://graphql-ruby.org/
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/rmosolgo/graphql-ruby
    checkedAt: 2026-11-09
  - field: urls
    url: https://graphql-ruby.org/guides/development/getting_started_md.html
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/graphql.json
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/rmosolgo/graphql-ruby/blob/master/MIT-LICENSE
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/rmosolgo/graphql-ruby
    checkedAt: 2026-11-09
  - field: category
    url: https://graphql-ruby.org/guides/development/getting_started_md.html
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/rmosolgo/graphql-ruby/blob/v2.6.14/graphql.gemspec
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://github.com/rmosolgo/graphql-ruby/blob/v2.6.14/graphql.gemspec
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://graphql-ruby.org/guides/development/getting_started_md.html
    checkedAt: 2026-11-09
  - field: license
    url: https://github.com/rmosolgo/graphql-ruby
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://github.com/rmosolgo/graphql-ruby
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/graphql.json
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/graphql.json
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/rmosolgo/graphql-ruby
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/rmosolgo/graphql-ruby/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/graphql
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/graphql
    checkedAt: 2026-11-09
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

graphql-ruby is a Ruby gem for building a GraphQL server in Ruby. The [getting-started guide](https://graphql-ruby.org/guides/development/getting_started_md.html) declares object types and resolver classes in Ruby, connects them to a schema class with a query root, and runs queries with Schema.execute. On Rails, a generator adds that boilerplate and mounts GraphiQL in development.

## Worth knowing

The maintainer sells GraphQL::Pro, a separate gem under a special commercial license. The README describes it as providing several features on top of the GraphQL runtime, among them persisted queries, rate limiters and authorization plugins for Pundit and CanCan.
