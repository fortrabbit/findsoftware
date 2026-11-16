---
id: rehype
name: rehype
urls:
  home: https://unifiedjs.com
  repository: https://github.com/rehypejs/rehype
category:
  - library
description: Plugin-based processor that transforms HTML as a syntax tree, part of the unified collective's ecosystem.
status: active
maintainer: Titus Wormer
firstRelease: 2016
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
runtimeMin: node 16
installMethod: npm, cdn
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2024-09-27
githubStargazers: 2261
npmWeeklyDownloads: 4913552
contributors: 46
dependentRepos: 9928
dependentPackages: 262
social:
  forum: https://github.com/rehypejs/rehype/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://unifiedjs.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/rehypejs/rehype
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/rehypejs/rehype/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/rehypejs/rehype
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/rehypejs/rehype/blob/main/packages/rehype/readme.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/rehypejs/rehype/blob/main/packages/rehype/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/rehypejs/rehype/blob/main/packages/rehype/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/rehypejs/rehype/blob/main/packages/rehype/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/rehypejs/rehype
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/rehypejs/rehype/blob/main/license
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/rehypejs/rehype/commits/1.0.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/rehypejs/rehype/releases/tag/13.0.2
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/rehypejs/rehype/releases/tag/13.0.2
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/rehypejs/rehype
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/rehypejs/rehype/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/rehype
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/rehype
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/rehype
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/rehypejs/rehype/blob/main/packages/rehype/readme.md
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

rehype is the HTML processor of the unified ecosystem. It adds support for HTML to unified: it parses HTML into a syntax tree, runs plugins that inspect and change that tree, and writes the result back out as HTML. The npm package combines the parser and the serializer with unified. The separate rehype-parse and rehype-stringify packages cover one half each, and rehype-cli inspects and formats HTML in scripts.

The package runs in Node.js and in Deno, and can be loaded in browsers from esm.sh. Plugins are separate packages, some kept by the rehype organization and others by outside authors.

## Worth knowing

The package is ESM only. Improper use of HTML can open a site to cross-site scripting, and the README points to rehype-sanitize to make a tree safe. Plugins can open other attacks.
