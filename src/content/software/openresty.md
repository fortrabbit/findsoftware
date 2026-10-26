---
id: openresty
name: OpenResty
urls:
  home: https://openresty.org/
  repository: https://github.com/openresty/openresty
category:
  - web-server
description: Bundle of the nginx core, third-party nginx modules and LuaJIT for building scriptable web applications.
status: active
maintainer: OpenResty Inc.
maintainerType: company
firstRelease: 2011
language: c
runtime:
  - lua
hosting:
  - lua
basedOn:
  - nginx
runsAs:
  - always-on
renderingModes:
  - server
installMethod: brew install openresty/brew/openresty, binary packages or source build
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "1"
latestReleaseDate: 2026-10-26
githubStargazers: 14100
contributors: 38
social:
  forum: https://forum.openresty.us/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://github.com/openresty/openresty/blob/master/README.markdown
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/openresty/openresty
    checkedAt: 2026-10-26
  - field: description
    url: https://github.com/openresty/openresty/blob/master/README.markdown
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://openresty.org/en/
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://openresty.org/en/
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/openresty/openresty/blob/master/README.markdown
    checkedAt: 2026-10-26
  - field: category
    url: https://openresty.org/en/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/openresty/openresty
    checkedAt: 2026-10-26
  - field: runtime
    url: https://openresty.org/en/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/openresty/openresty/blob/master/README.markdown
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://openresty.org/en/getting-started.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://openresty.org/en/installation.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/openresty/openresty/blob/master/README.markdown
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/openresty/openresty/blob/master/README.markdown
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://openresty.org/en/changelog-1000004.html
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/openresty/openresty/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://openresty.org/en/download.html
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/openresty/openresty
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/openresty/openresty/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
packagistDownloads: null
npmWeeklyDownloads: null
---

OpenResty is a web platform that bundles the nginx core, a set of third-party nginx modules and their dependencies into one build, and adds LuaJIT so that request handling can be scripted in Lua. The bundle is written in C and maintained by OpenResty Inc. It runs as a long-lived nginx process that is started with its own configuration file.

Installation is through Homebrew, through binary packages for Linux distributions, or by building the source, as the [installation page](https://openresty.org/en/installation.html) describes. The [project homepage](https://openresty.org/) presents it as a web platform built on Nginx and LuaJIT.
