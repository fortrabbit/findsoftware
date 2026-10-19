---
id: analog
name: Analog
urls:
  home: https://analogjs.org
  repository: https://github.com/analogjs/analog
  docs: https://analogjs.org/docs/getting-started
category:
  - framework
description: Full-stack meta-framework for building Angular applications and websites, with Vite builds and Nitro server integrations.
status: active
language: typescript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - angular
runsAs:
  - always-on
renderingModes:
  - static
  - server
installMethod: npm create analog@latest (also yarn, pnpm, bun create analog; Nx scaffolding)
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-14
npmWeeklyDownloads: 17824
contributors: 100
social:
  discord: https://chat.analogjs.org
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://api.github.com/repos/analogjs/analog
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/analogjs/analog
    checkedAt: 2026-10-19
  - field: urls
    url: https://analogjs.org/docs/getting-started
    checkedAt: 2026-10-19
  - field: category
    url: https://github.com/analogjs/analog
    checkedAt: 2026-10-19
  - field: basedOn
    url: https://github.com/analogjs/analog
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/analogjs/analog
    checkedAt: 2026-10-19
  - field: runtime
    url: https://analogjs.org/docs/getting-started
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://analogjs.org/docs/getting-started
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://analogjs.org/docs/getting-started
    checkedAt: 2026-10-19
  - field: renderingModes
    url: https://github.com/analogjs/analog
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/analogjs/analog
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://analogjs.org
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/analogjs/analog/releases/latest
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/analogjs/analog/contributors?anon=true&per_page=100
    checkedAt: 2026-10-19
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@analogjs/platform
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://analogjs.org/docs/features/deployment/overview
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Analog is a full-stack meta-framework for building Angular applications and websites. It uses Vite for builds and Nitro for its server integrations. Analog supports hybrid rendering, with server-side rendering and static generation in one project. A build writes the client assets and the server build, which handles API routes and server-side rendering, to separate output folders, so a deployment that uses server rendering runs the server build alongside the static assets.
