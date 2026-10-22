---
id: solidstart
name: SolidStart
urls:
  home: https://start.solidjs.com
  repository: https://github.com/solidjs/solid-start
  docs: https://docs.solidjs.com/solid-start/v2/getting-started
category:
  - framework
description: Full-stack application framework for Solid, built on Vite.
status: active
maintainer: Ryan Carniato
language: typescript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
renderingModes:
  - server
  - static
installMethod: npm init solid
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-22
githubStargazers: 5922
npmWeeklyDownloads: 84297
contributors: 235
social:
  discord: https://discord.com/invite/solidjs
  subreddit: https://reddit.com/r/solidjs
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://start.solidjs.com
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/solidjs/solid-start
    checkedAt: 2026-10-22
  - field: urls
    url: https://docs.solidjs.com/solid-start/v2/getting-started
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://github.com/solidjs/solid-start/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/solidjs/solid-start
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/solidjs/solid-start
    checkedAt: 2026-10-22
  - field: runtime
    url: https://docs.solidjs.com/solid-start/v2/getting-started
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://docs.solidjs.com/solid-start/v2/getting-started
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://docs.solidjs.com/solid-start/v2/guides/deployment-plugins
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://docs.solidjs.com/solid-start/v2/building-your-application/route-prerendering
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://docs.solidjs.com/solid-start/v2/getting-started
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/solidjs/solid-start
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://github.com/solidjs/solid-start/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/@solidjs/start/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@solidjs/start
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/solidjs/solid-start
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/solidjs/solid-start/contributors?anon=true
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@solidjs/start
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

SolidStart is a full-stack application framework built on Solid and Vite. It is written in TypeScript and the project is scaffolded with create-solid.

A deployment plugin turns the server build into a production runtime for a hosting target. Nitro provides portable deployment presets, and separate Netlify and Cloudflare plugins integrate with those platforms. Selected routes can be pre-rendered to static HTML during the build.

## Worth knowing

Where the live app runs depends on the chosen deployment plugin, so the record does not state one runtime for every setup. The migration guide covers moving from v1, which used Vinxi and Nitro v2.
