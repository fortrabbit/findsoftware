---
id: andesine
name: Vrite
urls:
  home: https://vrite.io
  repository: https://github.com/vriteio/andesine
  docs: https://docs.vrite.io
  pricing: https://vrite.io/pricing
category:
  - headless-cms
description: Open-source content workspace for product documentation, technical blogs and knowledge bases, with a built-in dashboard and a headless API, self-hosted with Docker or offered as Vrite Cloud.
status: active
maintainer: Vrite, Inc.
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
contentStore:
  - database
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
i18n: yes, through content variants
runsAs:
  - always-on
installMethod: git clone of the repository, docker.env from .env.example, then docker compose up
licenseModel: open-core
license: AGPL-3.0, MIT, Elastic-2.0
currentMajor: "0"
latestReleaseDate: 2024-07-05
githubStargazers: 2005
contributors: 5
social:
  x: https://twitter.com/vriteio
  discord: https://discord.gg/yYqDWyKnqE
  forum: https://github.com/vriteio/andesine/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://vrite.io
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/vriteio/andesine
    checkedAt: 2026-10-23
  - field: urls
    url: https://vrite.io
    checkedAt: 2026-10-23
  - field: category
    url: https://vrite.io
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/vriteio/andesine
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.vrite.io/self-hosting/docker/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/vriteio/andesine/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://docs.vrite.io/getting-started/introduction/
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/vriteio/andesine/blob/main/.env.example
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/vriteio/andesine/blob/main/.env.example
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/vriteio/andesine/main/package.json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/vriteio/andesine/main/package.json
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.vrite.io/self-hosting/configuration/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://vrite.io
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/vriteio/andesine/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/vriteio/andesine/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/vriteio/andesine/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://vrite.io
    checkedAt: 2026-10-23
  - field: urls
    url: https://vrite.io/pricing
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/vriteio/andesine/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/vriteio/andesine/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/vriteio/andesine/releases/tags/v0.4.4
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/vriteio/andesine/releases/tags/v0.4.4
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/vriteio/andesine
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/vriteio/andesine/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Vrite is an open-source platform for creating, managing and publishing product documentation, technical blogs and knowledge bases. Content is delivered to any frontend through its REST API, and a built-in dashboard with Kanban and list views handles planning. Content variants cover translations and A/B testing. The software keeps its content in MongoDB and stores uploaded images in S3-compatible storage.

The [self-hosting guide](https://docs.vrite.io/self-hosting/docker/) describes cloning the repository, filling in a docker.env file from the example and starting the stack with Docker Compose. The example compose file runs the API, asset, collaboration and web app services next to MongoDB, Redis and MinIO, with an optional Weaviate instance for search.

## Worth knowing

Vrite Cloud, the hosted version, runs next to the open-source code. The docs describe the Extension System as in Beta and limited to first-party extensions available only through Vrite Cloud. Semantic search needs a Weaviate instance, and AI question answering also needs OpenAI credentials. Git sync needs a GitHub App.

The source is under AGPL-3.0 by default, with some files under MIT or Elastic License 2.0 where a licensing file or file header says so. The repository's default branch is a work-in-progress v2 rewrite codenamed Andesine, and its README points to the main branch for the stable version.
