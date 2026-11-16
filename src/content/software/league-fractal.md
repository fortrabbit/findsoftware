---
id: league-fractal
name: Fractal
urls:
  home: https://fractal.thephpleague.com/
  repository: https://github.com/thephpleague/fractal
  docs: https://fractal.thephpleague.com/
category:
  - backend
  - library
description: PHP library that transforms complex data into structured API output, with serializers for formats such as JSON-API.
status: active
maintainer: Phil Sturgeon
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
installMethod: composer, autoloader without Composer
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-12-16
githubStargazers: 3540
packagistDownloads: 72720052
contributors: 77
dependentRepos: 6650
dependentPackages: 583
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://fractal.thephpleague.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/thephpleague/fractal
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/thephpleague/fractal/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/thephpleague/fractal/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Ffractal
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/thephpleague/fractal
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/thephpleague/fractal/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/thephpleague/fractal/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/thephpleague/fractal/blob/0.21/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://fractal.thephpleague.com/installation/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://fractal.thephpleague.com/installation/
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/league/fractal.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Ffractal
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Ffractal
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/thephpleague/fractal
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/thephpleague/fractal/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/thephpleague/fractal/releases/tag/0.21
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/thephpleague/fractal/releases/tag/0.21
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/thephpleague/fractal
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/thephpleague/fractal/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
npmWeeklyDownloads: null
---

Fractal is a PHP library that turns the data an application holds into the output an API sends. Each resource passes through a transformer class, which sets the shape of the output in one place, so a change to the underlying data does not change what clients receive. A serializer then sets how the transformed data is structured, and the library ships serializers for a plain data array and for JSON-API. Collections can carry pagination information through adapters for Laravel's pagination package, Pagerfanta, Laminas and others.
