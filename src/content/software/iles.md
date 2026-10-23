---
id: iles
name: îles
urls:
  home: https://iles.pages.dev
  repository: https://github.com/ElMassimo/iles
  docs: https://iles-docs.netlify.app
category:
  - ssg
description: Static site generator with partial hydration, for sites whose pages and layouts are Vue components.
status: active
maintainer: Máximo Mussini
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 20
basedOn:
  - vite
  - vue
runsAs:
  - static
renderingModes:
  - static
installMethod: pnpm create iles@next
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-03-27
githubStargazers: 1163
npmWeeklyDownloads: 270
social:
  x: https://twitter.com/ilesjs
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://iles.pages.dev
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/ElMassimo/iles
    checkedAt: 2026-10-21
  - field: urls
    url: https://iles-docs.netlify.app/guide/introduction
    checkedAt: 2026-10-21
  - field: category
    url: https://iles-docs.netlify.app/guide/introduction
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://iles-docs.netlify.app/guide/introduction
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://iles-docs.netlify.app/guide/frameworks
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/ElMassimo/iles
    checkedAt: 2026-10-21
  - field: runtime
    url: https://registry.npmjs.org/iles
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/iles
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://raw.githubusercontent.com/ElMassimo/iles/main/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://iles-docs.netlify.app/guide/introduction
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://iles-docs.netlify.app/guide/deployment
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/ElMassimo/iles
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://raw.githubusercontent.com/ElMassimo/iles/main/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/iles
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/iles
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/ElMassimo/iles
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/iles
    checkedAt: 2026-10-21
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

îles is a static site generator with partial hydration, built on Vite.js. Its pages and layouts are Vue components, and the build output is static files. Client directives mark which components are interactive, and the build ships only the JavaScript those components need.

## Worth knowing

The introduction page states the project status as Beta: "Beta APIs may change on minor releases. Lock the version to avoid breakage." The repository has no GitHub releases, so the release date shown is the npm date of the latest version.
