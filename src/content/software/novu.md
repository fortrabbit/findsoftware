---
id: novu
name: Novu
urls:
  home: https://novu.co
  repository: https://github.com/novuhq/novu
  docs: https://docs.novu.co
  pricing: https://novu.co/pricing
category:
  - email
description: Open-source notification infrastructure with one API for sending messages across in-app inbox, email, SMS, push and chat channels, self-hostable or available as a cloud service.
status: active
maintainer: Noti-fire Apps Ltd.
maintainerType: company
firstRelease: 2021
hqCountry: IL
language: javascript
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: MIT, Novu Proprietary Software License (enterprise folder)
currentMajor: "3"
latestReleaseDate: 2026-08-07
githubStargazers: 40254
contributors: 377
social:
  x: https://twitter.com/novuhq
  discord: https://discord.novu.co
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://novu.co/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/novuhq/novu
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.novu.co/
    checkedAt: 2026-11-03
  - field: urls
    url: https://novu.co/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/novuhq/novu/blob/next/LICENSE-MIT
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/novuhq/novu/blob/next/LICENSE-MIT
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://novu.co/privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/novuhq/novu/blob/next/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/novuhq/novu
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/novuhq/novu/blob/next/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/novuhq/novu/blob/next/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/novuhq/novu/blob/next/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/novuhq/novu/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/novuhq/novu/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/novuhq/novu/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/novuhq/novu
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/novuhq/novu/contributors
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.novu.co/community/run-in-local-machine
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.novu.co/community/run-in-local-machine
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/novuhq/novu/blob/next/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.novu.co/community/self-hosting-novu/deploy-with-docker
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.novu.co/community/self-hosting-novu/deploy-with-docker
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.novu.co/api-reference
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Novu is notification infrastructure that an application calls through one API to send messages across in-app inbox, email, SMS, push and chat channels. It has a web dashboard and an embeddable React inbox component. It runs as a self-hosted stack from Docker Compose or as Novu Cloud, and the self-hosted stack stores its data in MongoDB with Redis for queues. The [documentation](https://docs.novu.co) covers both.

## Worth knowing

The repository is open core: the core is under the MIT license, and the enterprise folder is under a commercial license. The cloud comparison table lists single sign-on, role-based access control, multi-factor authentication and workflow translations for Novu Cloud and not for the community self-hosted edition.
