---
id: tinyhttp
name: tinyhttp
urls:
  home: https://tinyhttp.v1rtl.site
  repository: https://github.com/tinyhttp/tinyhttp
  docs: https://tinyhttp.v1rtl.site
  plugins: https://tinyhttp.v1rtl.site/docs/middleware
category:
  - framework
description: Express-like web framework for Node.js, written in TypeScript and published as native ESM.
status: active
maintainer: v 1 r t l
firstRelease: 2020
language: typescript
runtime:
  - node
  - bun
hosting:
  - node
  - bun
runtimeMin: node 16
databases:
  - mongodb
  - postgres
templating: Template engines registered per file extension, Eta documented
runsAs:
  - always-on
  - per-request
installMethod: pnpm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-20
githubStargazers: 2909
npmWeeklyDownloads: 372164
contributors: 63
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/tinyhttp/tinyhttp
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/tinyhttp/tinyhttp
    checkedAt: 2026-10-22
  - field: urls
    url: https://raw.githubusercontent.com/tinyhttp/tinyhttp/master/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/tinyhttp/tinyhttp/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/tinyhttp/tinyhttp
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/tinyhttp/tinyhttp/master/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/docs/getting-started.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/tinyhttp/tinyhttp/master/README.md
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://registry.npmjs.org/@tinyhttp/app/latest
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/tinyhttp/tinyhttp/master/README.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/index.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/docs/getting-started.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/docs/advanced.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/docs/advanced.md
    checkedAt: 2026-10-22
  - field: databases
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/docs/advanced.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/docs/main-concepts.md
    checkedAt: 2026-10-22
  - field: urls
    url: https://raw.githubusercontent.com/tinyhttp/website/HEAD/docs/middleware.md
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/tinyhttp/tinyhttp
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/tinyhttp/tinyhttp/master/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/tinyhttp/tinyhttp/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/tinyhttp/tinyhttp/releases
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/@tinyhttp/app
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/tinyhttp/tinyhttp
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/tinyhttp/tinyhttp/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@tinyhttp/app
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

tinyhttp is an Express-like web framework for Node.js and Bun, written in TypeScript and compiled to native ESM. Its README describes it as a replacement for Express. The docs list the differences: no static file server and no body parser, so those come from external middleware, and template engines are registered per file extension. The project keeps a [middleware list](https://tinyhttp.v1rtl.site/docs/middleware) on its site.

The [deployment guide](https://tinyhttp.v1rtl.site/docs/advanced) covers serverless platforms, and for a server of your own a process manager with a web server as reverse proxy. Its database examples include MongoDB and Postgres.

## Worth knowing

The getting-started page states a lower Node.js minimum than the README and the npm package for `@tinyhttp/app` do.
