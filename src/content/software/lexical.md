---
id: lexical
name: Lexical
urls:
  home: https://lexical.dev
  repository: https://github.com/meta/lexical
  docs: https://lexical.dev/docs/intro
category:
  - ui-library
description: Extensible text editor framework for the web, with a framework-agnostic core and React bindings.
status: active
maintainer: Meta Platforms, Inc.
maintainerType: company
firstRelease: 2022
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-28
githubStargazers: 24029
npmWeeklyDownloads: 8910903
contributors: 452
social:
  discord: https://discord.gg/KmG4wQnnD9
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://lexical.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/meta/lexical
    checkedAt: 2026-11-16
  - field: urls
    url: https://lexical.dev/docs/intro
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/meta/lexical/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/meta/lexical/releases/tag/v0.3.3
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/meta/lexical
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/meta/lexical/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/meta/lexical/blob/main/README.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/lexical
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/meta/lexical
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/meta/lexical/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/meta/lexical/releases/tag/v0.53.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/meta/lexical/releases/tag/v0.53.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/meta/lexical
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/meta/lexical/contributors?per_page=1
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

Lexical is a text editor framework for the web. It attaches to a contenteditable element and keeps its own model of the document, and application code reads and changes that model through Lexical's APIs. Features arrive as extensions, so an editor includes only the nodes and behaviors it uses. The core does not depend on a UI framework. The React bindings are a separate package, and collaborative editing runs through a Yjs integration.

A document can be saved as JSON and restored from it, and exported as HTML or Markdown. Outside a browser, HTML import and export run through a headless package that provides a DOM window. The project began at Meta, and its docs name several products as users.

## Worth knowing

The docs list minimum versions of Firefox, Chrome and Safari and state that Internet Explorer is not supported.
