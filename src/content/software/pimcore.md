---
id: pimcore
name: Pimcore
urls:
  home: https://pimcore.com/
  repository: https://github.com/pimcore/pimcore
  docs: https://docs.pimcore.com/platform/
  pricing: https://pimcore.com/en/pricing
category:
  - cms
description: Open-core PHP platform for product experience management, combining PIM, DAM, CMS and digital commerce modules.
status: active
maintainer: Pimcore GmbH
maintainerType: company
hqCountry: AT
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
databases:
  - mysql
  - mariadb
adminUi: true
headlessApi:
  - rest
  - graphql
templating: twig
i18n: yes
renderingModes:
  - server
installMethod: Docker-based installer for the pimcore/skeleton or pimcore/demo-enterprise package
licenseModel: source-available
license: Pimcore Open Core License (POCL), proprietary
latestReleaseDate: 2026-10-13
githubStargazers: 3879
packagistDownloads: 4114254
contributors: 777
packagistMonthlyDownloads: 68830
httpArchiveSites: 2349
dependentRepos: 308
dependentPackages: 316
social:
  forum: https://github.com/orgs/pimcore/discussions
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://pimcore.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/pimcore/pimcore
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.pimcore.com/platform/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/LICENSE.md
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/LICENSE.md
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/pimcore/pimcore/languages
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/composer.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/README.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/README.md
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/README.md
    checkedAt: 2026-10-20
  - field: templating
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/README.md
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/README.md
    checkedAt: 2026-10-20
  - field: i18n
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.pimcore.com/platform/Getting_Started/Installation/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/pimcore/pimcore/blob/v2026.3.2/LICENSE.md
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/pimcore/pimcore.json
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://docs.pimcore.com/platform/Pimcore_Platform/Pimcore_Editions/
    checkedAt: 2026-10-20
  - field: urls
    url: https://pimcore.com/en/pricing
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/pimcore/pimcore/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/pimcore/pimcore
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/pimcore/pimcore/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/pimcore/pimcore
    checkedAt: 2026-10-20
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/pimcore%2Fpimcore
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/pimcore%2Fpimcore
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/pimcore/pimcore/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Pimcore is an open-core PHP platform for product experience management, combining PIM, DAM, CMS and digital commerce modules around a core framework. Pimcore Studio is the administration interface. Pages are rendered on the server with Twig templates and inline editables, and REST and GraphQL APIs through Datahub deliver the same data to other frontends. Data is stored in MySQL or MariaDB.

The [installation guide](https://docs.pimcore.com/platform/Getting_Started/Installation/) describes a Docker-based installer for the skeleton or demo package.

## Worth knowing

The core is licensed under the Pimcore Open Core License, not an open-source license. Free production use depends on an organization's annual revenue staying under a threshold set in the license, and the license does not allow offering the software as a hosted or managed service. The [editions page](https://docs.pimcore.com/platform/Pimcore_Platform/Pimcore_Editions/) lists the commercial editions, which add modules and require a subscription.
