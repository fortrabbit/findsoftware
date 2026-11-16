---
id: remark
name: remark
urls:
  home: https://remark.js.org
  repository: https://github.com/remarkjs/remark
  plugins: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
category:
  - library
description: JavaScript processor that parses, inspects and transforms markdown as syntax trees through plugins.
status: active
maintainer: Titus Wormer
maintainerType: individual
firstRelease: 2014
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
runtimeMin: node 16
installMethod: npm, cdn
licenseModel: open-source
license: MIT
currentMajor: "15"
latestReleaseDate: 2023-09-18
githubStargazers: 9042
npmWeeklyDownloads: 9471627
contributors: 132
pluginCount: 150
dependentRepos: 221029
dependentPackages: 2187
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://remark.js.org
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/remarkjs/remark
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/remarkjs/remark/commit/5362a19c30bbcb50fdb51ad7c088721b065b6fce
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/remarkjs/remark/blob/main/license
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/remarkjs/remark/blob/main/license
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/remarkjs/remark/blob/main/packages/remark/readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/remarkjs/remark
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/remarkjs/remark/blob/main/packages/remark/readme.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/remarkjs/remark/blob/main/packages/remark/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/remarkjs/remark/blob/main/packages/remark/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/remarkjs/remark/blob/main/packages/remark/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/remarkjs/remark/blob/main/license
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/remarkjs/remark/releases/tag/15.0.1
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/remarkjs/remark/releases/tag/15.0.1
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/remarkjs/remark
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/remarkjs/remark/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/remark
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/remark
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/remark
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/remarkjs/remark/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: pluginCount
    url: https://github.com/remarkjs/remark/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/remarkjs/remark/blob/main/packages/remark/readme.md
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

remark is a JavaScript markdown processor that reads markdown into syntax trees, lets plugins inspect and change them, and writes the result back out as markdown. The core package, remark, adds markdown support to unified, the core project that transforms content through syntax trees.

Install it with npm for Node.js, or import it from esm.sh in Deno or in a browser. Plugins are separate packages, and the project keeps a list of them.

## Worth knowing

The package is ESM only. The repository is a monorepo, so its star and contributor counts cover every package in it, not only remark.
