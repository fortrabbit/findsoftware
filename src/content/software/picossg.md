---
id: picossg
name: PicoSSG
urls:
  home: https://picossg.dev/
  repository: https://codeberg.org/wolframkriesing/picossg
  docs: https://picossg.dev/docs/install
category:
  - ssg
description: PicoSSG is a static site generator that turns Markdown and Nunjucks template files into a static website.
status: active
maintainer: Wolfram Kriesing
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 23
contentStore:
  - flat-file
templating: nunjucks
runsAs:
  - static
renderingModes:
  - static
installMethod: npm package, run with npx
licenseModel: open-source
license: AGPL-3.0
currentMajor: "6"
latestReleaseDate: 2026-02-12
npmWeeklyDownloads: 6
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://picossg.dev/
    checkedAt: 2026-10-22
  - field: urls
    url: https://codeberg.org/api/v1/repos/wolframkriesing/picossg
    checkedAt: 2026-10-22
  - field: urls
    url: https://picossg.dev/docs/install
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://registry.npmjs.org/@pic0/ssg/latest
    checkedAt: 2026-10-22
  - field: category
    url: https://picossg.dev/docs
    checkedAt: 2026-10-22
  - field: contentStore
    url: https://codeberg.org/wolframkriesing/picossg/raw/branch/main/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://codeberg.org/wolframkriesing/picossg/raw/branch/main/README.md
    checkedAt: 2026-10-22
  - field: language
    url: https://codeberg.org/api/v1/repos/wolframkriesing/picossg
    checkedAt: 2026-10-22
  - field: runtime
    url: https://picossg.dev/docs/install
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://picossg.dev/docs/install
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://picossg.dev/docs/install
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://picossg.dev/docs
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://picossg.dev/docs
    checkedAt: 2026-10-22
  - field: license
    url: https://codeberg.org/wolframkriesing/picossg/raw/branch/main/LICENSE.md
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/@pic0/ssg/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@pic0/ssg
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@pic0/ssg
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript · SSG
ai: authored
packagistDownloads: null
---

PicoSSG reads Markdown and Nunjucks template files from a content directory and writes a static website to an output directory. The [installation guide](https://picossg.dev/docs/install) runs a build from the command line with npx. The build runs on Node, and the output is files that any web server can serve.
