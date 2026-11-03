---
id: stack-auth
name: Hexclave
urls:
  home: https://www.hexclave.com
  repository: https://github.com/hexclave/hexclave
  docs: https://docs.hexclave.com
  pricing: https://www.hexclave.com/pricing
category:
  - auth
  - e-commerce
  - email
description: Open-source user infrastructure platform for authentication, teams, payments, email and analytics, with a managed cloud and a self-hostable server.
status: active
maintainer: Stackframe
firstRelease: 2024
language: javascript
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: MIT, AGPL-3.0, commercial enterprise license, available on request
currentMajor: "1"
latestReleaseDate: 2026-10-30
githubStargazers: 6884
npmWeeklyDownloads: 281604
contributors: 70
social:
  x: https://x.com/hexclave
  discord: https://discord.hexclave.com
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.hexclave.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.hexclave.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hexclave/hexclave
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/hexclave/hexclave
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/hexclave/hexclave/blob/dev/packages/template/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://registry.npmjs.org/@stackframe/stack
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/hexclave/hexclave/blob/dev/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hexclave.com/guides/other/self-host
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.hexclave.com/guides/getting-started/setup
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.hexclave.com/guides/other/self-host
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hexclave/hexclave/blob/dev/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hexclave/hexclave/blob/dev/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hexclave/hexclave/blob/dev/LICENSE
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.hexclave.com/pricing
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.hexclave.com/guides/other/self-host
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.hexclave.com/api/overview
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.hexclave.com/guides/other/self-host
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.hexclave.com/guides/other/self-host
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/hexclave/hexclave
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/hexclave/hexclave
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@hexclave/js
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/hexclave/hexclave/releases/tag/dashboard-v1.0.135
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hexclave/hexclave/releases/tag/dashboard-v1.0.135
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Hexclave is a platform for the parts of a product that revolve around users: authentication, teams, payments, email and analytics. It was called Stack Auth until the project renamed itself. Apps connect through SDKs for Next.js, React, TanStack Start and plain JavaScript and TypeScript, or through a [REST API](https://docs.hexclave.com/api/overview) from any language. A managed cloud runs it for customers, and the same code runs self-hosted as a Docker image that serves the API and the dashboard, backed by PostgreSQL and ClickHouse.

## Worth knowing

Self-hosting also needs a cron scheduler that calls the server's internal endpoints, email and S3-compatible storage, and Freestyle for custom email sending. The server code is licensed under AGPLv3 and the client packages under MIT, and the project offers commercial licenses for the server when AGPL does not fit. The docs state that Custom OIDC providers require a Team plan or above.
