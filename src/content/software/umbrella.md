---
id: umbrella
name: Umbrella JS
urls:
  home: https://umbrellajs.com/
  repository: https://github.com/franciscop/umbrella
  docs: https://umbrellajs.com/documentation
category:
  - library
description: Lightweight JavaScript library for DOM manipulation and events, with a jQuery-like API.
status: active
maintainer: Francisco Presencia
maintainerType: individual
firstRelease: 2015
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-24
githubStargazers: 2349
npmWeeklyDownloads: 2953
contributors: 28
dependentRepos: 61
dependentPackages: 21
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://umbrellajs.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/franciscop/umbrella
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/franciscop/umbrella/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/franciscop/umbrella/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/franciscop/umbrella
    checkedAt: 2026-10-28
  - field: category
    url: https://umbrellajs.com/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/franciscop/umbrella/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/franciscop/umbrella/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/franciscop/umbrella/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/franciscop/umbrella
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/franciscop/umbrella/blob/master/readme.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/franciscop/umbrella/tree/1.0.0
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/franciscop/umbrella/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/umbrellajs/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/franciscop/umbrella
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/franciscop/umbrella/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/umbrellajs
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/umbrellajs
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/umbrellajs
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
runsAs: null
---

Umbrella JS is a DOM library with an API modeled on jQuery's. It selects elements and handles events. A site or web app loads it from a CDN with a script tag, adds a downloaded file, or installs it with npm.

The library adds a `handle` method, which attaches an event listener and passes the event to a function, and an `ajax` helper. Some methods, such as `append`, accept more argument types than their jQuery counterparts. The [porting guide](https://github.com/franciscop/umbrella/blob/master/jquery.md) describes the differences for code moved from jQuery, and the library uses native DOM methods underneath.

## Worth knowing

Older browsers sit outside the supported range: the porting guide lists Internet Explorer 10 and earlier, and SVG in Internet Explorer 11, as unsupported.
