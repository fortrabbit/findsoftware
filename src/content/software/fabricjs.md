---
id: fabricjs
name: Fabric.js
urls:
  home: https://www.fabricjs.com/
  repository: https://github.com/fabricjs/fabric.js
  docs: https://www.fabricjs.com/docs/
category:
  - graphics
description: JavaScript HTML5 canvas library for interactive objects, with SVG and JSON import and export.
status: active
maintainer: Andrea Bogazzi, Shachar Nen and Fabric.js contributors
maintainerType: community
firstRelease: 2011
language: javascript
runtime:
  - node
runtimeMin: node 20
installMethod: cdn
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-05-18
githubStargazers: 31549
npmWeeklyDownloads: 1351285
contributors: 301
dependentRepos: 2295
dependentPackages: 690
social:
  x: https://twitter.com/fabricjs
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://www.fabricjs.com/
    checkedAt: 2026-11-08
  - field: urls
    url: https://www.fabricjs.com/docs/getting-started/installing/
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/fabricjs/fabric.js
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/fabricjs/fabric.js/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://registry.npmjs.org/fabric
    checkedAt: 2026-11-08
  - field: category
    url: https://www.fabricjs.com/
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/fabricjs/fabric.js
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/fabricjs/fabric.js/blob/master/README.md
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/fabricjs/fabric.js/blob/master/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://www.fabricjs.com/docs/getting-started/installing/
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/fabricjs/fabric.js/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/fabricjs/fabric.js/releases/latest
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/fabricjs/fabric.js/releases/latest
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/fabricjs/fabric.js
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/fabricjs/fabric.js/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/fabric
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/fabric
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/fabric
    checkedAt: 2026-11-08
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
runsAs: null
---

Fabric.js is a JavaScript library that puts an interactive object model on top of an HTML5 canvas element, with serialization and SVG-to-canvas conversion. A page loads it with a script tag from a CDN. Under Node.js it uses node-canvas for the canvas and jsdom for the window.

## Worth knowing

The Node.js route depends on node-canvas, which has its own limits and bugs. Canvas features cannot be transpiled or polyfilled, so older browsers may lack some of them even after the code is transpiled.
