---
id: openmage
name: OpenMage LTS
urls:
  home: https://www.openmage.org
  repository: https://github.com/OpenMage/magento-lts
  docs: https://docs.openmage.org/
category:
  - e-commerce
description: Community-maintained PHP e-commerce platform that continues the Magento 1 Community Edition codebase with security patches and bug fixes.
status: active
maintainer: OpenMage
maintainerType: community
firstRelease: 2019
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
databases:
  - mysql
  - mariadb
adminUi: true
runsAs:
  - per-request
installMethod: composer
licenseModel: open-source
license: OSL-3.0, AFL-3.0
currentMajor: "20"
latestReleaseDate: 2026-05-04
githubStargazers: 932
packagistDownloads: 259392
contributors: 212
packagistMonthlyDownloads: 5715
dependentRepos: 31
dependentPackages: 21
social:
  x: https://twitter.com/OpenMageProject
  mastodon: https://phpc.social/@OpenMageProject
  discord: https://discord.com/invite/EV8aNbU
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.openmage.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/OpenMage/magento-lts
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/OpenMage/magento-lts
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/OpenMage/magento-lts/blob/main/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.openmage.org
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://www.openmage.org/openmage/install.html
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://www.openmage.org/supported-versions.html
    checkedAt: 2026-10-20
  - field: category
    url: https://www.openmage.org
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/OpenMage/magento-lts
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/OpenMage/magento-lts/blob/v20.18.0/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/OpenMage/magento-lts/blob/v20.18.0/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://www.openmage.org/openmage/install.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://docs.openmage.org/users/install/use-composer/
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/OpenMage/magento-lts/blob/main/docs/content/users/requirements.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://www.openmage.org/partners/index.html
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/OpenMage/magento-lts
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/OpenMage/magento-lts/blob/main/README.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/OpenMage/magento-lts/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/OpenMage/magento-lts/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/OpenMage/magento-lts
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/OpenMage/magento-lts/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/openmage/magento-lts.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/openmage%2Fmagento-lts
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/openmage%2Fmagento-lts
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/openmage/magento-lts/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

OpenMage LTS is a PHP e-commerce platform that continues the codebase of Magento Community Edition 1. The [install page](https://www.openmage.org/openmage/install.html) calls it a community-supported fork of Magento CE, and its public GitHub repository accepts community pull requests for bug fixes and security patches.

The [Composer install guide](https://docs.openmage.org/users/install/use-composer/) is the documented route. The application runs as ordinary PHP requests on a web server, stores its data in MySQL or MariaDB, and has the Magento-derived admin interface as its back end.
