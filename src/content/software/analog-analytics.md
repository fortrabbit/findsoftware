---
id: analog-analytics
name: ΛNΛLOG
urls:
  repository: https://github.com/orangecoloured/analog
  docs: https://github.com/orangecoloured/analog/blob/main/README.md
category:
  - analytics
description: Minimal, self-hosted web analytics app that stores event counts in MongoDB, PostgreSQL, Redis or SQLite and shows them on a dashboard.
status: active
maintainer: RCKT
maintainerType: individual
firstRelease: 2025
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - mongodb
  - postgres
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: source
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-16
githubStargazers: 51
contributors: 1
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/orangecoloured/analog
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/orangecoloured/analog/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/orangecoloured/analog/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/orangecoloured/analog
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/orangecoloured/analog/blob/v0.2.3/package.json
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/orangecoloured/analog/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/orangecoloured/analog/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/orangecoloured/analog/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/orangecoloured/analog/releases/tag/v0.2.3
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/orangecoloured/analog/releases/tag/v0.2.3
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/orangecoloured/analog
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/orangecoloured/analog/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

ΛNΛLOG is a self-hosted analytics app that receives named events over HTTP and shows them on a dashboard. Its server is a Node.js process that stores events in MongoDB, PostgreSQL, Redis or SQLite, and the same process can serve the static frontend when `ANALOG_STATIC_SERVER` is set. A site sends an event with a POST request to the `/api/events` endpoint, naming the event in the body, and the dashboard reads the stored data back with a GET request to the same path.

The [README](https://github.com/orangecoloured/analog/blob/main/README.md) covers a local run with npm, a Docker build from the repository's Dockerfile, and deploys to Koyeb, Netlify, Render and Vercel from a copy of the repository. The project keeps its configuration in environment variables, which the README lists in one table.

## Worth knowing

The optional `ANALOG_TOKEN` protects requests, and `ANALOG_PROTECT_POST` extends the protection to POST requests. The README warns that scheduled clean-up on Netlify and Vercel may not run because of runtime limits. The PostgreSQL section asks for a transaction pooler connection. The release line is pre-1.0.
