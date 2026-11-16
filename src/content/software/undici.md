---
id: undici
name: undici
urls:
  home: https://undici.nodejs.org/
  repository: https://github.com/nodejs/undici
  docs: https://undici.nodejs.org/
category:
  - library
description: HTTP/1.1 client written from scratch for Node.js, with its own request API and a fetch implementation.
status: active
maintainer: Matteo Collina
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-05
githubStargazers: 7740
npmWeeklyDownloads: 326484951
contributors: 422
dependentRepos: 98048
dependentPackages: 1956
social:
  forum: https://github.com/nodejs/undici/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://undici.nodejs.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/nodejs/undici
    checkedAt: 2026-11-16
  - field: urls
    url: https://undici.nodejs.org/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/nodejs/undici/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/undici
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/nodejs/undici
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/nodejs/undici/main/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/nodejs/undici/main/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/nodejs/undici/v8.12.4/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/nodejs/undici/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/nodejs/undici
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/nodejs/undici/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/nodejs/undici/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/nodejs/undici
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/nodejs/undici/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/undici
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/undici
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/undici
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

undici is an HTTP/1.1 client written from scratch for Node.js, with its own request, stream, pipeline and connect methods and a fetch implementation. Node.js also ships a built-in fetch that the project says is powered by undici, and the project's own page compares the two.

## Worth knowing

The HTTP/1 parser needs WebAssembly. Where WebAssembly is unavailable, such as in a Node.js process started with `--jitless`, requests made through the module fail.
