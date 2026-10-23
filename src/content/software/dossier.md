---
id: dossier
name: Dossier
urls:
  home: https://dossierhq.dev
  repository: https://github.com/dossierhq/dossierhq
  docs: https://dossierhq.dev/docs
category:
  - headless-cms
  - cms
description: Open-source toolkit for building headless content management systems in TypeScript, on PostgreSQL or SQLite.
status: active
maintainer: Jonas Bengtsson
firstRelease: 2023
language: javascript
contentStore:
  - database
databases:
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - graphql
  - rest
installMethod: npm init with a dossierhq template
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-07-25
githubStargazers: 52
npmWeeklyDownloads: 88
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/dossierhq/dossierhq
    checkedAt: 2026-10-23
  - field: urls
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/dossierhq/dossierhq
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/@dossierhq%2fcore
    checkedAt: 2026-10-23
  - field: category
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: databases
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://www.dossierhq.dev/docs/tutorial-published-rest-api
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://www.dossierhq.dev/docs/getting-started
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.dossierhq.dev/docs/getting-started
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://dossierhq.dev/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/dossierhq/dossierhq
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/@dossierhq%2fcore/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@dossierhq%2fcore
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@dossierhq/core
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/dossierhq/dossierhq
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/dossierhq/dossierhq/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

Dossier is an open-source toolkit for building headless content management systems in TypeScript. Content is stored in PostgreSQL or SQLite, and the toolkit generates TypeScript types and a GraphQL schema. Authentication is left to the application that uses it, so the integrator brings their own. New projects are created with npm init from a [starter template](https://dossierhq.dev/docs/getting-started), and the docs name Astro and Next.js starters. The templates make the web interface available in development mode only.

## Worth knowing

The homepage says Dossier is in active development and that not everything is supported yet. The repository is a monorepo of published npm packages, and this record uses the core package, @dossierhq/core.
