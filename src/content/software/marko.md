---
id: marko
name: Marko
urls:
  home: https://markojs.com
  repository: https://github.com/marko-js/marko
  docs: https://markojs.com/docs/introduction/installation
category:
  - ui-library
  - framework
description: HTML-based language and runtime for building web applications and user interfaces, with the Marko Run application framework.
status: active
maintainer: eBay Inc.
maintainerType: company
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 22
runsAs:
  - static
renderingModes:
  - server
  - static
installMethod: npm init marko
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-15
githubStargazers: 14459
npmWeeklyDownloads: 18885
contributors: 130
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://markojs.com
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/marko-js/marko
    checkedAt: 2026-10-22
  - field: urls
    url: https://markojs.com/docs/introduction/installation
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/marko-js/marko/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/marko-js/marko
    checkedAt: 2026-10-22
  - field: category
    url: https://markojs.com
    checkedAt: 2026-10-22
  - field: category
    url: https://markojs.com/docs/marko-run/getting-started
    checkedAt: 2026-10-22
  - field: runtime
    url: https://markojs.com/docs/introduction/installation
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://registry.npmjs.org/marko/latest
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://markojs.com/docs/introduction/installation
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://markojs.com/docs/marko-run/getting-started
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://markojs.com/docs/marko-run/adapters
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://markojs.com/docs/marko-run/adapters
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/marko-js/marko/main/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/marko-js/marko/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/marko/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/marko
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/marko-js/marko
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/marko-js/marko/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/marko
    checkedAt: 2026-10-22
figure:
  emoji: 🧩
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · UI
ai: authored
packagistDownloads: null
---

Marko is an HTML-based language and runtime for building web applications and user interfaces. Marko Run is the application framework for Marko, and a project created with `npm init marko` runs on Node.js.

Marko Run renders pages as streaming server-side output, and an adapter can also render the same routes to static files that any file server or CDN can serve. The [adapters documentation](https://markojs.com/docs/marko-run/adapters) describes the static option.

## Worth knowing

The installation page lists Node.js 18, 20 and 22 as prerequisites, while the npm package declares a higher minimum. The GitHub releases of the `marko` package stop at an older major than the npm release.
