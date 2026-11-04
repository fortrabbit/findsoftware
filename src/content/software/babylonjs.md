---
id: babylonjs
name: Babylon.js
urls:
  home: https://www.babylonjs.com/
  repository: https://github.com/BabylonJS/Babylon.js
  docs: https://doc.babylonjs.com/
category:
  - graphics
description: Open-source JavaScript and TypeScript 3D rendering engine for the web.
status: active
maintainer: BabylonJS
firstRelease: 2013
language: javascript
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "9"
latestReleaseDate: 2026-11-02
githubStargazers: 26295
npmWeeklyDownloads: 41002
contributors: 301
httpArchiveSites: 140
dependentRepos: 950
dependentPackages: 160
social:
  x: https://www.twitter.com/babylonjs
  forum: https://forum.babylonjs.com
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://www.babylonjs.com/
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/BabylonJS/Babylon.js
    checkedAt: 2026-11-04
  - field: urls
    url: https://doc.babylonjs.com/
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://github.com/BabylonJS/Babylon.js/releases/tag/v1.2.1
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://api.github.com/users/BabylonJS
    checkedAt: 2026-11-04
  - field: category
    url: https://www.babylonjs.com/
    checkedAt: 2026-11-04
  - field: language
    url: https://github.com/BabylonJS/Babylon.js
    checkedAt: 2026-11-04
  - field: runsAs
    url: https://doc.babylonjs.com/setup/frameworkPackages/
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/BabylonJS/Babylon.js/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://doc.babylonjs.com/setup/frameworkPackages/CDN/
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/BabylonJS/Babylon.js
    checkedAt: 2026-11-04
  - field: license
    url: https://registry.npmjs.org/babylonjs/latest
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/BabylonJS/Babylon.js/blob/master/license.md
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/BabylonJS/Babylon.js/releases/tag/9.33.2
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/BabylonJS/Babylon.js/releases/tag/9.33.2
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/babylonjs
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://github.com/BabylonJS/Babylon.js
    checkedAt: 2026-11-04
  - field: contributors
    url: https://github.com/BabylonJS/Babylon.js/graphs/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/babylonjs
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/babylonjs
    checkedAt: 2026-11-04
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
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

Babylon.js is a 3D rendering engine for the web, written in TypeScript and published as JavaScript packages. The README installs one npm package, and the CDN serves the packages directly. The project also publishes modular ES6 packages, such as the core package under the @babylonjs scope, for projects that bundle with tree shaking. The [documentation](https://doc.babylonjs.com/) covers the setup routes and the framework packages.

## Worth knowing

The project's own documentation says the CDN is for users learning the platform or running small experiments, and should not be used in production. Its packages index asks projects to pick one delivery method, since mixing two of the CDN, npm and ES6 packages fails.
