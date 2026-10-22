---
id: qwik
name: Qwik
urls:
  home: https://qwik.dev
  repository: https://github.com/QwikDev/qwik
  docs: https://qwik.dev/docs/
category:
  - framework
description: Framework for web apps that resumes on the client instead of hydrating, with Qwik City for routing and server rendering.
status: active
maintainer: QwikDev
language: typescript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 18
runsAs:
  - static
  - always-on
renderingModes:
  - static
  - server
installMethod: npm create qwik, then the Qwik CLI
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-06
githubStargazers: 22064
npmWeeklyDownloads: 25721
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/QwikDev/qwik
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/QwikDev/qwik
    checkedAt: 2026-10-22
  - field: urls
    url: https://qwik.dev/docs/
    checkedAt: 2026-10-22
  - field: category
    url: https://qwik.dev/docs/getting-started/
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/QwikDev/qwik
    checkedAt: 2026-10-22
  - field: runtime
    url: https://qwik.dev/docs/getting-started/
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://qwik.dev/docs/getting-started/
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://qwik.dev/docs/getting-started/
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://qwik.dev/docs/deployments/self-hosting/
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://qwik.dev/docs/deployments/self-hosting/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://qwik.dev/docs/deployments/self-hosting/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://qwik.dev/docs/deployments/self-hosting/
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/QwikDev/qwik
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://github.com/QwikDev/qwik/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://github.com/QwikDev/qwik/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/@builder.io/qwik/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/QwikDev/qwik/releases/latest
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/QwikDev/qwik
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@builder.io/qwik
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Qwik is a framework for web apps that resumes on the client instead of hydrating. Its documentation describes it as resumable. Qwik City, developed in the same repository, adds routing and server rendering.

The [self-hosting guide](https://qwik.dev/docs/deployments/self-hosting/) describes two outputs. The static adapter produces a directory that is copied to a web server's document root. The Express and Fastify adapters produce a Node.js server entry that runs on the production server, and the guide recommends a process manager such as PM2 for it.
