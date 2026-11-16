---
id: plottable
name: Plottable
urls:
  repository: https://github.com/palantir/plottable
category:
  - graphics
description: TypeScript library of chart components, built on D3, for creating custom charts on websites.
status: active
maintainer: Palantir Technologies, Inc.
maintainerType: company
firstRelease: 2014
language: javascript
basedOn:
  - d3
installMethod: npm, cdn
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-07
githubStargazers: 3136
npmWeeklyDownloads: 3428
contributors: 66
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/palantir/plottable
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/palantir/plottable/blob/develop/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/palantir/plottable/blob/develop/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/palantir/plottable/releases?per_page=100
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/palantir/plottable/blob/develop/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/palantir/plottable/blob/develop/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/palantir/plottable
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/palantir/plottable/blob/develop/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/palantir/plottable/blob/develop/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/palantir/plottable/blob/develop/LICENSE
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/plottable
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/palantir/plottable/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/palantir/plottable/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/palantir/plottable
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/palantir/plottable/contributors?per_page=1
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
runtimeMin: null
packagistDownloads: null
runsAs: null
---

Plottable is a library of chart components for building custom charts on websites, built on top of D3.js. The README says it is not a charting library but a library of chart components, and describes its approach as composition over configuration: a chart is assembled from components such as plots, gridlines and axes, arranged in tables, rather than set through high-level chart options. It is used and developed at Palantir Technologies and is distributed as ES5 JavaScript.

## Worth knowing

Plottable requires D3 version 7 and a browser with ES2015 support. CommonJS consumers also need Node.js 22.12 or later to load D3's ES modules.
