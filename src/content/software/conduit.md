---
id: conduit
name: Conduit
urls:
  home: https://getconduit.dev
  repository: https://github.com/ConduitPlatform/Conduit
  docs: https://getconduit.dev/docs
category:
  - backend
description: Self-hosted modular backend-as-a-service with modules for authentication, database, storage, chat and communications.
status: active
maintainer: Quintessential SFT
firstRelease: 2022
hqCountry: GR
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - mongodb
  - postgres
adminUi: true
headlessApi:
  - rest
  - graphql
runsAs:
  - always-on
installMethod: npx @conduitplatform/cli deploy setup
licenseModel: open-source
license: MIT, Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-28
githubStargazers: 924
npmWeeklyDownloads: 2052
contributors: 29
social:
  discord: https://discord.gg/3Jsuxs2KJt
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://getconduit.dev
    checkedAt: 2026-10-23
  - field: urls
    url: https://getconduit.dev
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/ConduitPlatform/Conduit
    checkedAt: 2026-10-23
  - field: urls
    url: https://getconduit.dev/docs
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://getconduit.dev
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://github.com/ConduitPlatform/Conduit/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/ConduitPlatform/Conduit/releases/tag/v0.10.6
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ConduitPlatform/Conduit/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://getconduit.dev
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/ConduitPlatform/Conduit/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/ConduitPlatform/Conduit
    checkedAt: 2026-10-23
  - field: runtime
    url: https://getconduit.dev/docs/getting-started/install
    checkedAt: 2026-10-23
  - field: category
    url: https://getconduit.dev
    checkedAt: 2026-10-23
  - field: databases
    url: https://getconduit.dev
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://getconduit.dev
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://getconduit.dev/docs/deployment/docker-compose
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://getconduit.dev/docs/getting-started/install
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://getconduit.dev/docs/getting-started/install
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://getconduit.dev/docs/getting-started/install
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://getconduit.dev/docs/deployment/local-source
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://getconduit.dev/docs/deployment/docker-compose
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/ConduitPlatform/Conduit/releases/tag/v0.16.31
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/ConduitPlatform/Conduit/releases/tag/v0.16.31
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/ConduitPlatform/Conduit
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ConduitPlatform/Conduit/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@conduitplatform/grpc-sdk
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Conduit is a self-hosted backend-as-a-service with modules for authentication, database, storage, chat and communications. The database module stores data models in MongoDB or PostgreSQL, and the router offers REST and GraphQL access. The platform runs as Docker Compose microservices, as a standalone image, on Kubernetes with Helm, or from source. The [install guide](https://getconduit.dev/docs/getting-started/install) starts it with an npm CLI command. The standalone image and source builds also need Redis. An admin UI runs in its own container. The maintainer is Quintessential SFT.

## Worth knowing

The homepage footer names Apache 2.0 while the repository's LICENSE file is MIT. The managed Conduit Hosting service is listed as coming soon. The docs state that the Embeddings module is not included in the standalone image.
