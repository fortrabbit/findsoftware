---
id: capri
name: Capri
urls:
  home: https://capri.build
  repository: https://github.com/capri-js/capri
  docs: https://github.com/capri-js/capri/blob/main/README.md
category:
  - ssg
description: Static site generator for React and Preact that renders pages to static HTML and hydrates only the components marked as islands.
status: active
maintainer: Lionizers GmbH
maintainerType: company
firstRelease: 2022
hqCountry: DE
language: typescript
hosting:
  - static
basedOn:
  - react
  - preact
runsAs:
  - static
renderingModes:
  - static
installMethod: npm create capri
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-04-08
githubStargazers: 213
npmWeeklyDownloads: 15
contributors: 3
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/capri-js/capri
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/capri-js/capri
    checkedAt: 2026-10-22
  - field: urls
    url: https://raw.githubusercontent.com/capri-js/capri/main/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://capri.build/impressum.html
    checkedAt: 2026-10-22
  - field: hqCountry
    url: https://capri.build/impressum.html
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/capri-js/capri
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/capri-js/capri/blob/main/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://github.com/capri-js/capri/blob/main/README.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://github.com/capri-js/capri/blob/main/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://github.com/capri-js/capri/blob/main/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://github.com/capri-js/capri/blob/main/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/capri-js/capri
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/capri-js/capri/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/capri/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/capri
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/capri
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/capri-js/capri
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/capri-js/capri/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/capri
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

Capri uses island architecture: only interactive components hydrate in the browser, and everything else ships as static HTML. Pages are rendered at build time, and the output deploys to any static host.

A project starts with `npm create capri`, which takes a template option for React or Preact.
