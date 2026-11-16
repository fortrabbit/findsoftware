---
id: i18next
name: i18next
urls:
  home: https://www.i18next.com
  repository: https://github.com/i18next/i18next
  docs: https://www.i18next.com/overview/getting-started
  plugins: https://www.i18next.com/overview/plugins-and-utils
category:
  - library
description: JavaScript internationalization framework that looks up translated messages, with plurals, interpolation and context, in browsers, Node.js and Deno.
status: active
maintainer: i18next
firstRelease: 2012
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
runtimeMin: node 22
installMethod: npm, script tag from a CDN
licenseModel: open-source
license: MIT
currentMajor: "27"
latestReleaseDate: 2026-11-16
githubStargazers: 8670
npmWeeklyDownloads: 34750136
contributors: 225
dependentRepos: 49895
dependentPackages: 5066
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://www.i18next.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/i18next/i18next
    checkedAt: 2026-11-16
  - field: urls
    url: https://www.i18next.com/overview/getting-started
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/i18next
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/i18next/i18next/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://www.i18next.com/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/i18next/i18next
    checkedAt: 2026-11-16
  - field: runtime
    url: https://www.i18next.com/overview/supported-frameworks
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://registry.npmjs.org/i18next/latest
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://www.i18next.com/overview/getting-started
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://www.i18next.com/overview/getting-started
    checkedAt: 2026-11-16
  - field: license
    url: https://registry.npmjs.org/i18next/latest
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/i18next/i18next/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/i18next/i18next/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/i18next/i18next/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/i18next/i18next
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/i18next/i18next/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/i18next
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/i18next
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/i18next
    checkedAt: 2026-11-16
  - field: urls
    url: https://www.i18next.com/overview/plugins-and-utils
    checkedAt: 2026-11-16
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

i18next is an internationalization framework for JavaScript that stores messages as resources and looks them up with the `t()` function, with plurals, interpolation, nesting and context. It runs in browsers, Node.js and Deno, takes its resources at initialization or loads them through backend plugins, and offers optional caching and user language detection. Framework bindings for React, Vue, Angular and others are separate packages maintained by their authors, and the [plugins page](https://www.i18next.com/overview/plugins-and-utils) lists formats, extraction tools and utilities.

## Worth knowing

The homepage says the project is maintained by the team that builds Locize, a translation management service for i18next projects. The [getting-started guide](https://www.i18next.com/overview/getting-started) warns that switching message syntax later means converting every message, because one instance uses one syntax; the ICU and MF2 plugins replace i18next's own plural and context handling.
