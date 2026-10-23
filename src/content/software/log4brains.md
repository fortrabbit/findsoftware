---
id: log4brains
name: Log4brains
urls:
  repository: https://github.com/thomvaill/log4brains
category:
  - ssg
description: Tool for logging architecture decision records (ADRs) and publishing them as a static website.
status: active
maintainer: Thomas Vaillant
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 18
contentStore:
  - flat-file
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: npm install -g log4brains
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2024-12-17
githubStargazers: 1603
npmWeeklyDownloads: 1670
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://api.github.com/repos/thomvaill/log4brains
    checkedAt: 2026-10-21
  - field: category
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/thomvaill/log4brains
    checkedAt: 2026-10-21
  - field: runtime
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/log4brains
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/thomvaill/log4brains
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/log4brains
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/thomvaill/log4brains/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/thomvaill/log4brains
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/log4brains
    checkedAt: 2026-10-21
  - field: contentStore
    url: https://raw.githubusercontent.com/thomvaill/log4brains/develop/README.md
    checkedAt: 2026-10-21
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Log4brains is a docs-as-code knowledge base for architecture decision records (ADRs). The records are markdown files stored in the project's git repository, written from the IDE or created from the command line. A local preview with hot reload shows the knowledge base while it is edited, and a build publishes it as a static website to a static host such as GitHub Pages, GitLab Pages or S3.

The README lists searchable records, a timeline menu, a customizable template (MADR by default) and support for mono and multi package projects.

## Worth knowing

The project has no website of its own beyond the repository. The README's own example knowledge base shows what the published output looks like.
