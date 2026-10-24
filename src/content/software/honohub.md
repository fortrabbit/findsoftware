---
id: honohub
name: HonoHub
urls:
  home: https://v1.honohub.dev
  repository: https://github.com/rhinobase/honohub
  docs: https://v1.honohub.dev
category:
  - headless-cms
  - framework
description: Headless CMS framework that generates REST and GraphQL APIs from Drizzle schemas and runs on Hono.
status: active
maintainer: Rhinobase
firstRelease: 2024
language: javascript
basedOn:
  - hono
  - drizzle
  - zod
adminUi: true
headlessApi:
  - rest
  - graphql
installMethod: npm add honohub
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-08-02
githubStargazers: 468
npmWeeklyDownloads: 45
contributors: 3
social:
  x: https://x.com/rhinobaseio
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://v1.honohub.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/rhinobase/honohub
    checkedAt: 2026-10-23
  - field: urls
    url: https://v1.honohub.dev/quickstart
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/rhinobase/honohub/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/rhinobase/honohub
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/rhinobase/honohub/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/rhinobase/honohub/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://v1.honohub.dev/admin-panel
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://v1.honohub.dev/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/rhinobase/honohub
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/rhinobase/honohub/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/rhinobase/honohub/releases/tag/core@0.3.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/rhinobase/honohub/releases/tag/core@0.3.0
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/honohub
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/rhinobase/honohub
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/rhinobase/honohub/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/honohub
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/rhinobase/honohub/blob/main/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

HonoHub is a headless CMS framework that runs as middleware in a Hono app. A project describes its data with Drizzle schemas and a hub configuration file, and HonoHub generates REST endpoints for each collection, validated with Zod schemas derived from the Drizzle schema. A GraphQL endpoint is added through the `useGraphQL` plugin. The hub is mounted as a route in the Hono app.

The admin panel is a React application built with Vite. It connects to the API server and can be served from that server or deployed as static files, and the APIs work without it. The project is maintained by Rhinobase.

## Worth knowing

The README describes HonoHub as being in the alpha stage, with breaking changes that do not follow semantic versioning.
