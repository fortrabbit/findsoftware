---
id: tanstack-db
name: TanStack DB
urls:
  home: https://tanstack.com/db
  repository: https://github.com/TanStack/db
  docs: https://tanstack.com/db/latest/docs/overview
category:
  - library
description: Reactive client store that loads API data into typed collections and queries it with live queries and optimistic mutations.
status: active
maintainer: Kyle Mathews
firstRelease: 2025
language: javascript
basedOn:
  - tanstack-query
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-21
githubStargazers: 3987
npmWeeklyDownloads: 1877531
contributors: 95
social:
  x: https://x.com/tan_stack
  bluesky: https://bsky.app/profile/tanstack.com
  discord: https://discord.com/invite/WrRKjPJ
  forum: https://github.com/TanStack/db/discussions
  youtube: https://youtube.com/@tan_stack
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/TanStack/db
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/TanStack/db
    checkedAt: 2026-11-16
  - field: urls
    url: https://tanstack.com/db/latest/docs/overview
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/TanStack/db/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/TanStack/db/main/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://tanstack.com/db/latest/docs/overview
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://tanstack.com/db/latest/docs/overview
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/TanStack/db
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/TanStack/db
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/TanStack/db/releases
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/TanStack/db/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@tanstack/db
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@tanstack/db
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/TanStack/db
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/TanStack/db/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://tanstack.com/db/latest/docs/installation
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

TanStack DB is a client-side store that holds API data in typed collections. Components read it through live queries, which update affected results as the underlying records change. Writes apply to the collection at once and are rolled back if the handler you define fails to persist them to the server. The project describes itself as an extension of TanStack Query that adds collections, live queries and optimistic mutations. Collections can be filled from TanStack Query, from a sync engine such as ElectricSQL or PowerSync, or from browser storage.

Each framework has its own npm package that re-exports the core package, so the core API is available from React, Vue, Svelte, Solid, Preact and Angular alike. The [installation guide](https://tanstack.com/db/latest/docs/installation) lists those packages next to the collection and persistence packages.

## Worth knowing

The README says the project is in beta, and the [overview](https://tanstack.com/db/latest/docs/overview) includes a migration guide for the release candidate.
