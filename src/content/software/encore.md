---
id: encore
name: Encore
urls:
  home: https://encore.dev
  repository: https://github.com/encoredev/encore
  docs: https://encore.dev/docs
  pricing: https://encore.dev/pricing
category:
  - framework
description: Backend framework for TypeScript and Go in which application code declares the infrastructure it uses, such as databases, Pub/Sub and cron jobs.
status: active
maintainer: Encoretivity AB
maintainerType: company
hqCountry: SE
language: typescript
runtime:
  - node
  - binary
hosting:
  - node
  - binary
runtimeMin: node 18
databases:
  - postgres
runsAs:
  - always-on
installMethod: brew install encoredev/tap/encore, install script for Linux and Windows
licenseModel: open-source
license: MPL-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-20
githubStargazers: 12499
npmWeeklyDownloads: 25216
social:
  x: https://x.com/encoredotdev
  discord: https://encore.dev/discord
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://encore.dev
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/encoredev/encore
    checkedAt: 2026-10-21
  - field: urls
    url: https://encore.dev/docs
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://encore.dev/legal
    checkedAt: 2026-10-21
  - field: maintainerType
    url: https://encore.dev/legal
    checkedAt: 2026-10-21
  - field: hqCountry
    url: https://encore.dev/about
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/encoredev/encore/blob/main/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://encore.dev
    checkedAt: 2026-10-21
  - field: runtime
    url: https://registry.npmjs.org/encore.dev/latest
    checkedAt: 2026-10-21
  - field: runtime
    url: https://encore.dev/docs/ts/self-host/build
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/encore.dev/latest
    checkedAt: 2026-10-21
  - field: databases
    url: https://encore.dev/docs/go/install
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://encore.dev/docs/go/install
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://encore.dev/docs/ts/self-host/build
    checkedAt: 2026-10-21
  - field: license
    url: https://encore.dev/docs/community/open-source
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://encore.dev/docs/community/open-source
    checkedAt: 2026-10-21
  - field: urls
    url: https://encore.dev/pricing
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/encore.dev/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://github.com/encoredev/encore/releases/tag/v1.58.8
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/encore.dev
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://github.com/encoredev/encore
    checkedAt: 2026-10-21
figure:
  emoji: 🧱
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Encore is a backend framework with SDKs for TypeScript and Go. Application code declares the infrastructure it uses, such as a SQL database, and the Encore CLI provisions it for local development: a declared database runs as PostgreSQL in Docker. The backend framework, parser and compiler are open source.

To run an application outside Encore's platform, `encore build docker` compiles it into a Docker image that starts all services and listens on a port. The [self-hosting guide](https://encore.dev/docs/ts/self-host/build) notes that the image does not apply database migrations or trigger cron jobs, so both need a separate step or scheduler.

## Worth knowing

Provisioning infrastructure in the user's own AWS or GCP account is part of Encore Cloud, a hosted platform run by the same company, and the [pricing page](https://encore.dev/pricing) lists it under a paid plan. A self-hosted application gets its infrastructure from a configuration file supplied at build time.
