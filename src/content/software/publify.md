---
id: publify
name: Publify
urls:
  home: https://publify.github.io/
  repository: https://github.com/publify/publify
category:
  - cms
description: Blogging and web publishing software built on Ruby on Rails, formerly known as Typo.
status: active
maintainer: Publify
firstRelease: 2004
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
contentStore:
  - database
databases:
  - mysql
  - postgres
  - sqlite
adminUi: true
i18n: yes
runsAs:
  - always-on
installMethod: release archive
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-10-23
githubStargazers: 1855
contributors: 72
social:
  x: https://twitter.com/getpublify
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/publify/publify
    checkedAt: 2026-10-26
  - field: urls
    url: https://publify.github.io/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://publify.github.io/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/publify/publify
    checkedAt: 2026-10-26
  - field: runtime
    url: https://api.github.com/repos/publify/publify/releases/tags/v11.0.0
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://api.github.com/repos/publify/publify/releases/tags/v11.0.0
    checkedAt: 2026-10-26
  - field: category
    url: https://publify.github.io/
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/publify/publify/blob/master/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/publify/publify/blob/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://publify.github.io/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://publify.github.io/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/publify/publify/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/publify/publify/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/publify/publify/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/publify/publify
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/publify/publify/master/MIT-LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://publify.github.io/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/publify/publify/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/publify/publify/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/publify/publify
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/publify/publify/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Publify is blogging and web publishing software built on Ruby on Rails. It was previously named Typo. The application runs as a Rails server: the project's Heroku instructions start it with Puma through a Procfile, and a local install runs `bundle install` and then `rails server`. Content is kept in MySQL, PostgreSQL or SQLite, and the admin area sits behind a login. The [homepage](https://publify.github.io/) says the software is translated into several languages.

## Worth knowing

The install steps in the README describe Rails 5.2 and older Ruby versions, so they predate the current release. The runtime recorded here comes from the release notes of the current major version instead.
