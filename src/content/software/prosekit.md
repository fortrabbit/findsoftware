---
id: prosekit
name: ProseKit
urls:
  home: https://prosekit.dev
  repository: https://github.com/prosekit/prosekit
  docs: https://prosekit.dev/getting-started/introduction/
category:
  - ui-library
description: Framework-agnostic rich text editor framework for web applications, built on ProseMirror.
status: active
maintainer: ocavue
firstRelease: 2023
language: javascript
runtime:
  - node
basedOn:
  - prosemirror
i18n: rtl
installMethod: npm, shadcn
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-11-14
githubStargazers: 1232
npmWeeklyDownloads: 35118
contributors: 20
dependentRepos: 1
social:
  x: https://twitter.com/ocavue
  bluesky: https://bsky.app/profile/ocavue.bsky.social
  discord: https://discord.com/invite/nzBgtm5ryH
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://prosekit.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/prosekit/prosekit
    checkedAt: 2026-11-16
  - field: urls
    url: https://prosekit.dev/getting-started/introduction/
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/prosekit
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/prosekit/prosekit/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/prosekit/prosekit
    checkedAt: 2026-11-16
  - field: category
    url: https://prosekit.dev/
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://prosekit.dev/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://prosekit.dev/getting-started/quick-start/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/prosekit/prosekit/blob/master/README.md
    checkedAt: 2026-11-16
  - field: i18n
    url: https://prosekit.dev/examples/rtl/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://prosekit.dev/guides/server-side-rendering/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/prosekit/prosekit
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/prosekit/prosekit
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/prosekit/prosekit/releases/tag/v0.23.3
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/prosekit/prosekit/releases/tag/v0.23.3
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/prosekit/prosekit
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/prosekit/prosekit/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/prosekit
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/prosekit
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

ProseKit is a rich text editor framework built on ProseMirror, the editing core it is based on. It is headless by design, so the application controls the look of the editor, and it ships Tailwind copy-paste components for an editor that is ready to use. The core has adapters for React, Vue, Preact, Svelte, Solid and vanilla JavaScript, and collaborative editing works with Yjs or Loro.

The [server-side rendering guide](https://prosekit.dev/guides/server-side-rendering/) says the editor can run in Node.js, where DOM-dependent APIs need a DOM implementation. The [migration guide](https://prosekit.dev/guides/migration/) maps Tiptap patterns to ProseKit equivalents.
