---
id: meteroid
name: Meteroid
urls:
  home: https://www.meteroid.com
  repository: https://github.com/meteroid-oss/meteroid
  docs: https://docs.meteroid.com/
  pricing: https://www.meteroid.com/pricing
category:
  - e-commerce
description: Open-source pricing and billing platform for subscriptions, usage-based pricing, invoices and quotes, with a hosted cloud edition.
status: active
maintainer: Meteroid
firstRelease: 2024
hqCountry: FR
language: rust
databases:
  - postgres
installMethod: Docker Compose, minimal setup for testing and development
licenseModel: open-core
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-01-13
githubStargazers: 1354
contributors: 16
social:
  x: https://twitter.com/meteroidhq
  discord: https://go.meteroid.com/discord
  subreddit: https://www.reddit.com/r/meteroid/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.meteroid.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.meteroid.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.meteroid.com/pricing
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/meteroid-oss/meteroid
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/meteroid-oss/meteroid/blob/main/README.md
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.meteroid.com/terms
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/meteroid-oss/meteroid/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/meteroid-oss/meteroid
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/meteroid-oss/meteroid/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.meteroid.com/compare
    checkedAt: 2026-11-03
  - field: language
    url: https://www.meteroid.com/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/meteroid-oss/meteroid/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/meteroid-oss/meteroid/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/meteroid-oss/meteroid/blob/main/docker/deploy/docker-compose.yml
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/meteroid-oss/meteroid/releases/tag/v0.19.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/meteroid-oss/meteroid/releases/tag/v0.19.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/meteroid-oss/meteroid/releases/tag/v0.12.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/meteroid-oss/meteroid
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/meteroid-oss/meteroid
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Meteroid is a billing platform for subscriptions, usage-based pricing, invoices and quotes, with its backend written in Rust. The [README](https://github.com/meteroid-oss/meteroid/blob/main/README.md) names Docker Compose and a Helm chart as the self-hosting routes. The Compose file starts PostgreSQL, ClickHouse and a Kafka-compatible broker next to the API, a scheduler, a metering API and the web app. A hosted workspace on Meteroid Cloud is offered next to the open source code.

## Worth knowing

The README describes the project as experimental and gives the Compose setup as a minimal setup for testing and development. The [get-started guide](https://docs.meteroid.com/introduction/get-started-with-meteroid) names Stripe as the one payment provider it currently supports. Self-hosting support, single sign-on and role-based access sit on the Enterprise plan.
