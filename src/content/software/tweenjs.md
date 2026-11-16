---
id: tweenjs
name: tween.js
urls:
  home: https://tweenjs.github.io/tween.js/
  repository: https://github.com/tweenjs/tween.js
  docs: https://github.com/tweenjs/tween.js/blob/main/docs/user_guide.md
category:
  - graphics
description: JavaScript and TypeScript tweening engine that animates properties of objects with easing functions.
status: active
maintainer: Tween.js authors
maintainerType: community
firstRelease: 2011
language: javascript
installMethod: npm, script tag, source build
licenseModel: open-source
license: MIT
currentMajor: "25"
latestReleaseDate: 2024-07-26
githubStargazers: 10156
npmWeeklyDownloads: 23416515
contributors: 72
dependentRepos: 8498
dependentPackages: 681
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://tweenjs.github.io/tween.js/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/tweenjs/tween.js
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/tweenjs/tween.js/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/tweenjs/tween.js
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/tweenjs/tween.js/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/tweenjs/tween.js/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/tweenjs/tween.js/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/tweenjs/tween.js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/tweenjs/tween.js/contributors
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@tweenjs/tween.js
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@tweenjs%2Ftween.js
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@tweenjs%2Ftween.js
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

tween.js changes properties of a JavaScript object from a start value to a target over a duration, and applies an easing curve to the progress. The easing functions come from Robert Penner's equations and can be reused outside a tween, and custom easing functions are accepted too.

It does one thing: it tweens the properties of an object. It does not add CSS units, does not interpolate colors and does not run its own animation loop. The caller passes a time value from whatever loop the page uses, and the update callback writes the new values somewhere, such as a CSS transform on an element. The [user guide](https://github.com/tweenjs/tween.js/blob/main/docs/user_guide.md) covers the API in more detail.

## Worth knowing

The README marks two install routes as deprecated: the global variable from a CDN, which uses a UMD file, and the CommonJS build. The README says the UMD file will be removed in a future major version, so the ES module build is the route it recommends.
