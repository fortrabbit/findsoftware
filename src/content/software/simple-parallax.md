---
id: simple-parallax
name: simpleParallax.js
urls:
  home: https://simpleparallax.com/
  repository: https://github.com/geosigno/simpleParallax.js
  docs: https://github.com/geosigno/simpleParallax.js/blob/master/README.md
category:
  - graphics
description: JavaScript and React library that adds a parallax effect to image tags on a page.
status: active
maintainer: Geoffrey Signorato
maintainerType: individual
firstRelease: 2017
language: javascript
basedOn:
  - react
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-11-16
githubStargazers: 2160
npmWeeklyDownloads: 11298
contributors: 10
dependentRepos: 221
dependentPackages: 7
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://github.com/geosigno/simpleParallax.js/blob/master/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://simpleparallax.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/geosigno/simpleParallax.js
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/geosigno/simpleParallax.js/blob/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/geosigno/simpleParallax.js/git/refs/tags/1.0.0
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/geosigno/simpleParallax.js/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/geosigno/simpleParallax.js/blob/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://simpleparallax.com/
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://simpleparallax.com/
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/geosigno/simpleParallax.js/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/geosigno/simpleParallax.js/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/geosigno/simpleParallax.js
    checkedAt: 2026-11-16
  - field: license
    url: https://simpleparallax.com/
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/geosigno/simpleParallax.js/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/geosigno/simpleParallax.js/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/geosigno/simpleParallax.js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/geosigno/simpleParallax.js/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/simple-parallax-js
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/simple-parallax-js
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/simple-parallax-js
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

simpleParallax.js adds a scroll-driven parallax effect directly to img tags, with no background images. One npm package ships two builds, a React component and a vanilla JavaScript version. The project's site says the library started as a jQuery plugin, became a vanilla JavaScript library, and is now built for React, with the vanilla build still available.

## Worth knowing

The React build declares React as a peer dependency, so the application supplies the React it uses. Browsers that cannot parse the syntax the library ships do not run the script, and the README says such targets need the application to transpile it.
