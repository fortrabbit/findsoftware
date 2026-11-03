---
id: triplit
name: Triplit
urls:
  repository: https://github.com/aspen-cloud/triplit
category:
  - backend
description: Open-source TypeScript database that syncs data between server and browser in real time.
status: stub
maintainer: aspen-cloud
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: Docker image aspencloud/triplit-server
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2025-07-31
githubStargazers: 3118
npmWeeklyDownloads: 274905
contributors: 19
social:
  x: https://twitter.com/triplit_dev
  discord: https://discord.gg/q89sGWHqQ5
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/aspen-cloud/triplit
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://api.github.com/users/aspen-cloud
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/aspen-cloud/triplit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/aspen-cloud/triplit
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/aspen-cloud/triplit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/aspen-cloud/triplit
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/aspen-cloud/triplit/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/aspen-cloud/triplit/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/aspen-cloud/triplit/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/aspen-cloud/triplit
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/aspen-cloud/triplit/graphs/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@triplit/client
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/aspen-cloud/triplit/blob/main/packages/docs/src/pages/self-hosting/index.mdx
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/aspen-cloud/triplit/blob/main/packages/docs/src/pages/self-hosting/docker.mdx
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/aspen-cloud/triplit/blob/main/packages/docs/src/pages/self-hosting/index.mdx
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/aspen-cloud/triplit/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Triplit is an open-source database that keeps data in sync between a server and the browser in real time. Its client is a TypeScript package, and the server is a Node.js application that syncs data between Triplit clients. The server keeps data in durable server-side storage and includes an admin dashboard. The [README](https://github.com/aspen-cloud/triplit/blob/main/README.md) gives the project's own description.

## Worth knowing

The project's website and documentation site could not be reached when this record was checked, so the record rests on the repository, its README and the documentation source kept in the repository. The README shows a development sync server for local work, and the repository docs describe self-hosting the server as a Docker image that needs a persistent storage volume.
