---
id: syro
name: Syro
urls:
  home: https://soveran.github.io/syro/
  repository: https://github.com/soveran/syro
  docs: https://github.com/soveran/syro/blob/master/README.md
category:
  - library
description: Simple router for web applications, written in Ruby and distributed as a gem.
status: stub
maintainer: Michel Martens
maintainerType: individual
firstRelease: 2015
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runsAs:
  - always-on
installMethod: gem install
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2021-03-21
githubStargazers: 137
contributors: 10
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://soveran.github.io/syro/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/soveran/syro
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/soveran/syro/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/soveran/syro/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/soveran/syro
    checkedAt: 2026-10-26
  - field: runtime
    url: https://files.soveran.com/syro/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/soveran/syro/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://files.soveran.com/syro/ch12.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/soveran/syro/blob/master/syro.gemspec
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/soveran/syro
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/soveran/syro/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/soveran/syro/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/syro.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/soveran/syro/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/syro.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/soveran/syro
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/soveran/syro/contributors
    checkedAt: 2026-10-26
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

Syro is a router for Ruby web applications, installed as the syro gem. Applications are written as a block that matches the request path and method with methods such as `on`, `get` and `post`, and sub-applications are mounted with `run`. The [README](https://github.com/soveran/syro/blob/master/README.md) describes its design as inspired by modular Cuba applications and places the library in the tradition of Rum and Cuba. The tutorial starts an application with `rackup` from a `config.ru` file.

## Worth knowing

Syro provides routing only. The README states that it has no security features, no rendering features and no Rack middleware support out of the box, so a framework or application built on it supplies those itself.
