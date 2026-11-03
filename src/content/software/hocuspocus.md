---
id: hocuspocus
name: Hocuspocus
urls:
  home: https://tiptap.dev/docs/hocuspocus/introduction
  repository: https://github.com/ueberdosis/hocuspocus
  docs: https://tiptap.dev/docs/hocuspocus/getting-started/overview
category:
  - backend
description: WebSocket backend for Yjs documents that syncs changes between clients in real time, from the team behind Tiptap.
status: active
maintainer: Tiptap GmbH
maintainerType: company
firstRelease: 2022
hqCountry: DE
language: javascript
runtime:
  - node
  - bun
  - deno
hosting:
  - node
  - bun
  - deno
runtimeMin: node 22
databases:
  - sqlite
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-28
githubStargazers: 2643
npmWeeklyDownloads: 2076941
contributors: 92
social:
  discord: https://discord.gg/WtJ49jGshW
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://tiptap.dev/docs/hocuspocus/introduction
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ueberdosis/hocuspocus
    checkedAt: 2026-11-03
  - field: urls
    url: https://tiptap.dev/docs/hocuspocus/getting-started/overview
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/ueberdosis/hocuspocus/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://tiptap.dev/legal-notice
    checkedAt: 2026-11-03
  - field: category
    url: https://tiptap.dev/docs/hocuspocus/getting-started/overview
    checkedAt: 2026-11-03
  - field: language
    url: https://tiptap.dev/docs/hocuspocus/getting-started/overview
    checkedAt: 2026-11-03
  - field: runtime
    url: https://tiptap.dev/docs/hocuspocus/getting-started/overview
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/ueberdosis/hocuspocus/blob/v4.7.1/packages/server/package.json
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://tiptap.dev/docs/hocuspocus/server/configuration
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tiptap.dev/docs/hocuspocus/getting-started/upgrade
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ueberdosis/hocuspocus
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/ueberdosis/hocuspocus/blob/main/README.md
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@hocuspocus/server
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/ueberdosis/hocuspocus/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@hocuspocus%2fserver
    checkedAt: 2026-11-03
  - field: databases
    url: https://tiptap.dev/docs/hocuspocus/server/extensions/database
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ueberdosis/hocuspocus/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/ueberdosis/hocuspocus
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ueberdosis/hocuspocus/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Hocuspocus is a WebSocket backend for collaborative documents, and its docs say it is based on Y.js. The server package, `@hocuspocus/server`, is installed with npm, as the [upgrade guide](https://tiptap.dev/docs/hocuspocus/getting-started/upgrade) shows, and it runs on Node.js, Bun and Deno. The server listens on a configurable port and address, and a SQLite extension ships for persistence.

The project is maintained by Tiptap GmbH in Berlin. Redis is an optional dependency for scaling across several nodes, and the vendor also offers a hosted version named Tiptap Collab.
