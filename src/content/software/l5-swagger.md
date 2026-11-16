---
id: l5-swagger
name: L5 Swagger
urls:
  repository: https://github.com/DarkaOnLine/L5-Swagger
  docs: https://github.com/DarkaOnLine/L5-Swagger/wiki/Getting-Started
category:
  - backend
description: Laravel package that generates an OpenAPI document from swagger-php attributes and serves it with Swagger UI.
status: active
maintainer: Darius Matulionis
maintainerType: individual
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-11-09
githubStargazers: 2935
packagistDownloads: 44541051
contributors: 64
dependentRepos: 1783
dependentPackages: 91
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/DarkaOnLine/L5-Swagger
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/DarkaOnLine/L5-Swagger/wiki/Getting-Started
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/DarkaOnLine/L5-Swagger/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/DarkaOnLine/L5-Swagger
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/DarkaOnLine/L5-Swagger/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/DarkaOnLine/L5-Swagger/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/DarkaOnLine/L5-Swagger/blob/11.3.1/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/DarkaOnLine/L5-Swagger/blob/11.3.1/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/DarkaOnLine/L5-Swagger/wiki/Getting-Started
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/DarkaOnLine/L5-Swagger/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/DarkaOnLine/L5-Swagger/master/LICENSE
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/darkaonline/l5-swagger.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/darkaonline%2Fl5-swagger
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/darkaonline%2Fl5-swagger
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/DarkaOnLine/L5-Swagger/commits/v0.1
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/DarkaOnLine/L5-Swagger/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/DarkaOnLine/L5-Swagger/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/DarkaOnLine/L5-Swagger
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/DarkaOnLine/L5-Swagger/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
npmWeeklyDownloads: null
---

L5 Swagger is a Laravel package that generates an OpenAPI document from swagger-php attributes in a Laravel application and serves it through Swagger UI. It is installed with Composer and registers itself through Laravel's package discovery. The artisan generation command writes the document, which is then served at /api/documentation. The package does not define the specification itself: it packages swagger-php and swagger-ui for Laravel, and the attributes are written as swagger-php describes them.

## Worth knowing

The documentation routes have no middleware by default, so the generated documentation is public until authentication middleware is added to them in the configuration.
