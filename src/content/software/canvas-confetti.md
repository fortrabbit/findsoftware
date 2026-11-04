---
id: canvas-confetti
name: Canvas Confetti
urls:
  home: https://catdad.github.io/canvas-confetti/
  repository: https://github.com/catdad/canvas-confetti
  docs: https://github.com/catdad/canvas-confetti
category:
  - graphics
description: JavaScript library that draws confetti animations on an HTML canvas.
status: active
maintainer: Kiril Vatev
maintainerType: individual
firstRelease: 2018
language: javascript
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: ISC
currentMajor: "1"
latestReleaseDate: 2025-10-25
githubStargazers: 12846
npmWeeklyDownloads: 9540263
contributors: 18
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://catdad.github.io/canvas-confetti/
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/catdad/canvas-confetti
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/catdad/canvas-confetti/blob/master/README.md
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://registry.npmjs.org/canvas-confetti
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/catdad/canvas-confetti/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://github.com/catdad/canvas-confetti
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/catdad/canvas-confetti
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/catdad/canvas-confetti/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/catdad/canvas-confetti/blob/master/README.md
    checkedAt: 2026-11-04
  - field: runsAs
    url: https://github.com/catdad/canvas-confetti/blob/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/catdad/canvas-confetti
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/catdad/canvas-confetti
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/catdad/canvas-confetti/releases/tag/1.9.4
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/catdad/canvas-confetti/releases/tag/1.9.4
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://github.com/catdad/canvas-confetti
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/catdad/canvas-confetti/contributors
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/canvas-confetti
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

Canvas Confetti is a JavaScript library that draws confetti animations on an HTML canvas. The npm package is imported into a bundled client build, or loaded from a CDN, where it is exposed as a global `confetti` function. Each call launches particles from an origin point and returns a promise, where the browser supports promises, that resolves when the animation finishes. Calls made before an animation ends share one promise and draw on the same canvas.

## Worth knowing

The README says the package is a client component and will not run in Node, so it is used in the browser only.
