---
id: cockpit
name: Cockpit
urls:
  home: https://getcockpit.com
  repository: https://github.com/Cockpit-HQ/Cockpit
  docs: https://getcockpit.com/documentation
category:
  - headless-cms
description: Self-hosted headless content management system with a REST and GraphQL API and an administration panel.
status: active
maintainer: Agentejo
hqCountry: DE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
databases:
  - sqlite
  - mongodb
adminUi: true
headlessApi:
  - rest
  - graphql
runsAs:
  - per-request
installMethod: archive download, docker
licenseModel: open-core
license: MIT, MIT
currentMajor: "2"
latestReleaseDate: 2026-08-26
githubStargazers: 751
packagistDownloads: 205
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://getcockpit.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://getcockpit.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/Cockpit-HQ/Cockpit
    checkedAt: 2026-10-20
  - field: urls
    url: https://getcockpit.com/documentation
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://getcockpit.com/imprint
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://getcockpit.com/imprint
    checkedAt: 2026-10-20
  - field: category
    url: https://getcockpit.com
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/Cockpit-HQ/Cockpit/blob/develop/composer.json
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/Cockpit-HQ/Cockpit/blob/develop/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://getcockpit.com/documentation/core/quickstart/requirements
    checkedAt: 2026-10-20
  - field: databases
    url: https://getcockpit.com/documentation/core/quickstart/requirements
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://getcockpit.com
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://getcockpit.com/documentation/core/quickstart/installation
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://getcockpit.com/documentation/core/quickstart/installation
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://getcockpit.com/documentation/core/quickstart/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://getcockpit.com/license
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/Cockpit-HQ/Cockpit/contents/LICENSE
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/Cockpit-HQ/Cockpit/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/Cockpit-HQ/Cockpit/releases/latest
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/cockpit-hq/cockpit.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/Cockpit-HQ/Cockpit
    checkedAt: 2026-10-20
figure:
  emoji: 🔌
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · Headless CMS
ai: authored
npmWeeklyDownloads: null
---

Cockpit is a headless content management system: editors manage content in an administration panel, with role-based permissions, and other applications read it through the REST and GraphQL APIs. Content sits in SQLite by default, with MongoDB as an alternative. The [installation guide](https://getcockpit.com/documentation/core/quickstart/installation) deploys the files into a web server's root directory or runs the Docker image.

The [legacy repository README](https://github.com/agentejo/cockpit/blob/next/README.md) says Cockpit's next iteration moved to the Cockpit organization on GitHub, which hosts this codebase.

## Worth knowing

Cockpit Pro is sold under its own license agreement with Agentejo, separate from the MIT-licensed core.
