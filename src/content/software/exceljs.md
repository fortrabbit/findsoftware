---
id: exceljs
name: ExcelJS
urls:
  repository: https://github.com/exceljs/exceljs
category:
  - library
description: JavaScript library that reads, manipulates and writes spreadsheet data and styles in XLSX and CSV files.
status: active
maintainer: Guyon Roche
maintainerType: individual
firstRelease: 2014
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 8
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2023-10-19
githubStargazers: 15512
npmWeeklyDownloads: 27267069
contributors: 169
dependentRepos: 4295
dependentPackages: 1098
social:
  discord: https://discord.gg/siema
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://api.github.com/repos/exceljs/exceljs
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/exceljs/exceljs/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: maintainerType
    url: https://github.com/exceljs/exceljs/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/exceljs/exceljs/commits/v0.0.1
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/exceljs/exceljs/blob/master/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/exceljs/exceljs
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/exceljs/exceljs/blob/master/README.md
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/exceljs/exceljs/blob/v4.4.0/package.json
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/exceljs/exceljs/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/exceljs/exceljs/releases/latest
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/exceljs/exceljs/releases/latest
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/exceljs/exceljs
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/exceljs/exceljs/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/exceljs
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/exceljs
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/exceljs
    checkedAt: 2026-11-08
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

ExcelJS is a JavaScript library that reads spreadsheet data and styles from XLSX and CSV files, changes them, and writes them back out. It runs on Node.js, and its dist folder holds prebundled builds for use in a browser.

## Worth knowing

The browser build covers only the document-based workbook. The streaming reader and writer are not included there, because of how they work.
