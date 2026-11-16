---
id: threejs
name: three.js
urls:
  home: https://threejs.org/
  repository: https://github.com/mrdoob/three.js
  docs: https://threejs.org/docs/
category:
  - graphics
description: JavaScript 3D library for creating and rendering 3D scenes in the browser with WebGL and WebGPU.
status: active
maintainer: three.js authors
maintainerType: community
firstRelease: 2010
language: javascript
runsAs:
  - browser
installMethod: npm, cdn
licenseModel: open-source
license: MIT
latestReleaseDate: 2026-10-30
githubStargazers: 118654
npmWeeklyDownloads: 34552646
contributors: 363
dependentRepos: 51503
dependentPackages: 4922
social:
  x: https://twitter.com/threejs
  discord: https://discord.gg/vtrnPdDGk
  forum: https://discourse.threejs.org/
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://threejs.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mrdoob/three.js
    checkedAt: 2026-11-16
  - field: urls
    url: https://threejs.org/docs/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mrdoob/three.js/blob/dev/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/mrdoob/three.js/git/ref/tags/r1
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mrdoob/three.js/blob/dev/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mrdoob/three.js
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mrdoob/three.js/blob/dev/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mrdoob/three.js/blob/dev/LICENSE
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/mrdoob/three.js/blob/dev/manual/pages/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mrdoob/three.js/blob/dev/manual/pages/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mrdoob/three.js/blob/dev/manual/pages/installation.html
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mrdoob/three.js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mrdoob/three.js/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/three
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/three
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/three
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mrdoob/three.js/releases/latest
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
---

three.js is a JavaScript library for 3D graphics that runs in the browser. The README's usage example creates a scene, a camera and a cube, then adds the renderer's viewport to the page body. The current builds include WebGL and WebGPU renderers, and SVG and CSS3D renderers are available as addons. A project installs it from npm and uses a build tool, or imports it from a CDN through an import map, which needs no build tools.

## Worth knowing

In the CDN route, the installation guide says the page has to be served from a local server during development rather than opened as an HTML file, because some features do not work from a file page.
