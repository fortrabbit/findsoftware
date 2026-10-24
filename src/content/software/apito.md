---
id: apito
name: Apito
urls:
  home: https://apito.io
  repository: https://github.com/apito-io/engine
  docs: https://apito.io/docs/introduction/
  pricing: https://apito.io/pricing/
category:
  - backend
description: Open-source backend platform that generates GraphQL and REST APIs from a schema kept in the project, with a Console for reviewing and publishing changes and a managed cloud.
status: active
maintainer: Apito LLC
maintainerType: company
firstRelease: 2025
language: go
databases:
  - sqlite
  - postgres
  - mysql
  - mariadb
  - mongodb
adminUi: true
headlessApi:
  - graphql
  - rest
runsAs:
  - always-on
  - local
installMethod: Homebrew (apito-cli)
licenseModel: open-core
license: AGPL-3.0, commercial license available
currentMajor: "1"
latestReleaseDate: 2026-10-21
githubStargazers: 10
contributors: 1
social:
  x: https://x.com/apitohq
  discord: https://discord.gg/Xb7p2ddC6E
  forum: https://github.com/apito-io/engine/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://apito.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://apito.io/docs/introduction/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/apito-io/engine
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://apito.io/terms-of-service/
    checkedAt: 2026-10-23
  - field: urls
    url: https://apito.io/pricing/
    checkedAt: 2026-10-23
  - field: category
    url: https://apito.io/docs/introduction/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/apito-io/engine
    checkedAt: 2026-10-23
  - field: databases
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/apito-io/engine/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://apito.io/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/apito-io/engine
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/apito-io/engine/blob/main/LICENSING.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/apito-io/engine/blob/main/LICENSING.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/apito-io/engine/git/refs/tags/v1.0.0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/apito-io/engine/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/apito-io/engine/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/apito-io/engine
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://apito.io/docs/self-hosting-guide/
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/apito-io/engine/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Apito is an open-source backend platform from Apito LLC for designing, reviewing, versioning and shipping application backends. Its Engine, written in Go, serves GraphQL and REST APIs. The Console is the web application for reviewing schema drafts and publishing them, and the schema is synced with the Apito CLI, which stages a draft for the Console to publish.

The [self-hosting guide](https://apito.io/docs/self-hosting-guide/) runs the Engine and Console locally through the CLI, or in production through a Docker Compose file. The reference Compose file pairs the Engine with ArangoDB and Redis, and the README lists further databases the Engine can use.

## Worth knowing

Apito also runs a managed Cloud with Free, Pro and Dedicated hosting plans, which stay on Apito-managed hosts. The self-hosting guide says some Pro Console features may require a Pro-capable build, and the licensing notes say paid Cloud features stay in private repositories. The Engine's current releases are AGPL-3.0, and a commercial license is available from Apito LLC.
