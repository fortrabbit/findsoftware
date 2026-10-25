---
id: typecho
name: Typecho
urls:
  home: https://typecho.org
  repository: https://github.com/typecho/typecho
  docs: https://docs.typecho.org
category:
  - cms
description: Blogging platform written in PHP, with a plugin and theme mechanism.
status: active
maintainer: Typecho 团队
maintainerType: community
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
databases:
  - mysql
  - mariadb
  - sqlite
  - postgres
adminUi: true
runsAs:
  - per-request
installMethod: download archive
licenseModel: open-source
license: GPL-2.0
currentMajor: "1"
latestReleaseDate: 2026-01-20
githubStargazers: 12449
contributors: 89
httpArchiveSites: 125
social:
  x: https://twitter.com/typecho
  forum: https://forum.typecho.org
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://typecho.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/typecho/typecho
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.typecho.org/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://typecho.org/about
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://typecho.org/about
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/typecho/typecho
    checkedAt: 2026-10-20
  - field: category
    url: https://docs.typecho.org/
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.typecho.org/guide/getting-started/requirements
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.typecho.org/guide/getting-started/requirements
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.typecho.org/guide/getting-started/requirements
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://docs.typecho.org/guide/getting-started/installation
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.typecho.org/guide/getting-started/installation
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://docs.typecho.org/guide/getting-started/requirements
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/typecho/typecho/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/typecho/typecho/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/typecho/typecho
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/typecho/typecho/contributors
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/typecho/typecho/master/LICENSE.txt
    checkedAt: 2026-10-20
  - field: license
    url: https://docs.typecho.org/
    checkedAt: 2026-10-20
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Typecho is a blogging platform in PHP with a plugin and theme mechanism. It is the successor to an earlier open-source blog engine, Magike, according to its about page. The release is a zip archive extracted into the web root of a PHP-capable server, and the installer then runs in the browser. The Typecho team maintains it, with the source on GitHub.

## Worth knowing

The [installation guide](https://docs.typecho.org/guide/getting-started/installation) says the master branch holds unreleased changes and is not for production sites. Use the tagged releases for a live site.
