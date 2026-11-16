---
id: ky
name: Ky
urls:
  repository: https://github.com/sindresorhus/ky
category:
  - library
description: HTTP client built on the Fetch API that adds retries, timeouts, hooks and errors for non-2xx responses.
status: active
maintainer: Sindre Sorhus
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
  - deno
  - bun
hosting:
  - node
  - deno
  - bun
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-09
githubStargazers: 17163
npmWeeklyDownloads: 9737271
contributors: 119
dependentRepos: 11957
dependentPackages: 468
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/sindresorhus/ky
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/sindresorhus/ky/v2.2.0/license
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/sindresorhus/ky
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/sindresorhus/ky/blob/v2.2.0/readme.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/sindresorhus/ky/blob/v2.2.0/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/sindresorhus/ky/blob/v2.2.0/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/sindresorhus/ky/blob/v2.2.0/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/sindresorhus/ky/v2.2.0/license
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/sindresorhus/ky/v2.2.0/license
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/ky
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ky
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ky
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/sindresorhus/ky/commits/v0.2.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/sindresorhus/ky/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/sindresorhus/ky/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/sindresorhus/ky
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/sindresorhus/ky/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Ky is an HTTP client for JavaScript built on the Fetch API. It adds method shortcuts, a JSON option, timeouts, retries, upload and download progress, a base URL option and hooks, and it can validate responses with Standard Schema validators. Unlike plain fetch, it treats non-2xx status codes as errors after redirects. Instances made with extend or create carry their own defaults.

The README names got and axios as projects Ky differs from, and it says Got is maintained by the same people as Ky.

## Worth knowing

The README notes that Chromium-based browsers retry 408 responses at the network layer for keep-alive connections, so a request can be retried by both the browser and Ky.
