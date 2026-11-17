---
id: vizzu
name: Vizzu
urls:
  home: https://lib.vizzuhq.com/latest/
  repository: https://github.com/vizzuhq/vizzu-lib
  docs: https://lib.vizzuhq.com/latest/
  plugins: https://lib.vizzuhq.com/latest/PROJECTS/
category:
  - graphics
description: JavaScript library for animated data visualizations and data stories, with a C++ engine compiled to WebAssembly.
status: active
maintainer: Vizzu Inc.
maintainerType: company
firstRelease: 2021
language: javascript
installMethod: npm, cdn
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-04-20
githubStargazers: 2050
npmWeeklyDownloads: 826
contributors: 14
social:
  x: https://twitter.com/VizzuHQ
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://lib.vizzuhq.com/latest/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/vizzuhq/vizzu-lib
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://registry.npmjs.org/vizzu
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
  - field: maintainerType
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
  - field: language
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/vizzuhq/vizzu-lib
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/vizzu
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/vizzuhq/vizzu-lib/releases
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/vizzuhq/vizzu-lib/releases
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/vizzuhq/vizzu-lib
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/vizzuhq/vizzu-lib/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/vizzuhq/vizzu-lib/blob/main/README.md
    checkedAt: 2026-11-17
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

Vizzu is a JavaScript library for animated data visualizations and data stories. Its README describes a generic dataviz engine, written in C++ and compiled to WebAssembly, that generates many types of charts and animates between them, for static charts as well as animated data stories and interactive explorers. A separate page lists external extensions, bindings and templates.

## Worth knowing

The constructor loads the WebAssembly module asynchronously, so any method except animate() throws an exception until initialization has finished.
