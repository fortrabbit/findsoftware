---
id: concrete-cms
name: Concrete CMS
urls:
  home: https://www.concretecms.com
  repository: https://github.com/concretecms/concretecms
  docs: https://documentation.concretecms.org
category:
  - cms
description: Open-source content management system for teams, written in PHP, with a built-in REST API and a MySQL or MariaDB database.
status: active
maintainer: PortlandLabs, Inc.
maintainerType: company
hqCountry: US
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.3
contentStore:
  - database
databases:
  - mysql
  - mariadb
headlessApi:
  - rest
runsAs:
  - per-request
installMethod: zip download, composer create-project
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-10-06
githubStargazers: 852
packagistDownloads: 179972
packagistMonthlyDownloads: 6927
httpArchiveSites: 4020
dependentRepos: 56
dependentPackages: 37
wikidata: Q1935459
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.concretecms.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.concretecms.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/concretecms/concretecms
    checkedAt: 2026-10-20
  - field: urls
    url: https://documentation.concretecms.org
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.concretecms.com/about/legal/privacy-policy
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://www.concretecms.com/about/legal/terms-use
    checkedAt: 2026-10-20
  - field: category
    url: https://www.concretecms.com
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/concretecms/concretecms
    checkedAt: 2026-10-20
  - field: runtime
    url: https://documentation.concretecms.org/9-x/developers/introduction/system-requirements
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://documentation.concretecms.org/9-x/developers/introduction/system-requirements
    checkedAt: 2026-10-20
  - field: databases
    url: https://documentation.concretecms.org/9-x/developers/introduction/system-requirements
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://documentation.concretecms.org/9-x/developers/introduction/installing-concrete-cms
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://documentation.concretecms.org/9-x/developers/rest-api/introduction
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://documentation.concretecms.org/9-x/developers/introduction/installing-concrete-cms
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://documentation.concretecms.org/9-x/developers/introduction/installing-concrete-cms
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/concretecms/concretecms
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/concretecms/concretecms/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/concretecms/concretecms/releases/latest
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/concrete5/core.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/concretecms/concretecms
    checkedAt: 2026-10-20
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q1935459
    checkedAt: 2026-10-20
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/concrete5%2Fcore
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/concrete5%2Fcore
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/concrete5/core/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Concrete CMS keeps its content in a MySQL or MariaDB database and exposes it through a built-in REST API that authenticates with OAuth2, as the [REST API introduction](https://documentation.concretecms.org/9-x/developers/rest-api/introduction) describes. The [installation guide](https://documentation.concretecms.org/9-x/developers/introduction/installing-concrete-cms) offers two paths: moving the zip archive into a web-accessible folder, or creating a project with Composer.

## Worth knowing

The system requirements page states a minimum PHP version for the current line that it also says is past end of life.
