---
id: api-platform
name: API Platform
urls:
  home: https://api-platform.com
  repository: https://github.com/api-platform/core
  docs: https://api-platform.com/docs/core/
category:
  - framework
  - backend
description: PHP framework for building REST and GraphQL web APIs, with a core library and integrations for Symfony and Laravel.
status: active
maintainer: Kévin Dunglas
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - symfony
headlessApi:
  - rest
  - graphql
installMethod: api-platform CLI (api-platform my-project --framework=symfony), or composer require api in a Symfony Flex project
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-16
githubStargazers: 2579
packagistDownloads: 55190953
contributors: 565
packagistMonthlyDownloads: 1236368
dependentRepos: 4312
dependentPackages: 254
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/api-platform/core
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/api-platform/core
    checkedAt: 2026-10-20
  - field: urls
    url: https://api-platform.com/docs/core/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/api-platform/core/blob/main/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://api-platform.com/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://api-platform.com/docs/core/getting-started/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/api-platform/core
    checkedAt: 2026-10-20
  - field: runtime
    url: https://api-platform.com/docs/core/getting-started/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://api-platform.com/docs/core/getting-started/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://api-platform.com/docs/core/getting-started/
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://api-platform.com/docs/core/getting-started/
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/api-platform/core
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/api-platform/core.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/api-platform/core/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/api-platform/core
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/api-platform/core/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/api-platform/core.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/api-platform%2Fcore
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/api-platform%2Fcore
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/api-platform/core/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

API Platform is a PHP framework for building web APIs with REST and GraphQL. Its core library is a Composer package that the [getting-started guide](https://api-platform.com/docs/core/getting-started/) installs as a standalone bundle in an existing Symfony Flex project. The API Platform CLI creates a new project from the Symfony edition, which bundles the core library with Doctrine ORM. The homepage states that Les-Tilleuls.coop sponsors the project.

## Worth knowing

A separate integration, API Platform for Laravel, has its own documentation and is not part of this record.
