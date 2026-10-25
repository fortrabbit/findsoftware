---
id: thunder
name: Thunder
urls:
  home: https://www.thunder.org
  repository: https://github.com/thunder/thunder-distribution
  docs: https://github.com/thunder/thunder-distribution/blob/8.4.x/docs/developer-guide/setup.md
category:
  - cms
description: Drupal distribution and content management system for professional publishers.
status: active
maintainer: BurdaVerlag GmbH
maintainerType: company
firstRelease: 2016
hqCountry: DE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - drupal
databases:
  - mysql
adminUi: true
headlessApi:
  - graphql
installMethod: composer create-project
licenseModel: open-source
license: GPL-2.0, GPL-2.0-or-later
currentMajor: "8"
latestReleaseDate: 2026-10-13
githubStargazers: 51
packagistDownloads: 688618
contributors: 23
packagistMonthlyDownloads: 9165
dependentRepos: 10
dependentPackages: 4
social:
  x: https://twitter.com/ThunderCoreTeam
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://www.thunder.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/thunder/thunder-distribution
    checkedAt: 2026-10-20
  - field: urls
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/docs/developer-guide/setup.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://thunder.org/node/231
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://thunder.org/node/231
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://thunder.org/about-thunder
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://www.thunder.org/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/thunder/thunder-distribution
    checkedAt: 2026-10-20
  - field: category
    url: https://www.thunder.org/
    checkedAt: 2026-10-20
  - field: category
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/README.md
    checkedAt: 2026-10-20
  - field: runtime
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/composer.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/docs/developer-guide/setup.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/docs/developer-guide/setup.md
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/docs/developer-guide/headless.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://www.thunder.org/
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/thunder/thunder-distribution.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/thunder/thunder-distribution.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/thunder/thunder-distribution
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/thunder/thunder-distribution/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/thunder/thunder-distribution.json
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/LICENSE.txt
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/thunder/thunder-distribution/8.4.x/composer.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/thunder%2Fthunder-distribution
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/thunder%2Fthunder-distribution
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/thunder/thunder-distribution/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Thunder is a Drupal distribution, an install profile that adds publishing features to Drupal for professional publishers. Projects are created with Composer, and the [setup guide](https://github.com/thunder/thunder-distribution/blob/8.4.x/docs/developer-guide/setup.md) covers local installation with Drush. The `thunder_gqls` module provides a GraphQL API for headless use. The Thunder Core Team maintains the project, and the imprint names BurdaVerlag GmbH in Munich as operator.

## Worth knowing

The setup guide describes its quick start as suited to trying Thunder locally, not production. As a distribution, Thunder needs everything Drupal itself requires.
