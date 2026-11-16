---
id: kepler-gl
name: kepler.gl
urls:
  home: https://kepler.gl/
  repository: https://github.com/keplergl/kepler.gl
  docs: https://docs.kepler.gl/
category:
  - graphics
description: React component and web application for visual exploration of large geolocation data sets, built on MapLibre GL and deck.gl.
status: active
maintainer: kepler.gl project contributors
maintainerType: community
firstRelease: 2017
language: javascript
basedOn:
  - react
  - deck-gl
i18n: react-intl localization with locale files and a localeMessages prop
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-03-16
githubStargazers: 12096
npmWeeklyDownloads: 8640
contributors: 135
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/keplergl/kepler.gl
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/keplergl/kepler.gl
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.kepler.gl/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/keplergl/kepler.gl/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/keplergl/kepler.gl/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/keplergl/kepler.gl
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/keplergl/kepler.gl/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/keplergl/kepler.gl/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/keplergl/kepler.gl/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/keplergl/kepler.gl/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/keplergl/kepler.gl/blob/master/README.md
    checkedAt: 2026-11-16
  - field: i18n
    url: https://docs.kepler.gl/docs/api-reference/localization
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/keplergl/kepler.gl
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/keplergl/kepler.gl/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/keplergl/kepler.gl/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/kepler.gl
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/kepler.gl
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/keplergl/kepler.gl
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/keplergl/kepler.gl/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

kepler.gl is a React component and web application for exploring large geolocation data sets visually. It is built on top of MapLibre GL and deck.gl, and it manages its state and data flow with Redux. The docs describe embedding it in other React-Redux applications, and localization goes through react-intl.

## Worth knowing

The default base maps use MapLibre. Mapbox-hosted styles need the mapbox-gl package, according to the README. The npm latest tag points at a prerelease, while the stable releases are published on GitHub.
