---
id: vinxi
name: Vinxi
urls:
  home: https://vinxi.vercel.app
  repository: https://github.com/nksaraf/vinxi
  docs: https://vinxi.vercel.app/guide/getting-started.html
category:
  - library
description: JavaScript toolkit for composing full stack applications and frameworks from Vite and Nitro primitives.
status: active
maintainer: Nikhil Saraf
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - node
  - static
basedOn:
  - vite
  - nitro
runsAs:
  - always-on
  - static
renderingModes:
  - static
  - spa
  - server
  - api-only
installMethod: npm, pnpm, yarn, bun
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-01-19
githubStargazers: 2797
npmWeeklyDownloads: 81282
contributors: 60
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/nksaraf/vinxi
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/nksaraf/vinxi
    checkedAt: 2026-10-22
  - field: urls
    url: https://vinxi.vercel.app/guide/getting-started.html
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/nksaraf/vinxi/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/nksaraf/vinxi
    checkedAt: 2026-10-22
  - field: category
    url: https://vinxi.vercel.app/
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://raw.githubusercontent.com/nksaraf/vinxi/main/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://vinxi.vercel.app/api/app.html
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://vinxi.vercel.app/guide/getting-started.html
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://raw.githubusercontent.com/nksaraf/vinxi/main/docs/guide/create-your-first-app.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/nksaraf/vinxi/main/docs/api/app.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/nksaraf/vinxi/main/docs/api/cli.md
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/nksaraf/vinxi
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/nksaraf/vinxi/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/nksaraf/vinxi/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/vinxi
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/nksaraf/vinxi
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/nksaraf/vinxi/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/vinxi
    checkedAt: 2026-10-22
figure:
  emoji: 📐
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Library
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
packagistDownloads: null
---

Vinxi is a JavaScript toolkit for composing full stack applications and frameworks from Vite and Nitro. An app is a file that calls `createApp` with a list of routers, each a specification of how a group of URLs is handled. The router types are static, http, spa and client. The docs describe the result as anything from a static site or SPA to an API or a server-rendered application.

Vinxi is installed with npm, pnpm, yarn or bun and runs with the regular node command. The [deployment guide](https://vinxi.vercel.app/guide/deployment.html) says the build targets a platform through the `SERVER_PRESET` environment variable, which comes from Nitro's presets. The default `node-server` preset builds a Node server, and the `static` preset builds a static site. The README names SolidStart as a framework being developed on Vinxi.
