---
id: directus
name: Directus
urls:
  home: https://directus.com
  repository: https://github.com/directus/directus
  docs: https://directus.com/docs
  pricing: https://directus.com/pricing
category:
  - headless-cms
  - backend
  - admin-panel
description: Backend that wraps an SQL database with REST and GraphQL APIs and a no-code admin app, used as a headless CMS.
status: active
maintainer: Monospace Inc.
maintainerType: company
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - express
  - vue
contentStore:
  - database
databases:
  - postgres
  - mysql
  - sqlite
  - sqlserver
  - mariadb
  - oracle
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes, content translations and a translatable Data Studio with RTL support
runsAs:
  - always-on
renderingModes:
  - api-only
installMethod: docker
licenseModel: source-available
license: MSCL-1.0-GPL (Monospace Sustainable Core License 1.0, not SPDX), NOASSERTION
currentMajor: "12"
latestReleaseDate: 2026-10-07
githubStargazers: 38579
npmWeeklyDownloads: 12061
contributors: 442
httpArchiveSites: 14
dependentRepos: 115
dependentPackages: 16
social:
  x: https://x.com/directus
  bluesky: https://bsky.app/profile/directus.io
  forum: https://community.directus.com
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://directus.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/directus/directus
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/directus/directus
    checkedAt: 2026-10-18
  - field: urls
    url: https://directus.com/docs/self-hosting/requirements
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://directus.com/about
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://directus.com/about
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://api.github.com/orgs/directus
    checkedAt: 2026-10-18
  - field: category
    url: https://api.github.com/repos/directus/directus
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/@directus/api/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/directus/directus
    checkedAt: 2026-10-18
  - field: runtime
    url: https://registry.npmjs.org/directus/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/directus/latest
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://directus.com/docs/self-hosting/requirements
    checkedAt: 2026-10-18
  - field: databases
    url: https://directus.com/docs/self-hosting/requirements
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://directus.com/docs/getting-started/overview
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://directus.com/docs/getting-started/overview
    checkedAt: 2026-10-18
  - field: i18n
    url: https://directus.com/docs/guides/content/translations
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://directus.com/docs/getting-started/overview
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://directus.com/docs/self-hosting/deploying
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/directus/directus/blob/main/license
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/directus/directus
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/directus/directus/blob/main/license
    checkedAt: 2026-10-18
  - field: urls
    url: https://directus.com/pricing
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/directus/directus/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/directus/directus/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/directus/directus
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/directus/directus/contributors
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/directus
    checkedAt: 2026-10-18
  - field: urls
    url: https://directus.com/docs/guides/extensions/marketplace
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://directus.com/docs/self-hosting/overview
    checkedAt: 2026-10-19
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/directus
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/directus
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Directus wraps an SQL database with REST, GraphQL and realtime APIs, plus a web app called Data Studio where teams manage content, files, users and dashboards. Self-hosting runs the official Docker image as a long-running container, with Redis optional for caching and required for horizontal scaling, and files go to a storage adapter or a mounted volume. Monospace Inc. publishes Directus and describes itself as fully remote. The [self-hosting requirements](https://directus.com/docs/self-hosting/requirements) list the container sizes and storage options.

## Worth knowing

The code is source-available under the Monospace Sustainable Core License, which permits any use except a Competing Use. Organizations under a revenue and headcount threshold get full access free. Otherwise the free Core plan caps seats, collections and flows, and the self-hosted edition is gated by a license key.
