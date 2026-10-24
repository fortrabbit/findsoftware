---
id: coralite
name: Coralite
urls:
  home: https://coralite.dev/
  repository: https://codeberg.org/tjdavid/coralite
  docs: https://coralite.dev/docs/guide/index.html
category:
  - ssg
description: Web component framework that builds static sites, dynamic websites and single-page applications from HTML modules.
status: active
maintainer: Thomas David
runtime:
  - node
hosting:
  - static
runtimeMin: node 20
runsAs:
  - static
renderingModes:
  - static
  - spa
installMethod: npm create coralite
licenseModel: open-source
license: MPL-2.0
currentMajor: "0"
latestReleaseDate: 2026-08-22
npmWeeklyDownloads: 181
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://coralite.dev/
    checkedAt: 2026-10-21
  - field: urls
    url: https://codeberg.org/tjdavid/coralite
    checkedAt: 2026-10-21
  - field: urls
    url: https://coralite.dev/docs/guide/index.html
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://coralite.dev/
    checkedAt: 2026-10-21
  - field: category
    url: https://coralite.dev/
    checkedAt: 2026-10-21
  - field: runtime
    url: https://codeberg.org/tjdavid/coralite
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://codeberg.org/tjdavid/coralite
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://codeberg.org/tjdavid/coralite
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://coralite.dev/docs/guide/ssr.html
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://codeberg.org/tjdavid/coralite
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://coralite.dev/docs/guide/ssr.html
    checkedAt: 2026-10-21
  - field: license
    url: https://codeberg.org/tjdavid/coralite
    checkedAt: 2026-10-21
  - field: license
    url: https://registry.npmjs.org/coralite/latest
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/coralite/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/coralite
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/coralite
    checkedAt: 2026-10-21
ai: authored
---

Coralite is a static site generator built around HTML modules. Components are native custom elements, and a `server` block in each component runs during the build and writes static HTML files. Components that need interactivity are hydrated in the browser, and an element marked `no-hydration` is rendered without client-side hydration. The README also says the framework is designed for single-page applications and dynamic websites. The source is on Codeberg, and the [guide](https://coralite.dev/docs/guide/index.html) covers installation.

## Worth knowing

The `server` block runs only at build time, and using browser APIs such as `window` or `localStorage` inside it makes the build fail. Top-level imports in a component's script block are server-only unless the client block uses them.
