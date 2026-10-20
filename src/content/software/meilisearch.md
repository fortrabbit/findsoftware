---
id: meilisearch
name: Meilisearch
urls:
  home: https://www.meilisearch.com
  repository: https://github.com/meilisearch/meilisearch
  docs: https://www.meilisearch.com/docs/resources/self_hosting/getting_started/install_locally
  pricing: https://www.meilisearch.com/pricing
category:
  - search
description: Search server that indexes documents and answers search queries, self-hosted or as Meilisearch Cloud.
status: active
maintainer: Meili SAS
maintainerType: company
language: rust
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
runsAs:
  - always-on
installMethod: curl install script, homebrew, docker, apt, binary download, compile from source
licenseModel: open-core
license: MIT, BUSL-1.1 (Enterprise Edition parts only)
currentMajor: "1"
latestReleaseDate: 2026-10-12
githubStargazers: 59604
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://www.meilisearch.com
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/meilisearch/meilisearch
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.meilisearch.com/docs/resources/self_hosting/getting_started/install_locally
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://raw.githubusercontent.com/meilisearch/meilisearch/main/LICENSE
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://raw.githubusercontent.com/meilisearch/meilisearch/main/LICENSE
    checkedAt: 2026-10-19
  - field: license
    url: https://www.meilisearch.com/pricing
    checkedAt: 2026-10-19
  - field: license
    url: https://raw.githubusercontent.com/meilisearch/meilisearch/main/LICENSE
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://raw.githubusercontent.com/meilisearch/meilisearch/main/LICENSE
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/meilisearch/meilisearch
    checkedAt: 2026-10-19
  - field: category
    url: https://www.meilisearch.com
    checkedAt: 2026-10-19
  - field: runtime
    url: https://www.meilisearch.com/docs/resources/self_hosting/getting_started/install_locally
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://www.meilisearch.com/docs/resources/self_hosting/getting_started/install_locally
    checkedAt: 2026-10-19
  - field: contentStore
    url: https://www.meilisearch.com/docs/resources/self_hosting/getting_started/install_locally
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.meilisearch.com/pricing
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://api.github.com/repos/meilisearch/meilisearch/releases/latest
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/meilisearch/meilisearch/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/meilisearch/meilisearch
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://www.meilisearch.com/docs/resources/self_hosting/getting_started/install_locally
    checkedAt: 2026-10-19
figure:
  emoji: 🔎
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Rust · Search
ai: authored
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Meilisearch is a search server for applications that index documents and send queries to them. It is written in Rust and runs as its own server binary. Meili SAS maintains the project and runs Meilisearch Cloud, a hosted version of the server. The [installation guide](https://www.meilisearch.com/docs/resources/self_hosting/getting_started/install_locally) lists the supported operating systems and install paths.

## Worth knowing

The repository's LICENSE file names MIT for the server code and the Business Source License 1.1 for the parts marked Enterprise Edition.
