---
id: minista
name: minista
urls:
  home: https://minista.dev
  repository: https://github.com/qrac/minista
  docs: https://minista.dev/docs/guide/
category:
  - ssg
description: Static site generator that builds websites from React JSX components with Vite.
status: active
maintainer: Qrac
maintainerType: individual
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 20
basedOn:
  - vite
templating: jsx
runsAs:
  - static
renderingModes:
  - static
installMethod: npm create minista@latest
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-14
githubStargazers: 210
npmWeeklyDownloads: 334
contributors: 8
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://api.github.com/repos/qrac/minista
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/qrac/minista
    checkedAt: 2026-10-21
  - field: urls
    url: https://minista.dev/docs/guide/
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/minista
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://raw.githubusercontent.com/qrac/minista/main/packages/minista/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://minista.dev/
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/qrac/minista/languages
    checkedAt: 2026-10-21
  - field: runtime
    url: https://minista.dev/docs/guide/
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/minista/latest
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://minista.dev/docs/guide/
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://minista.dev/docs/guide/build-deploy
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://minista.dev/docs/guide/build-deploy
    checkedAt: 2026-10-21
  - field: templating
    url: https://minista.dev/
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://github.com/qrac/minista/blob/main/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/qrac/minista/blob/main/packages/minista/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/minista/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/qrac/minista/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/qrac/minista
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/qrac/minista/contributors?per_page=1&anon=true
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/minista
    checkedAt: 2026-10-21
ai: authored
packagistDownloads: null
---

minista is a static site generator that builds websites from React JSX and TSX components. Its features are provided as Vite plugins. A project starts with `npm create minista@latest`, and the [build and deploy guide](https://minista.dev/docs/guide/build-deploy) describes publishing the generated files to static hosting.

## Worth knowing

The build runs under Node.js. The guide says no minista or Node.js server needs to keep running in production.
