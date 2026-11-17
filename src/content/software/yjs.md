---
id: yjs
name: Yjs
urls:
  home: https://yjs.dev
  repository: https://github.com/yjs/yjs
  docs: https://docs.yjs.dev
category:
  - library
description: CRDT framework that exposes shared data types, such as maps and arrays, which merge concurrent changes between peers without conflicts.
status: active
maintainer: Kevin Jahns
maintainerType: individual
firstRelease: 2014
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2026-09-23
githubStargazers: 23074
npmWeeklyDownloads: 15699192
contributors: 127
dependentRepos: 3035
dependentPackages: 570
social:
  discord: https://discord.gg/T3nqMT6qbM
  forum: https://discuss.yjs.dev
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://yjs.dev/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/yjs/yjs
    checkedAt: 2026-11-17
  - field: urls
    url: https://docs.yjs.dev/
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://api.github.com/repos/yjs/yjs/releases/tags/v0.0.5
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://docs.yjs.dev/license.md
    checkedAt: 2026-11-17
  - field: maintainerType
    url: https://docs.yjs.dev/license.md
    checkedAt: 2026-11-17
  - field: category
    url: https://raw.githubusercontent.com/yjs/yjs/main/README.md
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/yjs/yjs
    checkedAt: 2026-11-17
  - field: license
    url: https://raw.githubusercontent.com/yjs/yjs/main/LICENSE
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://raw.githubusercontent.com/yjs/yjs/main/README.md
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/yjs/yjs/releases/tags/v13.6.33
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/yjs/yjs/releases/tags/v13.6.33
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/yjs
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/yjs/yjs
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/yjs/yjs/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/yjs
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/yjs
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/yjs/yjs/blob/main/README.md
    checkedAt: 2026-11-17
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Yjs is a CRDT framework that exposes shared types, such as maps and arrays, and merges concurrent changes from peers without conflicts. Editor bindings (ProseMirror, Quill, Monaco, Tiptap and others), connection providers such as y-websocket and database providers such as y-indexeddb are separate packages, installed from npm next to yjs. The [getting-started guide](https://docs.yjs.dev/getting-started/a-collaborative-editor) builds a collaborative editor with the Quill binding. Kevin Jahns maintains the project.

## Worth knowing

The README asks commercial users to sponsor the project, a social expectation that sits on top of the MIT license. Each binding and provider has its own package and repository, so the repository figures describe the core only.
