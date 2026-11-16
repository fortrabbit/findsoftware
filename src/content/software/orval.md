---
id: orval
name: Orval
urls:
  home: https://orval.dev
  repository: https://github.com/orval-labs/orval
  docs: https://orval.dev/docs/installation/
category:
  - dev-tool
description: Generator that produces TypeScript API clients, models and optional mocks from OpenAPI v3 and Swagger v2 specifications.
status: active
maintainer: Victor Bury
firstRelease: 2020
language: javascript
runtime:
  - node
runtimeMin: node 22
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-14
githubStargazers: 6620
npmWeeklyDownloads: 3640442
contributors: 410
dependentRepos: 305
dependentPackages: 39
social:
  discord: https://discord.gg/6fC2sjDU7w
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/orval-labs/orval
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/orval-labs/orval
    checkedAt: 2026-11-16
  - field: urls
    url: https://orval.dev/docs/installation/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/orval-labs/orval/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/orval-labs/orval
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/orval-labs/orval/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://orval.dev/docs/installation/
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/orval-labs/orval/v8.48.0/packages/orval/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://orval.dev/docs/installation/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://orval.dev/docs/installation/
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/orval-labs/orval
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/orval-labs/orval/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/orval-labs/orval/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/orval-labs/orval/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/orval
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/orval-labs/orval
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/orval-labs/orval/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/orval
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/orval
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/orval
    checkedAt: 2026-11-16
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

Orval is a generator that reads an OpenAPI v3 or Swagger v2 specification, in YAML or JSON, and writes TypeScript code for it: API clients, models and optional mocks. The generated code targets several client libraries, such as React Query, SWR, Vue Query and Angular, and the tool is installed into a project with npm as a development dependency.

Projects that cannot install it locally can run code generation with the official Docker image, which the install guide names as an alternative route.

## Worth knowing

Current releases require a recent Node.js line, so a project that runs an older one needs the Docker image to generate its code.
