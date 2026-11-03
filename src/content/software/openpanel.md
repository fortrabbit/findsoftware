---
id: openpanel
name: OpenPanel
urls:
  home: https://openpanel.dev
  repository: https://github.com/Openpanel-dev/openpanel
  docs: https://openpanel.dev/docs
  pricing: https://openpanel.dev/pricing
category:
  - analytics
description: Open source web, product and AI analytics platform, offered as a cloud service and as self-hosted software run with Docker Compose.
status: active
maintainer: OpenPanel AB
maintainerType: company
firstRelease: 2024
hqCountry: SE
language: javascript
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
installMethod: git clone of the self-hosting branch, then setup script (Docker Compose)
licenseModel: open-source
license: AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-08-18
githubStargazers: 7244
contributors: 44
social:
  x: https://x.com/openpaneldev
  discord: https://go.openpanel.dev/discord
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://openpanel.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: urls
    url: https://openpanel.dev/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://openpanel.dev/terms
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://openpanel.dev/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://openpanel.dev/terms
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openpanel.dev/docs/self-hosting/v2/deploy-docker-compose
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://hub.docker.com/v2/repositories/lindesvard/openpanel-api/tags
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://hub.docker.com/v2/repositories/lindesvard/openpanel-api/tags
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/Openpanel-dev/openpanel/tree/v2.3.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/Openpanel-dev/openpanel/contributors
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://openpanel.dev/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://openpanel.dev/pricing
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/Openpanel-dev/openpanel
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

OpenPanel is web, product and AI analytics software. Its maintainer, OpenPanel AB in Stockholm, runs it as a cloud service and publishes the same code for self-hosting. The public self-hosting release is installed from a git clone and a setup script, and the services run under Docker Compose. Events are stored in ClickHouse, basic records in Postgres, and Redis serves as cache, pub/sub and queue.

## Worth knowing

The project's own pages describe two release lines: the [self-hosting guide](https://openpanel.dev/docs/self-hosting/v2/deploy-docker-compose) for the public release, and a newer line that supporters receive first. The self-hosting guide for the public release and the guides for the newer supporter line give different install steps.
