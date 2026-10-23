---
id: instatic
name: Instatic
urls:
  home: https://instatic.com
  repository: https://github.com/CoreBunch/Instatic
  docs: https://github.com/CoreBunch/Instatic/blob/main/docs/README.md
category:
  - cms
description: Self-hosted visual CMS that edits pages on a canvas and publishes them as static HTML, served by one Bun server.
status: active
maintainer: David Babinec
firstRelease: 2026
language: javascript
runtime:
  - bun
hosting:
  - bun
runtimeMin: bun 1
contentStore:
  - database
databases:
  - sqlite
  - postgres
adminUi: true
runsAs:
  - always-on
renderingModes:
  - static
installMethod: docker compose
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-12
githubStargazers: 9002
contributors: 29
social:
  x: https://x.com/instatic_cms
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://instatic.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/CoreBunch/Instatic/blob/main/docs/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/CoreBunch/Instatic
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/CoreBunch/Instatic/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://instatic.com
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/CoreBunch/Instatic/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/CoreBunch/Instatic
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/CoreBunch/Instatic/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/CoreBunch/Instatic/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/CoreBunch/Instatic/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/CoreBunch/Instatic/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/CoreBunch/Instatic/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://instatic.com
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/CoreBunch/Instatic/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://instatic.com
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/CoreBunch/Instatic/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://instatic.com
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://instatic.com
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/CoreBunch/Instatic
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/CoreBunch/Instatic/contributors
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/CoreBunch/Instatic/releases/tag/v0.0.21
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/CoreBunch/Instatic/releases/tag/v0.0.21
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/CoreBunch/Instatic/releases
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Instatic is a self-hosted CMS in which a visual canvas editor, the content engine, media, sign-in, forms, plugins and the publisher run in one Bun server. Editors place modules on breakpoint frames side by side and can turn part of a page into a Visual Component with typed parameters. Pages, posts and custom tables share one store, which is SQLite or Postgres.

Publishing renders each page to an HTML file and swaps the live folder over in one move, so visitors read finished files that the Bun server answers. Plugin server code runs in a per-plugin QuickJS interpreter compiled to WebAssembly, and can reach only the network hosts its manifest lists and the owner approves at install. Instatic also acts as an MCP server and has a built-in AI agent. The [README](https://github.com/CoreBunch/Instatic/blob/main/README.md) gives a Docker compose setup alongside the Bun development setup.

## Worth knowing

The README says the project is version 0.0.x and that "APIs and workflows can still shift before 1.0".

The one-click deploy section links to Railway templates. Railway is a third-party host, not a hosted version of Instatic.
