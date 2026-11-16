---
id: two-js
name: Two.js
urls:
  home: https://two.js.org/
  repository: https://github.com/jonobr1/two.js
  docs: https://two.js.org/docs/two/
category:
  - graphics
description: Renderer-agnostic JavaScript drawing API for two-dimensional scenes that render to WebGL, canvas or SVG.
status: active
maintainer: jonobr1
maintainerType: individual
firstRelease: 2013
language: javascript
runtime:
  - node
installMethod: npm, download, source build
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-08-29
githubStargazers: 8745
npmWeeklyDownloads: 19039
contributors: 63
dependentRepos: 286
dependentPackages: 53
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://two.js.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/jonobr1/two.js
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/jonobr1/two.js/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://two.js.org/
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/jonobr1/two.js
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/jonobr1/two.js/dev/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/jonobr1/two.js/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/jonobr1/two.js/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/jonobr1/two.js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/jonobr1/two.js/contributors
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/two.js
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/two.js
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/two.js
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

Two.js is a drawing API for two-dimensional scenes on the web. The same scene can be drawn by its WebGL, canvas or SVG renderer, because the API sits above the renderer. Shapes and groups are kept in a scenegraph, so an object can be rotated, moved or scaled after it is created, and the library has a built-in animation loop that updates the scene.

Two.js also reads SVG elements from design tools into a scene and loads bitmap images, sprite sheets and image sequences. A headless mode renders a scene on a server with the Node Canvas library and writes the frames to files. The [documentation](https://two.js.org/docs/two/) describes the API.

## Worth knowing

The README says the main import includes every module, so tree shaking is not yet implemented, although the project lists it on its roadmap. A custom build can exclude renderers the project does not need by editing its build script, which reduces the file size.
