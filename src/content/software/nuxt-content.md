---
id: nuxt-content
name: Nuxt Content
urls:
  home: https://content.nuxt.com
  repository: https://github.com/nuxt/content
  docs: https://content.nuxt.com/docs/getting-started/installation
category:
  - cms
description: File-based content module for Nuxt that queries Markdown, YAML, CSV and JSON files from a Vue application.
status: active
maintainer: Nuxt Project
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 20
basedOn:
  - nuxt
contentStore:
  - flat-file
databases:
  - sqlite
  - postgres
i18n: multi-language sites through the @nuxtjs/i18n module
runsAs:
  - static
  - per-request
  - always-on
renderingModes:
  - static
  - server
installMethod: pnpm add @nuxt/content
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-12
githubStargazers: 3672
npmWeeklyDownloads: 120115
contributors: 316
social:
  bluesky: https://go.nuxt.com/bluesky
  discord: https://discord.gg/sBXDm6e8SP
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://content.nuxt.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://content.nuxt.com/docs/getting-started/installation
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/nuxt/content
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/nuxt/content
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/nuxt/content
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/nuxt/content/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://content.nuxt.com
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/nuxt/content
    checkedAt: 2026-10-23
  - field: runtime
    url: https://registry.npmjs.org/@nuxt/content/latest
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://registry.npmjs.org/@nuxt/content/latest
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://content.nuxt.com/docs/getting-started/installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://content.nuxt.com/docs/getting-started/installation
    checkedAt: 2026-10-23
  - field: category
    url: https://content.nuxt.com
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://content.nuxt.com
    checkedAt: 2026-10-23
  - field: databases
    url: https://content.nuxt.com/docs/collections/define
    checkedAt: 2026-10-23
  - field: i18n
    url: https://content.nuxt.com/docs/integrations/i18n
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://content.nuxt.com/docs/deploy/static
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://content.nuxt.com/docs/deploy/serverless
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://content.nuxt.com/docs/deploy/server
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://content.nuxt.com
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/nuxt/content
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/nuxt/content/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@nuxt/content
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/nuxt/content/releases/tag/v3.16.2
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/nuxt/content/releases/tag/v3.16.2
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/nuxt/content/releases/tag/v1.0.0
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Nuxt Content is a module for Nuxt that reads the files in a project's content folder, in Markdown, YAML, CSV or JSON, and makes them queryable from Vue components. Markdown files can contain Vue components through the MDC syntax. Collections are declared in a `content.config.ts` file. Multi-language sites use the @nuxtjs/i18n module.

The [docs](https://content.nuxt.com/docs/getting-started/installation) describe installation as adding the package to a Nuxt project and registering the module in `nuxt.config.ts`. The visual editor for the same content is the separate Nuxt Studio module.

## Worth knowing

The module runs inside a Nuxt application, so the hosting options are those of that application. The deploy docs cover static hosting through Nuxt prerendering, where the database loads in the browser as WASM SQLite and content queries run there, serverless platforms, where each request starts a fresh Nuxt server, and a Node server. With the default SQLite connector the server needs an OS with a recent enough glibc.
