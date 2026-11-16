---
id: lingui
name: Lingui
urls:
  home: https://lingui.dev
  repository: https://github.com/lingui/js-lingui
  docs: https://lingui.dev/installation
category:
  - library
description: Open-source internationalization library for JavaScript and TypeScript that extracts messages from source code into catalogs and compiles them at build time.
status: active
maintainer: Crowdin
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
contentStore:
  - flat-file
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-11-03
githubStargazers: 5937
npmWeeklyDownloads: 2573243
contributors: 280
dependentRepos: 1437
dependentPackages: 114
social:
  x: https://x.com/LinguiJS
  discord: https://discord.gg/hdNuF3rupQ
  forum: https://github.com/lingui/js-lingui/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://lingui.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/lingui/js-lingui
    checkedAt: 2026-11-16
  - field: urls
    url: https://lingui.dev/installation.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/lingui/js-lingui/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/lingui/js-lingui/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/lingui/js-lingui
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/lingui/js-lingui/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/lingui/js-lingui/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/lingui/js-lingui
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/lingui/js-lingui/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/lingui/js-lingui/releases/tags/v6.12.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/lingui/js-lingui/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/lingui-react
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@lingui/core
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/lingui/js-lingui
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/lingui/js-lingui/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40lingui%2Fcore
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40lingui%2Fcore
    checkedAt: 2026-11-16
  - field: contentStore
    url: https://lingui.dev/introduction.md
    checkedAt: 2026-11-16
ai: authored
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Lingui is an internationalization library for JavaScript and TypeScript. Messages are written in the source with compile-time macros, a CLI extracts them into catalogs, and the catalogs are compiled at build time.

The core package is framework-agnostic. React, Vue and SolidJS have official bindings, and Astro and Svelte are supported through community packages. The repository is a monorepo that also holds the CLI, the macro, Vite and SWC plugins, an ESLint plugin and the documentation site.

## Worth knowing

The macros need a build step: the README says they need Babel with the Lingui macro plugin or SWC with the Lingui SWC plugin. Lingui 6 packages are ESM-only. The installation guide asks for a recent Node.js, a build requirement because the library itself also runs in browsers.
