---
id: cesium
name: CesiumJS
urls:
  home: https://cesium.com/platform/cesiumjs/
  repository: https://github.com/CesiumGS/cesium
  docs: https://cesium.com/learn/cesiumjs-learn/
category:
  - graphics
description: JavaScript library for building 3D globes and 2D maps in a web browser, rendered with WebGL.
status: active
maintainer: CesiumJS Contributors
maintainerType: community
firstRelease: 2014
language: javascript
runsAs:
  - browser
installMethod: npm install
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-11-02
githubStargazers: 15917
npmWeeklyDownloads: 419840
contributors: 312
social:
  x: https://twitter.com/CesiumJS
  forum: https://community.cesium.com/
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://cesium.com/platform/cesiumjs/
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/CesiumGS/cesium
    checkedAt: 2026-11-04
  - field: urls
    url: https://cesium.com/learn/cesiumjs-learn/
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/CesiumGS/cesium/blob/main/LICENSE.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/CesiumGS/cesium/blob/main/README.md
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/CesiumGS/cesium/blob/main/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://github.com/CesiumGS/cesium
    checkedAt: 2026-11-04
  - field: runsAs
    url: https://github.com/CesiumGS/cesium
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/CesiumGS/cesium
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/CesiumGS/cesium
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/CesiumGS/cesium
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/cesium
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://github.com/CesiumGS/cesium
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/CesiumGS/cesium/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/CesiumGS/cesium/releases/tag/1.147
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/CesiumGS/cesium/releases/tag/1.147
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://github.com/CesiumGS/cesium/tags
    checkedAt: 2026-11-04
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

CesiumJS is a JavaScript library for creating 3D globes and 2D maps in a web browser without a plugin. It uses WebGL for graphics and streams 3D Tiles and other standard formats from Cesium ion or from another source. The [learning documentation](https://cesium.com/learn/cesiumjs-learn/) covers building an app with it.

Module bundlers install the library from npm, and individual modules can be imported for tree shaking. A pre-built copy is available from the project's downloads page.

## Worth knowing

Cesium ion is a commercial platform that tiles, hosts and streams 3D content. It is optional: the README says any combination of content sources works with CesiumJS. The project describes its business model as open-core, with open source runtime engines such as CesiumJS and an optional commercial subscription to Cesium ion.
