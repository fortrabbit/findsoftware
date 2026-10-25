---
id: daux
name: Daux.io
urls:
  home: https://daux.io/
  repository: https://github.com/dauxio/daux.io
  docs: https://daux.io/Getting_Started.html
category:
  - ssg
description: Documentation generator that builds websites from a folder of Markdown files.
status: active
maintainer: Justin Walsh
language: php
runtime:
  - php
hosting:
  - php
  - static
runtimeMin: php 8.4
contentStore:
  - flat-file
i18n: multiple languages
runsAs:
  - static
  - per-request
renderingModes:
  - static
installMethod: composer global require, docker
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-10
githubStargazers: 830
packagistDownloads: 211056
packagistMonthlyDownloads: 3396
dependentRepos: 21
dependentPackages: 3
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://daux.io/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/dauxio/daux.io
    checkedAt: 2026-10-20
  - field: urls
    url: https://daux.io/Getting_Started.html
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/dauxio/daux.io/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://daux.io/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/dauxio/daux.io
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/daux/daux.io.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/daux/daux.io.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://daux.io/Getting_Started.html
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://daux.io/Features/Static_Site_Generation.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://daux.io/Features/Static_Site_Generation.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://daux.io/Features/Live_mode.html
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://daux.io/Getting_Started.html
    checkedAt: 2026-10-20
  - field: i18n
    url: https://daux.io/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/dauxio/daux.io
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/dauxio/daux.io/releases/tag/0.26.0
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/dauxio/daux.io/releases/latest
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/daux/daux.io.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/dauxio/daux.io
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/daux%2Fdaux.io
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/daux%2Fdaux.io
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/daux/daux.io/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Daux.io is a PHP documentation generator. It reads Markdown files from a `docs` folder, builds the navigation from the folder structure, and is installed with Composer or run from a Docker image. The [getting started guide](https://daux.io/Getting_Started.html) describes writing pages and running `daux generate`.

The content stays in the Markdown files, and the same source can be written out as a set of static files, or served live by a web server that runs PHP for each request.

## Worth knowing

The [live mode page](https://daux.io/Features/Live_mode.html) says live mode can be used for production but is not recommended. It scans the whole documentation directory on each request, which can become a bottleneck on larger documentation sets.
