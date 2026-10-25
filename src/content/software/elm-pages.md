---
id: elm-pages
name: elm-pages
urls:
  home: https://elm-pages.com
  repository: https://github.com/dillonkearns/elm-pages
  docs: https://elm-pages.com/docs/getting-started
category:
  - framework
  - ssg
description: Elm framework for building sites and web apps with server-rendered and pre-rendered routes.
status: active
maintainer: Dillon Kearns
maintainerType: individual
firstRelease: 2019
language: other
runtime:
  - node
hosting:
  - node
  - static
runsAs:
  - static
renderingModes:
  - server
  - static
installMethod: npx
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-05-12
githubStargazers: 696
npmWeeklyDownloads: 713
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://elm-pages.com
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/dillonkearns/elm-pages
    checkedAt: 2026-10-21
  - field: urls
    url: https://elm-pages.com/docs/getting-started
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/elm-pages
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/dillonkearns/elm-pages/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://elm-pages.com
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/dillonkearns/elm-pages
    checkedAt: 2026-10-21
  - field: runtime
    url: https://elm-pages.com/docs/getting-started
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://elm-pages.com/docs/getting-started
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://elm-pages.com/docs/what-is-elm-pages
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://elm-pages.com/docs/adapters
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/dillonkearns/elm-pages
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/dillonkearns/elm-pages/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/elm-pages/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/elm-pages
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/dillonkearns/elm-pages
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/elm-pages
    checkedAt: 2026-10-21
ai: authored
packagistDownloads: null
---

elm-pages is a framework for building sites and web apps in Elm. Each route is either server-rendered, for content that depends on the request, or pre-rendered to static HTML at build time, and one app can mix both. A project is created with `npx elm-pages init`, as the [getting-started guide](https://elm-pages.com/docs/getting-started) describes.

The package is maintained by Dillon Kearns and published under the BSD-3-Clause license.

## Worth knowing

elm-pages requires the Lamdera compiler, a superset of the Elm compiler that the starter installs as an npm dev dependency. A build with only pre-rendered routes writes a `dist/` folder that works with static hosting, while server-rendered routes run on a traditional server or a serverless provider.
