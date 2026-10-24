---
id: ibexa-dxp
name: Ibexa DXP OSS
urls:
  home: https://ibexa.ai/en
  repository: https://github.com/ibexa/oss
  docs: https://doc.ibexa.co/en/latest/
category:
  - cms
description: PHP content management and digital experience platform, the open source edition of Ibexa DXP, built on Symfony.
status: active
maintainer: Ibexa AS
hqCountry: NO
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - symfony
contentStore:
  - database
databases:
  - mysql
  - mariadb
adminUi: true
headlessApi:
  - rest
  - graphql
runsAs:
  - per-request
  - scheduled
installMethod: composer create-project
licenseModel: open-core
license: GPL-2.0, Ibexa BUL 2.4 or later
currentMajor: "5"
latestReleaseDate: 2026-08-20
githubStargazers: 21
packagistDownloads: 16553
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://ibexa.ai/en
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/ibexa/oss
    checkedAt: 2026-10-20
  - field: urls
    url: https://doc.ibexa.co/en/latest/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/LICENSE
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://ibexa.ai/en/contact
    checkedAt: 2026-10-20
  - field: language
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/composer.json
    checkedAt: 2026-10-20
  - field: category
    url: https://doc.ibexa.co/en/latest/getting_started/install_ibexa_dxp/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/composer.json
    checkedAt: 2026-10-20
  - field: runtime
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/composer.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://doc.ibexa.co/en/latest/getting_started/install_ibexa_dxp/
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://doc.ibexa.co/en/latest/getting_started/install_ibexa_dxp/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/composer.json
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/composer.json
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://doc.ibexa.co/en/latest/getting_started/install_ibexa_dxp/
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/LICENSE
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/ibexa/oss/v5.0.10/LICENSE
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://doc.ibexa.co/en/latest/
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/ibexa/oss/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/ibexa/oss
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/ibexa/oss-skeleton.json
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Ibexa DXP OSS is the open source distribution of Ibexa DXP, a content management and digital experience platform written in PHP and built on Symfony. It is installed with Composer from the ibexa/oss-skeleton project, stores its content in MySQL or MariaDB, and offers an admin interface with REST and GraphQL APIs. The [installation guide](https://doc.ibexa.co/en/latest/getting_started/install_ibexa_dxp/) lists the server stack and the Composer steps.

## Worth knowing

The repository is licensed under two statements: GPL version 2, and the Ibexa Business Use License Agreement, which the LICENSE file says is granted with a valid Ibexa DXP subscription. Ibexa also sells the Headless, Experience and Commerce [editions](https://doc.ibexa.co/en/latest/ibexa_products/editions/) of the same platform. Production installs run on Linux only, and the site needs a cron job that runs `ibexa:cron:run` every minute.
