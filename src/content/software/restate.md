---
id: restate
name: Restate
urls:
  home: https://restate.dev
  repository: https://github.com/restatedev/restate
  docs: https://docs.restate.dev
  pricing: https://restate.dev/pricing
category:
  - backend
description: Durable execution runtime that ships as a single binary and coordinates the handlers of services written with its SDKs.
status: active
maintainer: Restate GmbH
maintainerType: company
firstRelease: 2023
hqCountry: DE
language: rust
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: homebrew
licenseModel: source-available
license: BUSL-1.1
currentMajor: "1"
latestReleaseDate: 2026-11-02
githubStargazers: 4649
contributors: 55
social:
  x: https://x.com/restatedev
  discord: https://discord.restate.dev
  youtube: https://www.youtube.com/@restatedev
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://restate.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/restatedev/restate
    checkedAt: 2026-11-03
  - field: urls
    url: https://restate.dev
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://restate.dev/imprint
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://restate.dev/imprint
    checkedAt: 2026-11-03
  - field: category
    url: https://restate.dev
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/restatedev/restate
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.restate.dev/installation
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.restate.dev/server/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.restate.dev/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.restate.dev/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/restatedev/restate
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.restate.dev/installation
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.restate.dev/installation
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/restatedev/restate/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/restatedev/restate/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: urls
    url: https://restate.dev/pricing
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/restatedev/restate
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/restatedev/restate
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/restatedev/restate
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/restatedev/restate/releases/tag/v1.8.1-hotfix.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/restatedev/restate/releases/tag/v1.8.1-hotfix.2
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Restate is a runtime for services written with its SDKs, shipped as one self-contained binary with no external dependencies. It keeps its state in an embedded RocksDB store, and applications invoke its services over HTTP through its ingress. In cluster deployments, snapshots go to an object store such as AWS S3 or MinIO. Restate GmbH in Berlin maintains it. Restate Cloud is a fully managed serverless version, and Restate BYOC is managed in the customer's own cloud.

## Worth knowing

The license is the Business Source License 1.1. It does not allow a Public Restate Platform Service, a managed service that lets third parties register their own service deployments and invoke them. Each release moves to the Apache License 2.0 four years after its release date.
