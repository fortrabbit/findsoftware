---
id: glide
name: Glide
urls:
  home: https://glide.thephpleague.com/
  repository: https://github.com/thephpleague/glide
  docs: https://glide.thephpleague.com/
category:
  - media
description: PHP library that resizes, crops and applies effects to images on demand through an HTTP API.
status: active
maintainer: Jonathan Reinink
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
installMethod: composer require league/glide
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-10
githubStargazers: 2629
packagistDownloads: 56591903
contributors: 53
dependentRepos: 6236
dependentPackages: 106
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://glide.thephpleague.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/thephpleague/glide
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/thephpleague/glide/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/thephpleague/glide/blob/4.2.0/composer.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/thephpleague/glide/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/thephpleague/glide/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/thephpleague/glide
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/thephpleague/glide/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/thephpleague/glide/blob/4.2.0/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/thephpleague/glide/blob/4.2.0/composer.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://glide.thephpleague.com/4.0/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://glide.thephpleague.com/4.0/installation/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/thephpleague/glide/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/thephpleague/glide/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/thephpleague/glide/releases
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/league/glide.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Fglide
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Fglide
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/thephpleague/glide
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/thephpleague/glide/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Glide is a PHP library that produces resized, cropped and filtered copies of images when they are requested. An image link carries its manipulation parameters in the query string, such as a width, a height and a fit mode. The Glide server reads the original from a source file system, writes the result to a cache and returns it. The source and cache can be local directories or Flysystem adapters. The installation page lists adapters for several PHP frameworks, and Composer installs the base library.

## Worth knowing

The GD library is the default image driver, and Imagick or libvips can be selected instead. The simple example leaves out HTTP signatures for brevity and says that securing images matters in production.
