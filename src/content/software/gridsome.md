---
id: gridsome
name: Gridsome
urls:
  home: https://gridsome.org
  repository: https://github.com/gridsome/gridsome
  docs: https://gridsome.org/docs/
  plugins: https://gridsome.org/plugins/
category:
  - ssg
  - framework
description: Vue.js framework that builds static HTML, JSON and JavaScript files for websites and apps at build time.
status: stub
maintainer: Gridsome
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 8
basedOn:
  - vue
templating: vue
runsAs:
  - static
renderingModes:
  - static
  - spa
installMethod: npm global CLI (@gridsome/cli), then gridsome create
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2020-11-22
githubStargazers: 8460
npmWeeklyDownloads: 981
contributors: 120
pluginCount: 214
social:
  x: https://twitter.com/gridsome
  discord: https://discord.gg/daeay6n
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://gridsome.org
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/gridsome/gridsome
    checkedAt: 2026-10-22
  - field: urls
    url: https://gridsome.org/docs/
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/gridsome/gridsome/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/gridsome/gridsome
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/gridsome/gridsome/master/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://gridsome.org/docs/
    checkedAt: 2026-10-22
  - field: runtime
    url: https://gridsome.org/docs/
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://registry.npmjs.org/gridsome
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://gridsome.org/docs/
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://gridsome.org/docs/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://gridsome.org/docs/how-it-works/
    checkedAt: 2026-10-22
  - field: templating
    url: https://gridsome.org/docs/
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/gridsome/gridsome
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/gridsome/gridsome/master/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/gridsome
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/gridsome
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/gridsome
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/gridsome/gridsome
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/gridsome/gridsome/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/gridsome
    checkedAt: 2026-10-22
  - field: urls
    url: https://gridsome.org/plugins/
    checkedAt: 2026-10-22
  - field: pluginCount
    url: https://gridsome.org/plugins/
    checkedAt: 2026-10-22
ai: authored
packagistDownloads: null
---

Gridsome is a framework for building static websites and apps with Vue.js. Pages are `.vue` files in `src/pages`, and a `[param].vue` file is a dynamic route. Source plugins fetch content from local files or external APIs into a local database, and a GraphQL data layer queries it. The build writes one HTML file and one JSON file for each page.

Each generated page loads as static HTML and then hydrates into a Vue single-page app in the browser. The [deployment guide](https://gridsome.org/docs/deployment/) says a site needs a static web host and lists services for Git-based deploys, as well as uploading the build folder over FTP.

## Worth knowing

The docs name VuePress, Nuxt and Gatsby as alternatives.
