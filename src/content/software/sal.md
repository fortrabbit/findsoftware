---
id: sal
name: Sal
urls:
  home: https://mciastek.github.io/sal/
  repository: https://github.com/mciastek/sal
  docs: https://github.com/mciastek/sal/blob/master/README.md
category:
  - graphics
description: JavaScript library that animates page elements as they scroll into view.
status: stub
maintainer: Mirosław Ciastek
maintainerType: individual
firstRelease: 2017
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2021-05-01
githubStargazers: 3694
npmWeeklyDownloads: 5163
contributors: 6
dependentRepos: 580
dependentPackages: 11
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mciastek.github.io/sal/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mciastek/sal
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mciastek/sal/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/mciastek/sal/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/mciastek/sal/blob/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mciastek/sal/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mciastek/sal/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://registry.npmjs.org/sal.js/latest
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/mciastek/sal/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/sal.js
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/sal.js/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/sal.js
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mciastek/sal
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mciastek/sal/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/sal.js
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sal.js
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sal.js
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

Sal is a JavaScript library that animates elements as they scroll into the viewport, using the Intersection Observer API. A page marks each element with a data-sal attribute that names an animation, such as fade or slide-up, and a script calls sal() to start watching those elements. Duration, delay and easing are set with further data attributes, and entering and leaving the viewport fire sal:in and sal:out events.

## Worth knowing

The README calls the Intersection Observer API experimental and suggests a polyfill. Sites that must support visitors without JavaScript should add a noscript block that turns the animation styles off, as the README shows.
