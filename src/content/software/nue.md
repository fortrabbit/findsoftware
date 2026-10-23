---
id: nue
name: Nue
urls:
  home: https://nuejs.org
  repository: https://github.com/nuejs/nue
  docs: https://nuejs.org/docs/getting-started
category:
  - ssg
  - framework
description: Development environment and static site generator for websites and single-page apps, run from a command line tool named nue.
status: active
maintainer: Tero Piirainen
language: javascript
runtime:
  - bun
hosting:
  - bun
runtimeMin: bun 1.2
installMethod: bun install --global nuekit
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2025-10-10
githubStargazers: 8813
npmWeeklyDownloads: 146
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://nuejs.org
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/nuejs/nue
    checkedAt: 2026-10-21
  - field: urls
    url: https://nuejs.org/docs/getting-started
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/nuejs/nue/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://nuejs.org
    checkedAt: 2026-10-21
  - field: category
    url: https://nuejs.org
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/nuejs/nue
    checkedAt: 2026-10-21
  - field: runtime
    url: https://nuejs.org/docs/getting-started
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://nuejs.org/docs/getting-started
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://nuejs.org/docs/getting-started
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/nuejs/nue/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/nuejs/nue/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/nuekit/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/nuekit
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/nuejs/nue
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/nuekit
    checkedAt: 2026-10-21
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Nue is a development environment for websites and single-page apps, run from a command line tool named nue. The tool runs on Bun only: the getting-started guide says Nue uses Bun exclusively. During development it serves pages straight from the source folder, and `nue build` writes the production site to a `.dist` folder. The project describes Nue as a static site generator.

## Worth knowing

The [getting-started guide](https://nuejs.org/docs/getting-started) states that the current major version is not backwards compatible with the previous one. The server part, Nueserver, currently works for local development only, according to its page.
