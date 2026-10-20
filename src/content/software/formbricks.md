---
id: formbricks
name: Formbricks
urls:
  home: https://formbricks.com
  repository: https://github.com/formbricks/formbricks
  docs: https://formbricks.com/docs
  pricing: https://formbricks.com/pricing
category:
  - forms
description: Open-source experience management and survey platform, self-hosted or offered as a hosted cloud service.
status: active
maintainer: Formbricks GmbH
maintainerType: company
hqCountry: DE
language: typescript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
runsAs:
  - always-on
installMethod: docker-compose, kubernetes-helm
licenseModel: open-core
license: AGPL-3.0, MIT
currentMajor: "6"
latestReleaseDate: 2026-10-01
githubStargazers: 13123
contributors: 321
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://formbricks.com
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/formbricks/formbricks
    checkedAt: 2026-10-19
  - field: urls
    url: https://formbricks.com/docs
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://formbricks.com/about
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://formbricks.com/about
    checkedAt: 2026-10-19
  - field: hqCountry
    url: https://formbricks.com/about
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/formbricks/formbricks
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/formbricks/formbricks/blob/6.0.2/package.json
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/formbricks/formbricks/blob/6.0.2/package.json
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://formbricks.com/docs/self-hosting/overview
    checkedAt: 2026-10-19
  - field: category
    url: https://formbricks.com
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/formbricks/formbricks
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/formbricks/formbricks
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://formbricks.com/docs/self-hosting/license
    checkedAt: 2026-10-19
  - field: urls
    url: https://formbricks.com/pricing
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/formbricks/formbricks/releases/tag/6.0.2
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/formbricks/formbricks/releases/tag/6.0.2
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/formbricks/formbricks
    checkedAt: 2026-10-19
  - field: contributors
    url: https://github.com/formbricks/formbricks
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://formbricks.com/docs/self-hosting/setup/docker
    checkedAt: 2026-10-19
figure:
  emoji: 📋
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: TypeScript · Forms
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

Formbricks is a platform for surveys and experience management, built in TypeScript on Node.js. The self-hosted stack is larger than a single application: the [self-hosting overview](https://formbricks.com/docs/self-hosting/overview) names the app, Formbricks Hub (an API and worker), Cube, PostgreSQL, Redis or Valkey, and SpiceDB with its operator. The full stack is deployed with Docker Compose or with the official Helm chart. Formbricks GmbH, based in Kiel, Germany, develops the software and runs a hosted cloud in Frankfurt.

## Worth knowing

The repository carries more than one license. The core is AGPL-3.0, the JavaScript, Android, iOS and API packages are MIT, and the enterprise modules sit under a separate license, which the [license page](https://formbricks.com/docs/self-hosting/license) covers under Enterprise Features.
