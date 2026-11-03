---
id: rybbit
name: Rybbit
urls:
  home: https://rybbit.com
  repository: https://github.com/rybbit-io/rybbit
  docs: https://rybbit.com/docs
  pricing: https://rybbit.com/pricing
category:
  - analytics
description: Open source web and product analytics platform that can be self-hosted with Docker Compose and is also offered as a hosted service.
status: active
maintainer: Tomato.gg LLC
maintainerType: company
firstRelease: 2025
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, dashboard interface language per user
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-24
githubStargazers: 13204
contributors: 61
social:
  discord: https://discord.gg/DEhGb4hYBj
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://rybbit.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/rybbit-io/rybbit
    checkedAt: 2026-11-03
  - field: urls
    url: https://rybbit.com/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://rybbit.com/company
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://rybbit.com/company
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://rybbit.com/company
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/rybbit-io/rybbit
    checkedAt: 2026-11-03
  - field: runtime
    url: https://rybbit.com/docs/self-hosting-guides/self-hosting-manual
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/rybbit-io/rybbit
    checkedAt: 2026-11-03
  - field: license
    url: https://rybbit.com/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://rybbit.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://rybbit.com/docs/self-hosting-guides/self-hosting-manual
    checkedAt: 2026-11-03
  - field: databases
    url: https://rybbit.com/docs/self-hosting-guides/self-hosting-manual
    checkedAt: 2026-11-03
  - field: databases
    url: https://rybbit.com/docs/self-hosting-guides/self-hosting-manual
    checkedAt: 2026-11-03
  - field: databases
    url: https://rybbit.com/docs/self-hosting-guides/self-hosting-manual
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://rybbit.com/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://rybbit.com/features/api
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/rybbit-io/rybbit
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/rybbit-io/rybbit
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/rybbit-io/rybbit/releases/tag/v2.9.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/rybbit-io/rybbit/releases/tag/v2.9.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/rybbit-io/rybbit/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: urls
    url: https://rybbit.com/pricing
    checkedAt: 2026-11-03
  - field: i18n
    url: https://rybbit.com/docs/account-settings
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
---

Rybbit is an open-source web and product analytics platform. It records sessions, funnels, goals and users, and includes session replays and error tracking. The self-hosted edition runs a Node.js API server behind a Next.js client, with PostgreSQL for user data, ClickHouse for analytics data and Redis for shared state.

The [self-hosting guide](https://rybbit.com/docs/self-hosting) describes a setup script that writes the environment file and starts the stack with Docker Compose. On a blank server the script also sets up Caddy as the reverse proxy. Tomato.gg LLC operates Rybbit and provides the hosted service.

## Worth knowing

Some features exist only on the cloud service or on its paid plans, including Web Vitals. The self-hosting documentation says a self-hosted instance does not send email, so an admin creates accounts directly.
