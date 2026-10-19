---
id: angular
name: Angular
urls:
  home: https://angular.dev
  repository: https://github.com/angular/angular
  docs: https://angular.dev/installation
category:
  - framework
description: TypeScript-based web application framework with client-side, server-side and prerendered rendering.
status: active
maintainer: Google
maintainerType: company
firstRelease: 2016
language: typescript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 22
templating: angular templates (HTML-based)
i18n: built-in i18n guide and tooling
runsAs:
  - static
renderingModes:
  - spa
  - server
  - static
installMethod: npm install -g @angular/cli && ng new <project-name>
licenseModel: open-source
license: MIT
currentMajor: "22"
latestReleaseDate: 2026-10-14
githubStargazers: 101090
npmWeeklyDownloads: 3429637
contributors: 2693
social:
  x: https://x.com/angular
  bluesky: https://bsky.app/profile/angular.dev
  discord: https://discord.gg/angular
  youtube: https://www.youtube.com/angular
wikidata: Q28925578
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/angular/angular
    checkedAt: 2026-10-18
  - field: urls
    url: https://angular.dev/
    checkedAt: 2026-10-18
  - field: urls
    url: https://angular.dev/installation
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://registry.npmjs.org/@angular/core
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://angular.dev/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://angular.dev/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q28925578
    checkedAt: 2026-10-18
  - field: category
    url: https://angular.dev/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/angular/angular
    checkedAt: 2026-10-18
  - field: runtime
    url: https://angular.dev/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/@angular/core/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://angular.dev/installation
    checkedAt: 2026-10-18
  - field: templating
    url: https://angular.dev/guide/templates
    checkedAt: 2026-10-18
  - field: i18n
    url: https://angular.dev/guide/i18n
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://angular.dev/guide/ssr
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://angular.dev/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/angular/angular
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/angular/angular
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/angular/angular/releases/tag/v22.2.3
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/angular/angular
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/angular/angular/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@angular/core
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://angular.dev/guide/ssr
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Angular is a TypeScript framework from Google for building web applications, with templates based on HTML syntax. Applications render in the browser by default, and each route can be set to client rendering, prerendering at build time or server rendering. Server rendering is added with the @angular/ssr package and renders the application on the server for each request. The framework includes its own internationalization tooling.

## Worth knowing

Routes in server render mode need a running server process, while client-rendered and prerendered routes do not. Several of the deploy builders that the deployment guide adds with ng add come from third parties.
