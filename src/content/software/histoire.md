---
id: histoire
name: Histoire
urls:
  home: https://histoire.dev/
  repository: https://github.com/histoire-dev/histoire
  docs: https://histoire.dev/
category:
  - dev-tool
description: Vite-based tool that builds interactive story books of components for Vue, React and Svelte.
status: active
maintainer: Guillaume Chau
firstRelease: 2022
language: javascript
basedOn:
  - vite
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: npm i -D histoire
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-04-09
githubStargazers: 3585
npmWeeklyDownloads: 125480
contributors: 79
social:
  x: https://twitter.com/histoire_dev
  mastodon: https://m.webtoo.ls/@histoire
  discord: https://discord.gg/KpCnT72rJk
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://histoire.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/histoire-dev/histoire
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/histoire-dev/histoire/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/histoire-dev/histoire
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/histoire-dev/histoire/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://histoire.dev/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/histoire-dev/histoire
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/histoire-dev/histoire/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://histoire.dev/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/histoire-dev/histoire/blob/main/docs/guide/vue3/getting-started.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/histoire-dev/histoire/blob/main/docs/guide/deploy-node.md
    checkedAt: 2026-10-28
  - field: renderingModes
    url: https://github.com/histoire-dev/histoire/blob/main/docs/guide/deploy-node.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/histoire-dev/histoire/blob/main/docs/guide/vue3/getting-started.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/histoire-dev/histoire/blob/main/docs/guide/vue3/getting-started.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/histoire-dev/histoire/blob/main/docs/guide/vue3/getting-started.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/histoire-dev/histoire/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/histoire-dev/histoire/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/histoire-dev/histoire/releases
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/histoire
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/histoire-dev/histoire
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/histoire-dev/histoire/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Histoire is a Vite-based tool for writing stories, pages that show a component in one or more variants with controls and the source code that reproduces it. A story file imports a component and mounts it in a variant. Histoire builds the stories into a book with navigation, a search index, Markdown documentation and copyable source code. The README lists Vue, React, Svelte, Nuxt and SvelteKit as supported. Each framework is added as a development dependency next to Histoire, and the CLI runs a development server for the book.

## Worth knowing

The npm package's latest tag points to a beta of the next major release, while the newest stable GitHub release belongs to the earlier line. The docs describe beta features, such as an MCP server and a standalone Node deployment target, and a Node.js requirement that the stable package does not declare. Read the docs for the version being installed.
