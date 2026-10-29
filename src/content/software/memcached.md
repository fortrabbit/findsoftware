---
id: memcached
name: Memcached
urls:
  home: https://memcached.org
  repository: https://github.com/memcached/memcached
  docs: https://docs.memcached.org
category:
  - database
description: Distributed in-memory key-value cache daemon that applications use to store results of database and API calls.
status: active
maintainer: Danga Interactive, Inc.
maintainerType: company
firstRelease: 2003
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: apt package
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-07-09
githubStargazers: 14301
contributors: 199
social:
  discord: https://discord.gg/AuD7kJTdvS
  forum: https://groups.google.com/group/memcached
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://memcached.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://memcached.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/memcached/memcached
    checkedAt: 2026-10-29
  - field: urls
    url: https://memcached.org/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://github.com/memcached/memcached/blob/master/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://github.com/memcached/memcached/blob/master/LICENSE
    checkedAt: 2026-10-29
  - field: category
    url: https://memcached.org/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/memcached/memcached
    checkedAt: 2026-10-29
  - field: runtime
    url: https://memcached.org/downloads
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://memcached.org/
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://memcached.org/
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/memcached/memcached/blob/master/LICENSE
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://memcached.org/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.memcached.org/serverguide/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.memcached.org/serverguide/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.memcached.org/serverguide/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.memcached.org/serverguide/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.memcached.org/serverguide/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/memcached/memcached
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/memcached/memcached/contributors?per_page=1&anon=false
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://github.com/memcached/memcached/blob/master/ChangeLog
    checkedAt: 2026-10-29
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

Memcached is a distributed memory object caching system written in C. It runs as a daemon that keeps small key-value entries in RAM, which dynamic web applications use to reduce database load.

The install guide covers distribution packages for apt, yum and Homebrew, and a source build with make.

## Worth knowing

A source build needs the libevent development package.
