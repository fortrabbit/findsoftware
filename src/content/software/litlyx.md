---
id: litlyx
name: Litlyx
urls:
  home: https://litlyx.com
  repository: https://github.com/Litlyx/litlyx
  docs: https://docs.litlyx.com
  pricing: https://litlyx.com/pricing
category:
  - analytics
description: Cookieless web analytics tool that a site adds with a script tag and that can be self-hosted with Docker or used as a hosted cloud service.
status: active
maintainer: Litlyx Srl
maintainerType: company
firstRelease: 2024
language: javascript
databases:
  - mongodb
headlessApi:
  - rest
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2025-12-01
githubStargazers: 1748
npmWeeklyDownloads: 136
contributors: 7
social:
  discord: https://discord.com/invite/Uq378Zvem3
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://litlyx.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Litlyx/litlyx
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Litlyx/litlyx/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://litlyx.com/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://litlyx.com/terms-of-service
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://litlyx.com/terms-of-service
    checkedAt: 2026-11-03
  - field: category
    url: https://litlyx.com/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/Litlyx/litlyx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Litlyx/litlyx/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Litlyx/litlyx/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/Litlyx/litlyx/blob/main/docker-compose.yml
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Litlyx/litlyx/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/Litlyx/litlyx/releases/tag/v0.0.19
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/Litlyx/litlyx/releases/tag/v0.0.19
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/Litlyx/litlyx/tree/v0.0.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/Litlyx/litlyx
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/Litlyx/litlyx/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/litlyx-js
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.litlyx.com/api-reference/openapi.json
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Litlyx is a web analytics tool that a site adds with a script tag. A browser library, litlyx-js, is also installed from npm, and the README says a third-party plugin can inject the script into a WordPress site. The company behind it is Litlyx Srl.

Litlyx comes as a hosted cloud, Litlyx Cloud, and as a self-hosted dashboard that runs from Docker Compose with MongoDB and Redis. For a self-hosted instance, the script tag names the host and port where the data is sent. The project documents an analytics API that returns raw visit data.

## Worth knowing

The cloud terms state that they do not apply to the self-hosted product, which the operator manages on its own servers. The README mentions lifetime plans for more client seats on self-hosted installs; the pricing page read at fetch time does not show one.
