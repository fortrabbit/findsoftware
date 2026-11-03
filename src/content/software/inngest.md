---
id: inngest
name: Inngest
urls:
  home: https://www.inngest.com
  repository: https://github.com/inngest/inngest
  docs: https://www.inngest.com/docs
  pricing: https://www.inngest.com/pricing
category:
  - backend
description: Workflow orchestration platform for durable functions with step retries, scheduling and flow control, run by applications through language SDKs and self-hostable as a single server.
status: active
maintainer: Inngest, Inc.
maintainerType: company
firstRelease: 2021
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - graphql
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Server Side Public License with delayed open source publication (DOSP) under Apache 2.0, Apache 2.0 (SDKs)
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 6015
npmWeeklyDownloads: 1042721
contributors: 53
social:
  x: https://x.com/inngest
  bluesky: https://bsky.app/profile/inngest.com
  discord: https://www.inngest.com/discord
  forum: https://github.com/orgs/inngest/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.inngest.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/inngest/inngest
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.inngest.com/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.inngest.com/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/inngest/inngest/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/inngest/inngest/blob/main/LICENSE.md
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.inngest.com/privacy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/inngest/inngest/releases/tag/v0.0.1
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/inngest/inngest
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/inngest/inngest/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/inngest/inngest/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/inngest/inngest/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/inngest/inngest/releases/tag/v1.49.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/inngest/inngest/releases/tag/v1.49.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/inngest/inngest
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/inngest/inngest
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/inngest-cli
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/inngest/inngest/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://www.inngest.com/docs/self-hosting
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Inngest runs durable functions. An application defines functions as steps with triggers such as events or cron schedules, sends events to the Inngest server, and the server schedules and queues the function runs, retries failed steps and records run history. Functions are written with the [language SDKs](https://github.com/inngest/inngest#sdks) for TypeScript and JavaScript, Python, Go, and Kotlin and Java. The server is a single binary that serves the Event API, the API and a dashboard. It keeps its data in SQLite by default, can use PostgreSQL for persistence, and runs an in-memory Redis server unless one is configured. The [self-hosting guide](https://www.inngest.com/docs/self-hosting) describes Docker, Docker Compose, binary and Helm routes, and the README adds npm.

## Worth knowing

The server and CLI are licensed under the Server Side Public License with delayed open source publication, and the SDKs under Apache 2.0. The self-hosting guide says the support team does not guarantee direct support for self-hosted instances and points dedicated support to enterprise options. The vendor also runs a hosted platform, described on the [pricing page](https://www.inngest.com/pricing).
