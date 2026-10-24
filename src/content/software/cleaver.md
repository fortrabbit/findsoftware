---
id: cleaver
name: Cleaver
urls:
  home: https://usecleaver.com
  repository: https://github.com/aschmelyun/cleaver
  docs: https://usecleaver.com/docs
category:
  - ssg
description: PHP static site generator that builds HTML sites from JSON or Markdown content files with Laravel's Blade templates.
status: stub
maintainer: Andrew Schmelyun
maintainerType: individual
firstRelease: 2019
language: php
runtime:
  - php
  - node
hosting:
  - static
runtimeMin: php 7.2
contentStore:
  - flat-file
templating: blade
runsAs:
  - static
renderingModes:
  - static
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-08-28
githubStargazers: 297
packagistDownloads: 1031
contributors: 4
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://usecleaver.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/aschmelyun/cleaver
    checkedAt: 2026-10-20
  - field: urls
    url: https://usecleaver.com/docs
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/aschmelyun/cleaver/blob/main/LICENSE.md
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/aschmelyun/cleaver.json
    checkedAt: 2026-10-20
  - field: category
    url: https://usecleaver.com
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/aschmelyun/cleaver
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/aschmelyun/cleaver/blob/v1.6.4/composer.json
    checkedAt: 2026-10-20
  - field: runtime
    url: https://usecleaver.com/docs
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/aschmelyun/cleaver/blob/v1.6.4/composer.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://usecleaver.com
    checkedAt: 2026-10-20
  - field: templating
    url: https://usecleaver.com
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://usecleaver.com
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://usecleaver.com
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://usecleaver.com
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/aschmelyun/cleaver
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/aschmelyun/cleaver.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/aschmelyun/cleaver/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/aschmelyun/cleaver
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/aschmelyun/cleaver/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/aschmelyun/cleaver.json
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Cleaver renders its pages with Laravel's Blade templating engine, from content kept in JSON or Markdown files. The HTML is written to a `dist` directory inside the project, and the output is plain files that a static host can serve.

The project is created with `composer create-project`. Building a site needs Node as well as PHP, according to the [documentation](https://usecleaver.com/docs).
