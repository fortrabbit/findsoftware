---
id: pdfkit
name: PDFKit
urls:
  home: https://pdfkit.org/
  repository: https://github.com/foliojs/pdfkit
  docs: https://pdfkit.org/docs/getting_started.html
category:
  - library
  - media
description: JavaScript library that generates multi-page PDF documents for Node and the browser.
status: active
maintainer: Devon Govett
firstRelease: 2011
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: npm, download
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-08-30
githubStargazers: 10733
npmWeeklyDownloads: 16836175
contributors: 133
dependentRepos: 23418
dependentPackages: 540
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://pdfkit.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/foliojs/pdfkit
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/foliojs/pdfkit/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/foliojs/pdfkit/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/pdfkit
    checkedAt: 2026-11-16
  - field: category
    url: https://pdfkit.org/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/foliojs/pdfkit
    checkedAt: 2026-11-16
  - field: runtime
    url: https://pdfkit.org/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/foliojs/pdfkit/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/foliojs/pdfkit/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/foliojs/pdfkit
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/foliojs/pdfkit/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/foliojs/pdfkit/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/foliojs/pdfkit
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/foliojs/pdfkit/contributors
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/pdfkit
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/pdfkit
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/pdfkit
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
---

PDFKit is a JavaScript library that generates PDF documents for Node and the browser. A document is built with chained calls: text, images, vector paths, tables and annotations are added to a document object, and its output is piped to a file or an HTTP response. In the browser the output is collected as a Blob instead. The package is installed with npm, and a prebuilt standalone file is distributed with the releases. The [programming guide](https://pdfkit.org/docs/getting_started.html) covers the API with examples.

## Worth knowing

A bundle that inlines PDFKit must keep its standard-font metrics and sRGB profile beside it, or register the standard fonts in code, because the Node build loads them from files next to the built file. The browser build has no file system access, so fonts and images are passed to it as data.
