---
id: ipx
name: IPX
urls:
  home: https://unjs.io/packages/ipx/
  repository: https://github.com/unjs/ipx
category:
  - media
description: Image optimizer that serves images in any size and format from a URL, using sharp for raster images and svgo for SVG.
status: active
maintainer: Pooya Parsa
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
runsAs:
  - always-on
installMethod: npx ipx serve --dir ./
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-30
githubStargazers: 2464
npmWeeklyDownloads: 1341015
contributors: 37
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: status
    url: https://unjs.io/packages/ipx/
    checkedAt: 2026-11-03
  - field: urls
    url: https://unjs.io/packages/ipx/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/unjs/ipx
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/unjs/ipx/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/unjs/ipx
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/unjs/ipx/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/unjs/ipx/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/unjs/ipx/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/unjs/ipx/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/unjs/ipx/blob/v4.1.0/package.json
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/unjs/ipx/blob/v4.1.0/package.json
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/unjs/ipx/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/unjs/ipx
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/ipx
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/unjs/ipx/tags
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/unjs/ipx/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/unjs/ipx/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/unjs/ipx
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/unjs/ipx/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

IPX is an image optimizer that serves an image from a URL in the size, format and quality that the URL asks for. The URL carries modifiers such as width, height, format and quality, followed by the path of the source image. Raster images are processed with sharp and SVG files with svgo, and the source can be a local directory or an allowlist of remote domains. The project ships a command that starts a server and a programmatic API for mounting the optimizer in an application, and it runs on Node.js and is started with npx or bunx. The project's organization page still presents the software.
