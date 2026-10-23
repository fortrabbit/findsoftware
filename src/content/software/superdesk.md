---
id: superdesk
name: Superdesk
urls:
  home: https://www.superdesk.org/
  repository: https://github.com/superdesk/superdesk
  docs: https://github.com/superdesk/superdesk/blob/v3.5/README.md
category:
  - headless-cms
description: Open-source newsroom system for creating, producing, curating and distributing news content, with a headless CMS API.
status: active
maintainer: Sourcefabric z.ú.
firstRelease: 2016
hqCountry: CZ
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.12
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
i18n: yes, the interface is available in multiple languages
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: AGPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-07-14
githubStargazers: 756
contributors: 53
social:
  x: https://twitter.com/sourcefabric
  forum: https://forum.sourcefabric.org/categories/superdesk-dev
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.superdesk.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/superdesk/superdesk
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/superdesk/superdesk/blob/v3.5/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.superdesk.org/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/superdesk/superdesk/blob/v3.5/README.md
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://www.superdesk.org/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/superdesk/superdesk/releases
    checkedAt: 2026-10-23
  - field: language
    url: https://www.superdesk.org/
    checkedAt: 2026-10-23
  - field: category
    url: https://www.superdesk.org/
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/superdesk/superdesk/blob/v3.5/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://www.superdesk.org/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://www.superdesk.org/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/superdesk/superdesk/blob/v3.5/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/superdesk/superdesk
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/superdesk/superdesk/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/superdesk/superdesk/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/superdesk/superdesk/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/superdesk/superdesk
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/superdesk/superdesk/contributors
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/superdesk/superdesk/blob/release/3.6/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/superdesk/superdesk/blob/release/3.6/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://www.superdesk.org/features
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/superdesk/superdesk/blob/v3.5/README.md
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Python · Headless CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Superdesk is a newsroom system for news creation, production, curation and distribution, with headless CMS functionality. It is built as a Python server and a separate web client: the server provides the API that processes all client requests, and the client provides the user interface. The [README](https://github.com/superdesk/superdesk/blob/v3.5/README.md) covers a Docker Compose start and a manual installation, and the interface is available in several languages.

## Worth knowing

The server is a process that has to keep running to serve requests, so Superdesk needs a host that runs a long-lived process rather than static files. The README lists MongoDB, Elasticsearch, Redis and Node.js as services to install first. Sourcefabric also offers cloud hosting, training and support next to the open source code.
