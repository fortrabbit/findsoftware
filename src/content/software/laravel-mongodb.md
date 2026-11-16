---
id: laravel-mongodb
name: Laravel MongoDB
urls:
  home: https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/
  repository: https://github.com/mongodb/laravel-mongodb
  docs: https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/
category:
  - library
description: Laravel package that adds MongoDB support to Eloquent models and the query builder, using the Laravel API.
status: active
maintainer: MongoDB, Inc.
maintainerType: company
firstRelease: 2013
hqCountry: US
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
databases:
  - mongodb
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-11-13
githubStargazers: 7058
packagistDownloads: 10818048
contributors: 193
dependentRepos: 68
dependentPackages: 23
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mongodb/laravel-mongodb
    checkedAt: 2026-11-16
  - field: urls
    url: https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/LICENSE
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://www.mongodb.com/legal/terms-of-use
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mongodb/laravel-mongodb
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mongodb/laravel-mongodb/blob/5.12.1/LICENSE
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/get-started.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mongodb/laravel-mongodb/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mongodb/laravel-mongodb/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/mongodb/laravel-mongodb.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mongodb/laravel-mongodb
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mongodb/laravel-mongodb/contributors
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/mongodb/laravel-mongodb.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/mongodb%2Flaravel-mongodb
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/mongodb%2Flaravel-mongodb
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Laravel MongoDB is the official Laravel integration for MongoDB. It extends the Eloquent model and the query builder of the Laravel API so that models and queries use the same methods against a MongoDB datastore. The [documentation](https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/) says the package was formerly named jenssegers/mongodb and is now owned and maintained by MongoDB, Inc.

## Worth knowing

The get-started guide connects the application to a cluster on MongoDB Atlas, the vendor's hosted database service, with a connection string, and says a deployment not hosted on Atlas connects through connection strings as well. The guide also asks for the MongoDB PHP extension, which the package needs to manage connections.
