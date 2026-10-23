---
id: vue
name: Vue
urls:
  home: https://vuejs.org/
  repository: https://github.com/vuejs/core
  docs: https://vuejs.org/guide/introduction.html
category:
  - framework
description: JavaScript framework for building user interfaces on the web, with a reactive rendering system and optional server rendering.
status: active
maintainer: Yuxi (Evan) You and Vue contributors
maintainerType: community
firstRelease: 2013
language: javascript
runtime:
  - node
hosting:
  - node
  - static
templating: HTML-based template syntax and single-file components
runsAs:
  - static
  - always-on
renderingModes:
  - spa
  - server
  - static
installMethod: npm create vue (create-vue scaffolder)
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-13
githubStargazers: 54721
npmWeeklyDownloads: 10175328
contributors: 436
social:
  x: https://x.com/vuejs
  discord: https://discord.com/invite/vue
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/vuejs/core
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/vuejs/core
    checkedAt: 2026-10-22
  - field: urls
    url: https://vuejs.org/guide/introduction.html
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/vuejs/core/main/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/vuejs/core
    checkedAt: 2026-10-22
  - field: category
    url: https://vuejs.org/
    checkedAt: 2026-10-22
  - field: runtime
    url: https://vuejs.org/guide/quick-start.html
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://vuejs.org/guide/quick-start.html
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://vuejs.org/guide/quick-start.html
    checkedAt: 2026-10-22
  - field: templating
    url: https://vuejs.org/guide/introduction.html
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://vuejs.org/guide/introduction.html
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://vuejs.org/guide/scaling-up/ssr.html
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://vuejs.org/guide/scaling-up/ssr.html
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/vuejs/core
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/vuejs/core/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/vuejs/core/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/vuejs/core/releases
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/vue
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/vuejs/core
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/vuejs/core/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/vue
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

Vue is a JavaScript framework for building user interfaces, which its docs call the Progressive Framework. The docs describe several ways of using it: enhancing static HTML from a CDN script tag with no build step, a single-page application, server-side rendering, and static site generation. Components use an HTML-based template syntax, and with a build tool they are written as single-file components. The quick start scaffolds a Vite-based project with the create-vue tool.

The project's [FAQ](https://vuejs.org/about/faq.html) describes Vue as an independent, community-driven project created by Evan You, funded primarily through sponsorships.

## Worth knowing

A fully static single-page application can be deployed on any static file server. A server-rendered app needs an environment where a Node.js server can run, as the [SSR guide](https://vuejs.org/guide/scaling-up/ssr.html) states.
