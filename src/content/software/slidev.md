---
id: slidev
name: Slidev
urls:
  home: https://sli.dev
  repository: https://github.com/slidevjs/slidev
  docs: https://sli.dev/guide/
  plugins: https://sli.dev/resources/theme-gallery
category:
  - ssg
description: Markdown-based slides maker and presenter that builds slide decks as web pages with Vue and Vite.
status: active
maintainer: Anthony Fu
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 22
basedOn:
  - vue
  - vite
contentStore:
  - flat-file
runsAs:
  - local
  - static
renderingModes:
  - static
  - spa
installMethod: npm init slidev (create-slidev scaffold)
licenseModel: open-source
license: MIT
currentMajor: "53"
latestReleaseDate: 2026-09-16
githubStargazers: 49174
npmWeeklyDownloads: 81683
contributors: 377
dependentRepos: 570
dependentPackages: 145
social:
  x: https://x.com/slidevjs
  discord: https://chat.sli.dev
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/slidevjs/slidev
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/slidevjs/slidev
    checkedAt: 2026-10-22
  - field: urls
    url: https://sli.dev/guide/
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/slidevjs/slidev/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/slidevjs/slidev
    checkedAt: 2026-10-22
  - field: category
    url: https://sli.dev/guide/
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://raw.githubusercontent.com/slidevjs/slidev/main/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://raw.githubusercontent.com/slidevjs/slidev/main/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://sli.dev/guide/
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://sli.dev/guide/
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://sli.dev/guide/hosting
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://sli.dev/guide/hosting
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://sli.dev/guide/hosting
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://sli.dev/guide/hosting
    checkedAt: 2026-10-22
  - field: contentStore
    url: https://sli.dev/guide/
    checkedAt: 2026-10-22
  - field: urls
    url: https://sli.dev/guide/
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/slidevjs/slidev/main/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/slidevjs/slidev/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/slidevjs/slidev/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/slidevjs/slidev/releases
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/slidevjs/slidev
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/slidevjs/slidev/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@slidev/cli
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/@slidev/cli
    checkedAt: 2026-10-22
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40slidev%2Fcli
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40slidev%2Fcli
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Slidev is a web-based slides maker and presenter. A deck is written as Markdown in a slides.md file, and Vue 3 powers the Markdown, so Vue components can be embedded in slides. Vite provides the instant reloading while editing.

A project is created with the create-slidev scaffold, and editing and presenting run Slidev as a web server. After the presentation, the [hosting guide](https://sli.dev/guide/hosting) describes building the deck into a static single-page application that any static server can serve.
