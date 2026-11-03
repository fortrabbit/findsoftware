---
id: tirreno
name: tirreno
urls:
  home: https://www.tirreno.com
  repository: https://github.com/tirrenotechnologies/tirreno
  docs: https://tirreno.com/devs/
  pricing: https://www.tirreno.com/pricing/
category:
  - analytics
description: Self-hosted PHP and PostgreSQL framework that receives event data from a site or application through its sensor endpoint and scores risk, with a built-in dashboard and blacklist API.
status: active
maintainer: Tirreno Technologies Sàrl
firstRelease: 2025
hqCountry: CH
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
databases:
  - postgres
adminUi: true
runsAs:
  - scheduled
  - per-request
installMethod: docker compose from the tirreno.com compose file
licenseModel: open-core
license: AGPL-3.0, Commercial (Enterprise license)
currentMajor: "0"
latestReleaseDate: 2026-08-15
githubStargazers: 1562
packagistDownloads: 46
contributors: 8
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.tirreno.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://tirreno.com/devs/hellodocs-2.html
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/tirrenotechnologies/tirreno
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.tirreno.com/imprint/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.tirreno.com/imprint/
    checkedAt: 2026-11-03
  - field: category
    url: https://www.tirreno.com/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/tirrenotechnologies/tirreno
    checkedAt: 2026-11-03
  - field: runtime
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://repo.packagist.org/p2/tirreno/tirreno.json
    checkedAt: 2026-11-03
  - field: databases
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.tirreno.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.tirreno.com/pricing/
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/tirrenotechnologies/tirreno/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://www.tirreno.com/pricing/
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.tirreno.com/pricing/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/tirrenotechnologies/tirreno/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/tirrenotechnologies/tirreno/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/tirrenotechnologies/tirreno/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/tirrenotechnologies/tirreno
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/tirrenotechnologies/tirreno/contributors
    checkedAt: 2026-11-03
  - field: packagistDownloads
    url: https://packagist.org/packages/tirreno/tirreno.json
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

tirreno is a self-hosted security framework that an application feeds with events through a sensor endpoint, which the application's code calls on each event. It scores risk and offers a blacklist search API. The application is written in PHP, stores its data in PostgreSQL and has a built-in dashboard with role-based access for operators. It installs with Docker Compose, with Composer, or by extracting an archive onto a PHP web server, and a cron job runs its background processing. Tirreno Technologies Sàrl, based in Switzerland, develops it under the AGPLv3 license.

## Worth knowing

A commercial Enterprise Edition and a White-label edition sit beside the open source Community Edition. The pricing page lists audit logging, role management, webhooks and API access as features the paid editions add.
