---
id: opnform
name: OpnForm
urls:
  home: https://opnform.com
  repository: https://github.com/OpnForm/OpnForm
  docs: https://docs.opnform.com
  pricing: https://opnform.com/pricing
category:
  - forms
description: Open source form builder for forms with logic, file uploads and submissions, offered as a managed cloud service and for self-hosting with Docker.
status: active
maintainer: OpnForm
firstRelease: 2023
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
databases:
  - mysql
  - postgres
  - sqlite
headlessApi:
  - rest
i18n: form language for validation messages
runsAs:
  - always-on
  - scheduled
installMethod: git clone and Docker setup script
licenseModel: open-core
license: AGPL-3.0-or-later, OpnForm Enterprise Edition (EE) license, MIT
currentMajor: "2"
latestReleaseDate: 2026-11-02
githubStargazers: 3977
contributors: 36
social:
  x: https://twitter.com/OpnForm
  discord: https://discord.gg/YTSjU2a9TS
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://opnform.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/OpnForm/OpnForm
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/OpnForm/OpnForm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/OpnForm/OpnForm/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/OpnForm/OpnForm
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.opnform.com/tech-stack
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/OpnForm/OpnForm/blob/v2.8.2/api/composer.json
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/OpnForm/OpnForm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.opnform.com/tech-stack
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/OpnForm/OpnForm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.opnform.com/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.opnform.com/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.opnform.com/deployment
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/OpnForm/OpnForm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/OpnForm/OpnForm/blob/main/api/app/Enterprise/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/OpnForm/OpnForm/blob/v2.8.2/api/composer.json
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/OpnForm/OpnForm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.opnform.com/api-reference/introduction
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/OpnForm/OpnForm/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/OpnForm/OpnForm/releases/tag/v2.8.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/OpnForm/OpnForm/releases/tag/v2.8.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/OpnForm/OpnForm/releases/tag/v1.0.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/OpnForm/OpnForm
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/OpnForm/OpnForm/contributors
    checkedAt: 2026-11-03
  - field: urls
    url: https://opnform.com/pricing
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
templating: null
renderingModes: null
npmWeeklyDownloads: null
---

OpnForm is an open source form builder, offered as a managed cloud service and as self-hosted software. The self-hosted version runs as Docker containers that include an API worker for queued jobs and an API scheduler for periodic tasks. Forms and submissions can be managed through a REST API, and a JavaScript SDK controls forms embedded in a site.

## Worth knowing

The core is licensed AGPL-3.0 or later, and the code under the api/app/Enterprise directory carries a separate proprietary license. The self-hosted license page says OIDC single sign-on works in the free install within a two-user limit across the instance, while SAML and LDAP need the Enterprise license.
