---
id: microbundle
name: Microbundle
urls:
  repository: https://github.com/developit/microbundle
  docs: https://github.com/developit/microbundle
category:
  - build-tool
description: Zero-configuration bundler that builds small JavaScript libraries into CommonJS, ES module and UMD bundles, powered by Rollup.
status: stub
maintainer: Jason Miller
maintainerType: individual
firstRelease: 2017
language: javascript
basedOn:
  - rollup
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-08-12
githubStargazers: 8128
npmWeeklyDownloads: 121002
contributors: 108
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/developit/microbundle
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/developit/microbundle/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/developit/microbundle/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/developit/microbundle/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/developit/microbundle
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/developit/microbundle/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/developit/microbundle/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/developit/microbundle
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/developit/microbundle/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/developit/microbundle/releases?per_page=100
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/developit/microbundle/releases?per_page=100
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/developit/microbundle/releases?per_page=100
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/developit/microbundle
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/developit/microbundle/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/microbundle
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Microbundle is a bundler for small JavaScript libraries, built on Rollup. It writes CommonJS, ES module and UMD bundles for the same source, using the output fields of the project's package.json.

The build can be run once with the microbundle command, or with a watch mode that rebuilds when source files change. Babel handles ESnext and async/await syntax, and Terser compresses the output. TypeScript sources are supported without configuration.
