---
id: browserless
name: Browserless
urls:
  home: https://www.browserless.io
  repository: https://github.com/browserless/browserless
  docs: https://docs.browserless.io
  pricing: https://www.browserless.io/pricing
category:
  - media
description: Docker image that runs headless browsers as a service, which Puppeteer and Playwright scripts connect to over WebSocket.
status: active
maintainer: browserless.io, Inc.
maintainerType: company
firstRelease: 2018
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
runsAs:
  - always-on
installMethod: docker
licenseModel: source-available
license: SSPL-1.0, Browserless Commercial License
currentMajor: "2"
latestReleaseDate: 2026-10-30
githubStargazers: 13878
contributors: 82
social:
  x: https://x.com/browserless
  instagram: https://www.instagram.com/browserless/
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.browserless.io
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/browserless/browserless
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.browserless.io
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/browserless/browserless/blob/main/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/browserless/browserless/blob/main/LICENSE
    checkedAt: 2026-10-31
  - field: category
    url: https://www.browserless.io
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/browserless/browserless
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/browserless/browserless/blob/v2.58.1/package.json
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/browserless/browserless/blob/v2.58.1/package.json
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/browserless/browserless/blob/main/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/browserless/browserless/blob/main/README.md
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.browserless.io/pricing
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://www.browserless.io/terms
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://www.browserless.io/terms
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://www.browserless.io/privacy
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/browserless/browserless/releases/tag/v2.58.1
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/browserless/browserless/releases/tag/v2.58.1
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/browserless/browserless/tree/1.2.0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/browserless/browserless
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/browserless/browserless
    checkedAt: 2026-10-31
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Browserless is a Docker image that runs headless browsers as a service. Scripts written for Puppeteer or Playwright connect to it over WebSocket, and the quick start in the [README](https://github.com/browserless/browserless/blob/main/README.md) shows a local run that serves a WebSocket address once the container starts. The documentation covers the Docker deployment and the Enterprise image.

The [Enterprise overview](https://docs.browserless.io/enterprise/overview) describes the Enterprise image as the full feature set in a self-hosted container. The pricing page lists SSO and user roles among the Enterprise features. The README also describes a fully managed, pay-as-you-go cloud service.

## Worth knowing

The source is dual-licensed. The [LICENSE file](https://github.com/browserless/browserless/blob/main/LICENSE) offers the MongoDB Server-Side Public License or the browserless commercial license, and it says that building commercial sites or applications, or running a closed-source continuous-integration system, needs a commercial license.
