---
id: milkdown
name: Milkdown
urls:
  home: https://milkdown.dev
  repository: https://github.com/Milkdown/milkdown
  docs: https://milkdown.dev/docs/guide/getting-started
category:
  - ui-library
description: Plugin-driven WYSIWYG markdown editor framework for web applications.
status: active
maintainer: Mirone
maintainerType: individual
firstRelease: 2021
language: javascript
basedOn:
  - prosemirror
  - remark
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-10-27
githubStargazers: 12068
npmWeeklyDownloads: 916904
contributors: 80
dependentRepos: 98
dependentPackages: 91
social:
  x: https://twitter.com/mirone_saul
  discord: https://discord.gg/SdMnrSMyBX
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://milkdown.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://milkdown.dev/docs/guide/getting-started
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/Milkdown/milkdown
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/@milkdown/core
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/Milkdown/milkdown/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/Milkdown/milkdown/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/Milkdown/milkdown/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/Milkdown/milkdown
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/Milkdown/website/blob/main/docs/guide/faq.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/Milkdown/website/blob/main/docs/guide/getting-started.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/Milkdown/milkdown/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/Milkdown/milkdown/releases/tag/v7.23.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/Milkdown/milkdown/releases/tag/v7.23.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/Milkdown/milkdown
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/Milkdown/milkdown/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@milkdown/core
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40milkdown%2Fcore
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40milkdown%2Fcore
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/Milkdown/milkdown/blob/main/README.md
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
---

Milkdown is a WYSIWYG markdown editor framework in TypeScript, in which syntax, themes and UI are added as plugins. It is built on ProseMirror and remark, and collaborative editing uses Y.js. The core package is installed next to @milkdown/crepe, the ready-to-use route, or @milkdown/kit, for an editor assembled from plugins.

## Worth knowing

The FAQ says Milkdown relies on DOM APIs and cannot run on the server, so an app that renders pages on the server initializes the editor on the client only. The homepage says it comes without any CSS, and themes are separate packages.
