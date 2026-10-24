---
id: shopsys
name: Shopsys Platform
urls:
  home: https://www.shopsys.com
  repository: https://github.com/shopsys/shopsys
  docs: https://docs.shopsys.com/en/latest/
category:
  - e-commerce
  - framework
description: E-commerce platform in PHP, built on Symfony, for B2C and B2B online stores.
status: active
maintainer: Shopsys s.r.o.
maintainerType: company
parent: ABUGO Group
hqCountry: CZ
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.5
basedOn:
  - symfony
databases:
  - postgres
adminUi: true
headlessApi:
  - graphql
i18n: yes, several currencies, languages and domains
installMethod: composer create-project
licenseModel: source-available
license: Shopsys Community License, Commercial License, proprietary
currentMajor: "19"
latestReleaseDate: 2026-05-28
githubStargazers: 351
packagistDownloads: 243267
contributors: 82
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://www.shopsys.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/shopsys/shopsys
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.shopsys.com/en/latest/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/LICENSE
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/LICENSE
    checkedAt: 2026-10-20
  - field: parent
    url: https://www.shopsys.com/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/README.md
    checkedAt: 2026-10-20
  - field: category
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/shopsys/shopsys
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.shopsys.com/en/latest/installation/application-requirements/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.shopsys.com/en/latest/installation/application-requirements/
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.shopsys.com/en/latest/installation/application-requirements/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/README.md
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://docs.shopsys.com/en/latest/frontend-api/introduction-to-frontend-api/
    checkedAt: 2026-10-20
  - field: i18n
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.shopsys.com/en/latest/installation/installation-guide/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.shopsys.com/en/latest/installation/installation-guide/
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/LICENSE
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/shopsys/shopsys/master/composer.json
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/shopsys/framework.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/shopsys/shopsys/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/shopsys/shopsys
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/shopsys/shopsys/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/shopsys/framework.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/shopsys/framework.json
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Shopsys Platform is an e-commerce platform built on Symfony for B2C and B2B online stores. It has a back-end administration, support for several currencies, languages and domains, and a GraphQL frontend API.

Running it needs PostgreSQL, Redis and Elasticsearch. The [installation guide](https://docs.shopsys.com/en/latest/installation/installation-guide/) covers a Composer project with Docker Compose, and the README names a Kubernetes manifest for orchestration.

## Worth knowing

The Shopsys Community License covers an instance until the orders it processes pass 3,000,000 EUR in any three-month period. The license for that instance then ends one month later unless a commercial license is agreed with Shopsys.
