---
id: msw
name: Mock Service Worker
urls:
  home: https://mswjs.io
  repository: https://github.com/mswjs/msw
  docs: https://mswjs.io/docs/
category:
  - testing
description: API mocking library for JavaScript that intercepts requests in the browser and in Node.js and answers them with mocked responses.
status: active
maintainer: Artem Zakharchenko
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-11-15
githubStargazers: 18351
npmWeeklyDownloads: 33333070
contributors: 172
dependentRepos: 11851
dependentPackages: 2234
social:
  x: https://x.com/ApiMocking
  discord: https://discord.com/invite/z29WbnfDC5
  youtube: https://www.youtube.com/c/MockServiceWorker
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mswjs.io
    checkedAt: 2026-11-16
  - field: urls
    url: https://mswjs.io/docs/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mswjs/msw
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mswjs/msw/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/mswjs/msw/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mswjs/msw
    checkedAt: 2026-11-16
  - field: category
    url: https://mswjs.io
    checkedAt: 2026-11-16
  - field: runtime
    url: https://mswjs.io
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/msw
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mswjs/msw/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mswjs/msw/releases
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://mswjs.io/docs/quick-start
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mswjs/msw/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mswjs/msw/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/msw
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/msw
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/msw
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mswjs/msw
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mswjs/msw/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Mock Service Worker is an API mocking library for JavaScript that answers an application's requests with mocked responses while the application code stays unchanged. In the browser it uses the Service Worker API to intercept requests at the network level. In Node.js it intercepts requests at the socket level, and the same request handlers serve tests, local development and debugging in both environments.

Handlers use an Express-like routing syntax and can describe REST, GraphQL, Server-Sent Events and WebSocket traffic. The [documentation](https://mswjs.io/docs/) covers setup for each environment, and a [comparison page](https://mswjs.io/docs/comparison) sets it beside Nock, JSON Server, Mirage, Cypress and Playwright.

## Worth knowing

The FAQ says Node.js versions below a stated minimum are not supported.
