---
id: zero-sync
name: Zero
urls:
  home: https://zero.rocicorp.dev
  repository: https://github.com/rocicorp/mono
  docs: https://zero.rocicorp.dev/docs/introduction
category:
  - backend
description: Sync engine that keeps a client-side datastore of a web app in step with a Postgres database.
status: active
maintainer: Rocicorp, LLC
maintainerType: company
firstRelease: 2024
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
  - sqlite
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 3435
npmWeeklyDownloads: 276665
contributors: 59
social:
  x: https://x.com/zero__ms
  bluesky: https://bsky.app/profile/zero.rocicorp.dev
  discord: https://discord.rocicorp.dev
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://zero.rocicorp.dev/docs/introduction
    checkedAt: 2026-11-03
  - field: urls
    url: https://zero.rocicorp.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/rocicorp/mono
    checkedAt: 2026-11-03
  - field: urls
    url: https://zero.rocicorp.dev/docs/introduction
    checkedAt: 2026-11-03
  - field: license
    url: https://zero.rocicorp.dev/docs/open-source
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/rocicorp/mono
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://zero.rocicorp.dev
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/rocicorp/mono
    checkedAt: 2026-11-03
  - field: runtime
    url: https://registry.npmjs.org/@rocicorp/zero/latest
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/@rocicorp/zero/latest
    checkedAt: 2026-11-03
  - field: category
    url: https://zero.rocicorp.dev
    checkedAt: 2026-11-03
  - field: databases
    url: https://zero.rocicorp.dev
    checkedAt: 2026-11-03
  - field: databases
    url: https://zero.rocicorp.dev/docs/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zero.rocicorp.dev/docs/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zero.rocicorp.dev/docs/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://zero.rocicorp.dev/docs/deployment
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@rocicorp/zero
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://rocicorp.dev/terms
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/rocicorp/mono/tree/zero/v1.11.3
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@rocicorp/zero
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://registry.npmjs.org/@rocicorp/zero
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/rocicorp/mono
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/rocicorp/mono
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Zero is a sync engine for web applications. It keeps a client-side store of the rows an app's UI queries and syncs them in the background with a Postgres database. Queries run against the client first and are answered by the server asynchronously. Reads and writes flow through the app's own code on its server, so permissions and business logic stay there. The [install guide](https://zero.rocicorp.dev/docs/install) adds the package with npm.

The [deployment guide](https://zero.rocicorp.dev/docs/deployment) describes the self-hosted parts: a zero-cache server that keeps a SQLite replica, a Postgres database, the frontend and an API server for the query and mutate endpoints. The project is run by Rocicorp, which also offers a fully managed service that can run on Rocicorp's servers or the customer's.

## Worth knowing

Self-hosting is more than a static frontend deployment: it needs the zero-cache server, a Postgres database and an API server. The managed service is a hosted offering next to the open-source package.
