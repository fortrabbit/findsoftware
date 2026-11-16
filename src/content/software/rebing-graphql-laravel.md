---
id: rebing-graphql-laravel
name: Laravel GraphQL
urls:
  repository: https://github.com/rebing/graphql-laravel
  docs: https://github.com/rebing/graphql-laravel/blob/master/README.md
category:
  - backend
description: Code-first GraphQL integration for Laravel, built on webonyx/graphql-php.
status: active
maintainer: Mikk Mihkel Nurges
maintainerType: individual
firstRelease: 2017
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
  - graphql-php
headlessApi:
  - graphql
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-11-09
githubStargazers: 2226
packagistDownloads: 9195419
contributors: 96
packagistMonthlyDownloads: 455530
dependentRepos: 434
dependentPackages: 21
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/rebing/graphql-laravel
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/rebing/graphql-laravel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/rebing/graphql-laravel/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/rebing/graphql-laravel/commits/v1.4
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/rebing/graphql-laravel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: headlessApi
    url: https://github.com/rebing/graphql-laravel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/rebing/graphql-laravel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/rebing/graphql-laravel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/rebing/graphql-laravel
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/rebing/graphql-laravel/10.2.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/rebing/graphql-laravel/10.2.0/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/rebing/graphql-laravel/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/rebing/graphql-laravel/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/rebing/graphql-laravel/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/rebing/graphql-laravel/releases/tag/10.2.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/rebing/graphql-laravel/releases/tag/10.2.0
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/rebing/graphql-laravel.json
    checkedAt: 2026-11-16
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/rebing/graphql-laravel.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/rebing/graphql-laravel
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/rebing/graphql-laravel/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/rebing%2Fgraphql-laravel
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/rebing%2Fgraphql-laravel
    checkedAt: 2026-11-16
ai: authored
npmWeeklyDownloads: null
---

Laravel GraphQL adds a code-first GraphQL server to a Laravel application. Types, queries and mutations are declared as PHP classes rather than in `.graphql` schema files, and each query or mutation is exposed as a request endpoint.

The package builds on webonyx/graphql-php, the PHP port of the GraphQL reference implementation. The [README](https://github.com/rebing/graphql-laravel/blob/master/README.md) covers multiple schemas, data loading with dataloaders or the optional SelectFields package, validation, authorization and automatic persisted queries.

## Worth knowing

GraphQL subscriptions are not supported. The README points to Lighthouse for real-time push.

Introspection is disabled by default in the configuration.
