---
id: commonmark-js
name: commonmark.js
urls:
  repository: https://github.com/commonmark/commonmark.js
category:
  - library
description: JavaScript parser and renderer for CommonMark that turns Markdown into a syntax tree and renders it to HTML or XML.
status: active
maintainer: John MacFarlane
firstRelease: 2014
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: npm
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "0"
latestReleaseDate: 2024-09-19
githubStargazers: 1570
npmWeeklyDownloads: 1322994
contributors: 48
dependentRepos: 6702
dependentPackages: 428
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://github.com/commonmark/commonmark.js
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/commonmark/commonmark.js/master/LICENSE
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://registry.npmjs.org/commonmark
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/commonmark/commonmark.js
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/commonmark/commonmark.js
    checkedAt: 2026-11-04
  - field: runtime
    url: https://raw.githubusercontent.com/commonmark/commonmark.js/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://raw.githubusercontent.com/commonmark/commonmark.js/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://raw.githubusercontent.com/commonmark/commonmark.js/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://raw.githubusercontent.com/commonmark/commonmark.js/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://registry.npmjs.org/commonmark/latest
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://registry.npmjs.org/commonmark/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/commonmark/commonmark.js/releases/tag/0.31.2
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/commonmark/commonmark.js
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/commonmark/commonmark.js/contributors
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/commonmark
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/commonmark
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/commonmark
    checkedAt: 2026-11-04
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

commonmark.js is the JavaScript reference implementation of CommonMark, a specified form of Markdown. It parses a document into a syntax tree that code can inspect or change, and renders the tree to HTML or to an XML representation. The package is installed from npm, and a single-file distribution is available for client-side use.

## Worth knowing

The library does not sanitize link attributes or raw HTML. For untrusted input, the README recommends its safe option or an HTML sanitizer on the output.
