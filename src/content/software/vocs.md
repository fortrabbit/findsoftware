---
id: vocs
name: Vocs
urls:
  home: https://vocs.dev
  repository: https://github.com/wevm/vocs
  docs: https://vocs.dev/introduction/getting-started
category:
  - ssg
description: Documentation framework that builds Markdown and MDX sources into docs sites, powered by Vite.
status: active
maintainer: Wevm
firstRelease: 2023
language: typescript
runtime:
  - node
hosting:
  - node
  - static
basedOn:
  - vite
  - waku
contentStore:
  - flat-file
runsAs:
  - static
  - always-on
renderingModes:
  - server
  - static
installMethod: npm init vocs
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-14
githubStargazers: 1566
npmWeeklyDownloads: 24407
contributors: 43
social:
  discord: https://discord.gg/SghfWBKexF
  forum: https://github.com/wevm/vocs/discussions
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://vocs.dev
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/wevm/vocs
    checkedAt: 2026-10-22
  - field: urls
    url: https://vocs.dev/introduction/getting-started
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://vocs.dev
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/wevm/vocs
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/wevm/vocs/blob/main/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://github.com/wevm/vocs/blob/main/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://vocs.dev/introduction/getting-started
    checkedAt: 2026-10-22
  - field: runtime
    url: https://vocs.dev/deployment/node
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://vocs.dev/deployment/node
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://vocs.dev/deployment/node
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://vocs.dev/deployment/node
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://vocs.dev/deployment/node
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://vocs.dev
    checkedAt: 2026-10-22
  - field: contentStore
    url: https://vocs.dev/introduction/getting-started
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/wevm/vocs
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/vocs/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/wevm/vocs/releases/latest
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/wevm/vocs
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/wevm/vocs/contributors?per_page=1&anon=true
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/vocs
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/vocs
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

Vocs is a documentation framework that builds Markdown and MDX sources into docs sites, powered by Vite. Its documentation says it keeps documentation simple at the source with Markdown and MDX. A new project starts with `npm init vocs`, and the project is maintained by Wevm under the wevm organization on GitHub.

## Worth knowing

The Node.js deployment page describes a server bundle for dynamic rendering and RSC, and says that a site can be served as static files from any static host. The page also describes a Docker setup that runs the Node.js server. The docs say Vocs requires Waku.
