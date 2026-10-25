---
id: doctum
name: Doctum
urls:
  home: https://doctum.long-term.support/
  repository: https://github.com/code-lts/doctum
  docs: https://github.com/code-lts/doctum#readme
category:
  - ssg
description: Command-line generator that builds API documentation from PHP source code and its phpdoc comments.
status: active
maintainer: Fabien Potencier and William Desportes
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
installMethod: phar download
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-02-06
githubStargazers: 361
packagistDownloads: 118115
packagistMonthlyDownloads: 26211
dependentRepos: 61
dependentPackages: 22
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://doctum.long-term.support/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/code-lts/doctum
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/code-lts/doctum/blob/main/README.rst
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/code-lts/doctum/blob/main/LICENSE
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/code-lts/doctum/blob/main/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://doctum.long-term.support/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/code-lts/doctum
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/code-lts/doctum.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/code-lts/doctum.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://doctum.long-term.support/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/code-lts/doctum
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/code-lts/doctum
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/code-lts/doctum/releases/tag/v5.6.0
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/code-lts/doctum/releases/latest
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/code-lts/doctum.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/code-lts/doctum.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/code-lts/doctum
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/code-lts%2Fdoctum
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/code-lts%2Fdoctum
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/code-lts/doctum/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Doctum reads PHP source code and its phpdoc comments and writes API documentation for a library. A configuration file returns a `Doctum\Doctum` object that points at the source directory and sets options such as the title, language and build directory. The tool is distributed as a single phar file, as the [homepage](https://doctum.long-term.support/) describes.

Doctum is a fork of Sami, a PHP API documentation generator, and its README states this. The [README](https://github.com/code-lts/doctum/blob/main/README.rst) also links a GitHub Action for use in GitHub CI.
