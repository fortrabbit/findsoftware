---
id: velite
name: Velite
urls:
  home: https://velite.js.org
  repository: https://github.com/zce/velite
  docs: https://velite.js.org/guide/introduction
category:
  - library
description: Content layer library that turns Markdown, MDX, YAML and JSON files into typed data for a JavaScript or TypeScript application.
status: active
maintainer: Lei Wang
maintainerType: individual
firstRelease: 2024
language: javascript
runtime:
  - node
runtimeMin: node 18
contentStore:
  - flat-file
runsAs:
  - local
installMethod: npm install velite -D
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-06-17
githubStargazers: 824
npmWeeklyDownloads: 50083
contributors: 21
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://velite.js.org
    checkedAt: 2026-10-23
  - field: urls
    url: https://velite.js.org/guide/introduction
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/zce/velite
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/zce/velite/blob/main/license
    checkedAt: 2026-10-23
  - field: license
    url: https://velite.js.org
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://velite.js.org
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://zce.me/
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/zce/velite
    checkedAt: 2026-10-23
  - field: runtime
    url: https://velite.js.org/guide/quick-start
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://velite.js.org/guide/quick-start
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://velite.js.org/guide/quick-start
    checkedAt: 2026-10-23
  - field: category
    url: https://velite.js.org/guide/introduction
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://velite.js.org/guide/quick-start
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://velite.js.org/reference/cli
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/zce/velite
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/zce/velite/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/velite
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/zce/velite/releases/tag/v0.4.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/zce/velite/releases/tag/v0.4.0
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/zce/velite/releases/tag/v0.1.0
    checkedAt: 2026-10-23
figure:
  emoji: 📐
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Library
ai: authored
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Velite is a content layer library that reads Markdown, MDX, YAML and JSON files from a content folder, checks each entry against a Zod schema declared in a config file, and writes the result as typed data an application imports. Image and file references inside the content are resolved at build time, and image optimization is part of the built-in asset processing. The author is Lei Wang.

The package is installed as a development dependency and run with the `velite` command, optionally in watch mode during development. The [quick start](https://velite.js.org/guide/quick-start) covers the config file and the content folder layout.

## Worth knowing

Velite is an ESM-only package, so it cannot be loaded with `require()`, and the nearest `package.json` needs `"type": "module"` or the config file needs a module extension.

The introduction says the documentation "is not yet complete".
