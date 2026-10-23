---
id: craftjs
name: Craft.js
urls:
  home: https://craft.js.org
  repository: https://github.com/prevwong/craft.js
  docs: https://craft.js.org/docs/overview
category:
  - ui-library
description: React framework for building drag-and-drop page editors from the developer's own React components.
status: active
maintainer: Previnash Wong Sze Chuan
maintainerType: individual
firstRelease: 2020
language: javascript
basedOn:
  - react
adminUi: false
installMethod: npm install --save @craftjs/core, or yarn add @craftjs/core
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-02-14
githubStargazers: 8760
npmWeeklyDownloads: 37224
contributors: 47
social:
  discord: https://discord.gg/sPpF7fX
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://craft.js.org
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/prevwong/craft.js
    checkedAt: 2026-10-23
  - field: urls
    url: https://craft.js.org/docs/overview
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/prevwong/craft.js/blob/main/packages/core/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/prevwong/craft.js/blob/main/packages/core/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/prevwong/craft.js
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://craft.js.org/docs/guides/basic-tutorial
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/prevwong/craft.js/blob/main/packages/core/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/prevwong/craft.js/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://registry.npmjs.org/@craftjs%2fcore/latest
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/prevwong/craft.js/blob/main/packages/core/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/prevwong/craft.js/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/prevwong/craft.js/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/prevwong/craft.js/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/prevwong/craft.js/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/prevwong/craft.js
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/prevwong/craft.js/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@craftjs/core
    checkedAt: 2026-10-23
figure:
  emoji: 🧩
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · UI
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

Craft.js is a React library for building drag-and-drop page editors. It modularizes the building blocks of an editor, and the developer writes the editor's interface and the editable components in React. The editor state serializes to JSON and can be recreated from it, so the application decides where edited pages are stored. The library is installed from npm as @craftjs/core, and a companion package, @craftjs/layers, adds a layers panel.

Craft.js is maintained by Previnash Wong Sze Chuan and accepts sponsorships.

## Worth knowing

Craft.js ships no ready-made editor interface; the README describes it as an abstraction on which a developer implements a page editor. It manages no content, storage or API of its own, so a project using it as part of a content tool supplies those itself.
