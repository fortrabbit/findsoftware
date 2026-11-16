---
id: slate-editor
name: Slate
urls:
  home: https://www.slatejs.org/
  repository: https://github.com/ianstormtaylor/slate
  docs: https://docs.slatejs.org
category:
  - ui-library
description: Framework for building rich text editors, with a plugin-based core.
status: active
maintainer: Ian Storm Taylor
maintainerType: individual
firstRelease: 2016
language: javascript
basedOn:
  - react
installMethod: npm, bundled file
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-26
githubStargazers: 31744
npmWeeklyDownloads: 4196598
contributors: 447
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://github.com/ianstormtaylor/slate/blob/main/Readme.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/ianstormtaylor/slate/blob/main/Readme.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/ianstormtaylor/slate
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/ianstormtaylor/slate/blob/main/Readme.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/ianstormtaylor/slate/blob/main/License.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/slate
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/ianstormtaylor/slate
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/ianstormtaylor/slate/blob/main/Readme.md
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/ianstormtaylor/slate/blob/main/Readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/ianstormtaylor/slate/blob/main/docs/walkthroughs/01-installing-slate.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.slatejs.org/walkthroughs/01-installing-slate
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/slate
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/ianstormtaylor/slate
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/ianstormtaylor/slate/blob/main/Readme.md
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/ianstormtaylor/slate
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/ianstormtaylor/slate/contributors?per_page=1&anon=false
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/ianstormtaylor/slate/releases/tag/slate@0.147.4
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/ianstormtaylor/slate/releases/tag/slate@0.147.4
    checkedAt: 2026-11-16
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

Slate is a framework for building rich text editors. The README says all of its logic is implemented with plugins and describes it as a pluggable implementation of contenteditable built on top of React. Its React components are published as a separate package that the install guide installs next to the core package, and the guide also describes a pre-bundled file.

## Worth knowing

Slate's core prescribes no schema, so by default pasted content is parsed as plain text until the application handles it. The README says Slate is currently in beta, that some APIs may still change, and that it is contributor-driven and not backed by a large company.
