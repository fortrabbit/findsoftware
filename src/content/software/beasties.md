---
id: beasties
name: Beasties
urls:
  repository: https://github.com/danielroe/beasties
  docs: https://github.com/danielroe/beasties/blob/main/packages/beasties/README.md
category:
  - build-tool
description: Build plugin that inlines a page's critical CSS and lazy-loads the rest of its stylesheets.
status: active
maintainer: Daniel Roe
maintainerType: individual
firstRelease: 2024
language: javascript
runtime:
  - node
runtimeMin: node 20
runsAs:
  - local
installMethod: npm i -D beasties
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-12
githubStargazers: 708
npmWeeklyDownloads: 5061489
contributors: 37
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/danielroe/beasties
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/danielroe/beasties/blob/main/packages/beasties/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/danielroe/beasties/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/danielroe/beasties
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/danielroe/beasties/blob/main/packages/beasties/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/danielroe/beasties/v0.5.5/packages/beasties/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/danielroe/beasties/v0.5.5/packages/beasties/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/danielroe/beasties/blob/main/packages/beasties/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/danielroe/beasties/blob/main/packages/beasties/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/danielroe/beasties/blob/main/packages/beasties/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/danielroe/beasties
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/danielroe/beasties/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/danielroe/beasties/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/danielroe/beasties/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/danielroe/beasties/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/danielroe/beasties
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/danielroe/beasties/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/beasties
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Beasties is a Node module that inlines the critical CSS of a page into its HTML and lazy-loads the rest of the stylesheets. It reads the markup and the CSS and keeps the rules that match, without rendering the page in a headless browser. According to its README, this means it inlines every CSS rule the document uses, not only the rules needed above the fold.

It is installed as a development dependency and called from a build step. The same repository publishes [beasties-webpack-plugin](https://github.com/danielroe/beasties/tree/main/packages/beasties-webpack-plugin) for webpack and vite-plugin-beasties for Vite, which run the module inside those builds. The README also describes a split into a build-time compiler and a runtime processor for server-rendered pages, where the processor is created once and reused.

Beasties is a maintained fork of critters. The preload strategy for the deferred stylesheets is one of its options.

## Worth knowing

The README offers `data-beasties-container` attributes to limit the markup it evaluates.
