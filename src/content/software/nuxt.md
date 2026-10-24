---
id: nuxt
name: Nuxt
urls:
  home: https://nuxt.com
  repository: https://github.com/nuxt/nuxt
  docs: https://nuxt.com/docs/4.x/getting-started/installation
  plugins: https://nuxt.com/modules
category:
  - framework
  - ssg
description: Vue-based framework for building server-rendered, static and hybrid websites and web apps.
status: active
maintainer: Nuxt core team
maintainerType: community
parent: Vercel
firstRelease: 2016
language: javascript
runtime:
  - node
  - bun
  - deno
hosting:
  - node
  - bun
  - deno
  - static
runtimeMin: node 22
basedOn:
  - vue
  - nitro
templating: vue
runsAs:
  - always-on
  - static
renderingModes:
  - server
  - spa
  - static
  - isr
installMethod: npm create nuxt@latest
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-16
githubStargazers: 60962
npmWeeklyDownloads: 1378576
contributors: 1371
pluginCount: 336
social:
  x: https://x.com/nuxt_js
  bluesky: https://bsky.app/profile/nuxt.com
  discord: https://chat.nuxt.dev
wikidata: Q55641291
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/nuxt/nuxt
    checkedAt: 2026-10-18
  - field: urls
    url: https://nuxt.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://nuxt.com/docs/4.x/getting-started/installation
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://github.com/nuxt/nuxt
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://nuxt.com/team
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://nuxt.com/team
    checkedAt: 2026-10-18
  - field: parent
    url: https://vercel.com/blog/nuxtlabs-joins-vercel
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q55641291
    checkedAt: 2026-10-18
  - field: category
    url: https://nuxt.com/docs/4.x/guide/concepts/rendering
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://nuxt.com/docs/4.x/getting-started/deployment
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/nuxt/nuxt
    checkedAt: 2026-10-18
  - field: runtime
    url: https://nuxt.com/docs/4.x/getting-started/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/nuxt/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://nuxt.com/docs/4.x/getting-started/installation
    checkedAt: 2026-10-18
  - field: templating
    url: https://nuxt.com/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://nuxt.com/docs/4.x/guide/concepts/rendering
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://nuxt.com/docs/4.x/getting-started/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/nuxt/nuxt
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/nuxt/nuxt
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/nuxt/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/nuxt/nuxt/releases/tag/v4.6.2
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/nuxt/nuxt
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/nuxt/nuxt/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/nuxt
    checkedAt: 2026-10-18
  - field: urls
    url: https://nuxt.com/modules
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://nuxt.com/modules
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://nuxt.com/docs/getting-started/deployment
    checkedAt: 2026-10-19
ai: authored
packagistDownloads: null
---

Nuxt is a framework built on Vue and the Nitro server engine, for server-rendered, static and hybrid sites and apps. Rendering is chosen per route with route rules, so one project can serve some pages from a server, cache others for a period and generate the rest as static files. The build either produces a server entry file for Node hosting or a folder of static assets, depending on the build command.

NuxtLabs, the company that stewards Nuxt and Nitro, joined Vercel in 2025. Vercel's announcement says the project stays MIT-licensed with open governance.

## Worth knowing

Server output needs a Node process that keeps running, while static output needs no server. Content management and internationalization come from separate modules rather than the core. The starter gallery mixes free, freemium and paid templates without marking which ones are official. The [deployment guide](https://nuxt.com/docs/4.x/getting-started/deployment) describes both output types.
