---
id: doorkeeper
name: Doorkeeper
urls:
  home: https://doorkeeper.gitbook.io/guides/
  repository: https://github.com/doorkeeper-gem/doorkeeper
  docs: https://doorkeeper.gitbook.io/guides/
category:
  - auth
description: OAuth 2 provider gem that adds authorization server functionality to Ruby on Rails and Grape applications.
status: active
maintainer: Applicake
firstRelease: 2011
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.7
basedOn:
  - rails
  - grape
adminUi: true
i18n: multiple languages
installMethod: Gemfile gem, then bundle install
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-09-24
githubStargazers: 5535
contributors: 283
dependentRepos: 5403
dependentPackages: 41
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: name
    url: https://github.com/doorkeeper-gem/doorkeeper/blob/main/README.md
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper
    checkedAt: 2026-11-08
  - field: urls
    url: https://github.com/doorkeeper-gem/doorkeeper/blob/main/README.md
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/doorkeeper.json
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/doorkeeper-gem/doorkeeper/blob/main/MIT-LICENSE
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/doorkeeper-gem/doorkeeper/blob/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper
    checkedAt: 2026-11-08
  - field: runtime
    url: https://raw.githubusercontent.com/doorkeeper-gem/doorkeeper/v5.9.9/doorkeeper.gemspec
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://raw.githubusercontent.com/doorkeeper-gem/doorkeeper/v5.9.9/doorkeeper.gemspec
    checkedAt: 2026-11-08
  - field: basedOn
    url: https://github.com/doorkeeper-gem/doorkeeper/blob/main/README.md
    checkedAt: 2026-11-08
  - field: adminUi
    url: https://doorkeeper.gitbook.io/guides/ruby-on-rails/customizing-views
    checkedAt: 2026-11-08
  - field: i18n
    url: https://doorkeeper.gitbook.io/guides/internals/internationalization-i18n
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://github.com/doorkeeper-gem/doorkeeper/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://github.com/doorkeeper-gem/doorkeeper/blob/main/README.md
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper/releases/tags/v5.9.9
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper/releases/tags/v5.9.9
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/doorkeeper-gem/doorkeeper/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/doorkeeper
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/doorkeeper
    checkedAt: 2026-11-08
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Doorkeeper adds OAuth 2 provider functionality to a Ruby on Rails application. It is a gem packaged as a Rails engine, added to the Gemfile and installed with Bundler, and it also supports Grape applications through a separate integration guide. Active Record is the default ORM; MongoDB, Sequel, Couchbase and RethinkDB are supported through separate extension gems that the project lists in its README.

The project was created at Applicake in 2011 and is maintained by the community.

## Worth knowing

The OpenID Connect layer is a separate extension gem and is not part of Doorkeeper itself, so an application that needs OpenID Connect installs that extension next to it.

Doorkeeper keeps expired and revoked tokens and grants in the database. The README says the token and grant tables grow indefinitely unless a bundled rake task prunes them periodically.
