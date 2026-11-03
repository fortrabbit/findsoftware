---
id: hyperswitch
name: Hyperswitch
urls:
  home: https://hyperswitch.io
  repository: https://github.com/juspay/hyperswitch
  docs: https://docs.hyperswitch.io
  pricing: https://hyperswitch.io/pricing
category:
  - e-commerce
description: Open-source payments orchestration platform that routes transactions across payment processors, with a vault, a control center and reconciliation, self-hosted or hosted by Juspay.
status: active
maintainer: Juspay Technologies Private Limited
maintainerType: company
firstRelease: 2023
hqCountry: IN
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-source
license: Apache-2.0, Apache 2.0 License
currentMajor: "1"
latestReleaseDate: 2026-11-02
githubStargazers: 45668
contributors: 257
social:
  x: https://x.com/hyperswitchio
  forum: https://github.com/juspay/hyperswitch/discussions
  subreddit: https://www.reddit.com/r/juspay_hyperswitch/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hyperswitch.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/juspay/hyperswitch
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.hyperswitch.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://hyperswitch.io/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://hyperswitch.io/terms
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://hyperswitch.io/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://hyperswitch.io/privacy-policy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/juspay/hyperswitch/releases/tag/v0.2.0
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/juspay/hyperswitch
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/juspay/hyperswitch/blob/v1.129.0/crates/router/Cargo.toml
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.hyperswitch.io/self-hosting/guides-for-self-hosting/architecture-overview
    checkedAt: 2026-11-03
  - field: category
    url: https://hyperswitch.io
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/juspay/hyperswitch
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/juspay/hyperswitch/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/juspay/hyperswitch/releases/tag/v1.129.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/juspay/hyperswitch/releases/tag/v1.129.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/juspay/hyperswitch
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/juspay/hyperswitch
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hyperswitch.io/self-hosting/want-to-explore/readme-1/unified-local-setup-using-docker.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hyperswitch.io/self-hosting/want-to-explore/readme.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.hyperswitch.io/self-hosting/guides-for-self-hosting/deployment-overview/system-requirements.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.hyperswitch.io/self-hosting/guides-for-self-hosting/deployment-overview/system-requirements.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.hyperswitch.io/self-hosting/guides-for-self-hosting/architecture-overview.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://api-reference.hyperswitch.io/introduction
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hyperswitch is a payments orchestration platform. Its app server receives payment requests from a merchant's backend and sends each transaction to a payment processor through a connector, with routing rules and retries. A scheduler component packaged with the app runs periodic jobs, and the server keeps its data in PostgreSQL with Redis for caching. The [architecture overview](https://docs.hyperswitch.io/self-hosting/guides-for-self-hosting/architecture-overview) lists the app server, the web SDK, the card vault and the Control Center as the components of a stack. The web and mobile checkout SDKs and the Control Center are separate repositories in the same organization.

## Worth knowing

The [Docker Compose setup](https://docs.hyperswitch.io/self-hosting/want-to-explore/readme-1/unified-local-setup-using-docker.md) and the Helm quick start are described as evaluation setups. The enterprise self-hosting guide describes production self-hosting with Juspay support in three tiers, and a hosted version is run by Juspay as APIs and SDKs.
