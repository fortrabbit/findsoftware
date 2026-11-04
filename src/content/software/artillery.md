---
id: artillery
name: Artillery
urls:
  home: https://www.artillery.io
  repository: https://github.com/artilleryio/artillery
  docs: https://www.artillery.io/docs
  pricing: https://www.artillery.io/pricing
  plugins: https://www.artillery.io/integrations
category:
  - testing
description: Command-line load testing tool that runs scripted HTTP, WebSocket, Socket.IO and Playwright tests.
status: active
maintainer: Artillery Software Inc
maintainerType: company
firstRelease: 2014
hqCountry: US
language: javascript
runtime:
  - node
runtimeMin: node 22
installMethod: npm install -g artillery
licenseModel: open-core
license: MPL-2.0, BSL
currentMajor: "2"
latestReleaseDate: 2026-08-14
githubStargazers: 9113
npmWeeklyDownloads: 388246
contributors: 139
dependentRepos: 1642
dependentPackages: 75
social:
  x: https://twitter.com/artilleryio
  forum: https://github.com/artilleryio/artillery/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://www.artillery.io/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/artilleryio/artillery
    checkedAt: 2026-11-04
  - field: urls
    url: https://www.artillery.io/
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://www.artillery.io/pricing
    checkedAt: 2026-11-04
  - field: hqCountry
    url: https://www.artillery.io/pricing
    checkedAt: 2026-11-04
  - field: category
    url: https://raw.githubusercontent.com/artilleryio/artillery/main/packages/artillery/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/artilleryio/artillery
    checkedAt: 2026-11-04
  - field: runtime
    url: https://raw.githubusercontent.com/artilleryio/artillery/artillery-2.0.34/packages/artillery/package.json
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://raw.githubusercontent.com/artilleryio/artillery/artillery-2.0.34/packages/artillery/package.json
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://www.artillery.io/docs/get-started/get-artillery
    checkedAt: 2026-11-04
  - field: license
    url: https://raw.githubusercontent.com/artilleryio/artillery/artillery-2.0.34/packages/artillery/package.json
    checkedAt: 2026-11-04
  - field: license
    url: https://raw.githubusercontent.com/artilleryio/artillery/main/README.md
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/artilleryio/artillery/releases/tag/artillery-2.0.34
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/artilleryio/artillery/releases/tag/artillery-2.0.34
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://registry.npmjs.org/artillery
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/artillery
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/artillery
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/artillery
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/artilleryio/artillery
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/artilleryio/artillery/contributors
    checkedAt: 2026-11-04
  - field: urls
    url: https://www.artillery.io/pricing
    checkedAt: 2026-11-04
  - field: urls
    url: https://raw.githubusercontent.com/artilleryio/artillery/main/packages/artillery/README.md
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Artillery is a command-line load testing tool that runs scripted virtual-user flows against HTTP, WebSocket, Socket.IO and Playwright targets. Scripts are written in YAML by default, and the docs also accept JavaScript or TypeScript. The tool runs on Node.js and is installed globally from npm; the [documentation](https://www.artillery.io/docs/get-started/get-artillery) covers setup. Distributed runs can be launched on AWS Lambda, AWS Fargate or Azure Container Instances.

Artillery Cloud is a hosted subscription that covers both the CLI and the Artillery Cloud dashboard, separate from the open-source package.

## Worth knowing

Most of the code is licensed under the Mozilla Public License 2.0, but the README says some Azure-specific modules fall under the Business Source License and that commercial or production use of those modules requires a commercial license.
