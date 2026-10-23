---
id: vitepress
name: VitePress
urls:
  home: https://vitepress.dev
  repository: https://github.com/vuejs/vitepress
  docs: https://vitepress.dev/guide/what-is-vitepress
category:
  - ssg
description: Static site generator built on Vite and Vue that turns Markdown content into content-centric websites.
status: active
maintainer: Vue team
maintainerType: community
firstRelease: 2020
language: typescript
runtime:
  - node
hosting:
  - static
runtimeMin: node 22
basedOn:
  - vite
  - vue
contentStore:
  - flat-file
templating: vue, markdown
i18n: built-in i18n via locale directories
runsAs:
  - static
renderingModes:
  - static
  - spa
installMethod: npm add -D vitepress@next, then npx vitepress init
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-08-05
githubStargazers: 18417
npmWeeklyDownloads: 850580
contributors: 438
wikidata: Q137265963
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/vuejs/vitepress
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/vuejs/vitepress
    checkedAt: 2026-10-18
  - field: urls
    url: https://vitepress.dev/guide/what-is-vitepress
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://registry.npmjs.org/vitepress
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://vitepress.dev/guide/what-is-vitepress
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://vitepress.dev/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://vitepress.dev/guide/what-is-vitepress
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q137265963
    checkedAt: 2026-10-18
  - field: category
    url: https://vitepress.dev/guide/what-is-vitepress
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/vitepress/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/vuejs/vitepress
    checkedAt: 2026-10-18
  - field: runtime
    url: https://vitepress.dev/guide/getting-started
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://vitepress.dev/guide/getting-started
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://vitepress.dev/guide/what-is-vitepress
    checkedAt: 2026-10-18
  - field: templating
    url: https://vitepress.dev/guide/what-is-vitepress
    checkedAt: 2026-10-18
  - field: i18n
    url: https://vitepress.dev/guide/i18n
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://vitepress.dev/guide/what-is-vitepress
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://vitepress.dev/guide/getting-started
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/vuejs/vitepress
    checkedAt: 2026-10-18
  - field: license
    url: https://vitepress.dev/
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://vitepress.dev/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/vitepress/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://registry.npmjs.org/vitepress
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/vuejs/vitepress
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/vuejs/vitepress/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/vitepress
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://vitepress.dev/guide/getting-started
    checkedAt: 2026-10-19
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

VitePress is a static site generator built on Vite and Vue that turns Markdown files into documentation-style websites. Pages are written in Markdown and can embed Vue components, and locales are set up as directories. The build produces static files that any static host can serve. VitePress succeeds VuePress 1. The Vue team's guide names it as the team's long-term recommended static site generator.

## Worth knowing

The install guide installs the pre-release line from npm's next tag, so the docs describe a newer version than the latest stable release.
