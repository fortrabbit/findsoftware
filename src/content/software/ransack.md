---
id: ransack
name: Ransack
urls:
  home: https://activerecord-hackery.github.io/ransack/
  repository: https://github.com/activerecord-hackery/ransack
  docs: https://activerecord-hackery.github.io/ransack/getting-started/
category:
  - search
description: Ruby gem that adds searching and sorting to Rails applications through search forms and query methods on ActiveRecord models.
status: active
maintainer: Sean Carroll
maintainerType: individual
firstRelease: 2011
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - rails
databases:
  - postgres
  - mysql
  - mariadb
  - sqlite
i18n: translation files for predicates and attribute names
installMethod: rubygems gem
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-25
githubStargazers: 5859
contributors: 219
social:
  forum: https://github.com/activerecord-hackery/ransack/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://activerecord-hackery.github.io/ransack/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/activerecord-hackery/ransack
    checkedAt: 2026-10-28
  - field: urls
    url: https://activerecord-hackery.github.io/ransack/getting-started/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/ransack.json
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/activerecord-hackery/ransack/master/README.md
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/activerecord-hackery/ransack/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/activerecord-hackery/ransack/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/activerecord-hackery/ransack/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/activerecord-hackery/ransack
    checkedAt: 2026-10-28
  - field: runtime
    url: https://activerecord-hackery.github.io/ransack/getting-started/
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/activerecord-hackery/ransack/v6.0.1/ransack.gemspec
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/activerecord-hackery/ransack
    checkedAt: 2026-10-28
  - field: license
    url: https://activerecord-hackery.github.io/ransack/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/activerecord-hackery/ransack/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/activerecord-hackery/ransack/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/activerecord-hackery/ransack
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/activerecord-hackery/ransack/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://activerecord-hackery.github.io/ransack/getting-started/
    checkedAt: 2026-10-28
  - field: databases
    url: https://activerecord-hackery.github.io/ransack/
    checkedAt: 2026-10-28
  - field: i18n
    url: https://activerecord-hackery.github.io/ransack/going-further/i18n/
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Ransack is a Ruby gem that adds searching and sorting to a Rails application. It is a library rather than a server: it runs inside the application and has no separate process or content store of its own.

The gem is added to the Gemfile and installed with bundle install. The project documents PostgreSQL, MySQL, MariaDB and SQLite as supported databases, ships translation files for predicate and attribute names, and the [getting started guide](https://activerecord-hackery.github.io/ransack/getting-started/) covers installation for the supported Rails and Ruby versions. Sean Carroll is named as a maintainer, with Deivid Rodriguez and Greg Molnar.
