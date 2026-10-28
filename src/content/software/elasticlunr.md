---
id: elasticlunr
name: Elasticlunr.js
urls:
  repository: https://github.com/weixsong/elasticlunr.js
category:
  - search
description: Lightweight full-text search engine in JavaScript for building a search index in the browser or in Node.js.
status: stub
maintainer: Wei Song
maintainerType: individual
firstRelease: 2015
language: javascript
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2016-09-08
githubStargazers: 2064
npmWeeklyDownloads: 34854
contributors: 29
dependentRepos: 1603
dependentPackages: 83
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/weixsong/elasticlunr.js
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/weixsong/elasticlunr.js/master/package.json
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/elasticlunr
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/weixsong/elasticlunr.js/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/weixsong/elasticlunr.js
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/weixsong/elasticlunr.js/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/weixsong/elasticlunr.js/master/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/weixsong/elasticlunr.js/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/weixsong/elasticlunr.js/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/elasticlunr/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/elasticlunr
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/elasticlunr
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/weixsong/elasticlunr.js
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/weixsong/elasticlunr.js/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/elasticlunr
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/elasticlunr
    checkedAt: 2026-10-28
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

Elasticlunr.js is a full-text search engine written in JavaScript, built on Lunr.js. It builds an index from JSON documents and searches it in the browser or in Node.js. The README describes building the index ahead of time and loading it on the client, for static web pages and offline document sets. Fields are chosen when the index is created, and queries can boost fields at query time.

The library is installed with npm for Node.js use. For browser use, the README describes including the library's source file on the page.

## Worth knowing

The README asks for a new maintainer, because the author is focusing on a new domain. Older browsers that lack ES5 need a JavaScript shim, as the README states.
