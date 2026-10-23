---
id: micro
name: Micro
urls:
  repository: https://github.com/vercel/micro
  docs: https://github.com/vercel/micro/blob/main/packages/micro/README.md
category:
  - framework
description: Node.js library and command-line server for asynchronous HTTP microservices, where a module exports one function that handles each request.
status: active
maintainer: Vercel, Inc.
maintainerType: company
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 16
runsAs:
  - always-on
installMethod: npm install --save micro
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2022-11-26
githubStargazers: 10625
npmWeeklyDownloads: 2640202
contributors: 58
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/vercel/micro
    checkedAt: 2026-10-22
  - field: urls
    url: https://raw.githubusercontent.com/vercel/micro/main/packages/micro/README.md
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/vercel/micro/main/packages/micro/README.md
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/vercel/micro
    checkedAt: 2026-10-22
  - field: runtime
    url: https://registry.npmjs.org/micro/latest
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://registry.npmjs.org/micro/latest
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/vercel/micro/main/packages/micro/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/vercel/micro/main/packages/micro/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/vercel/micro/main/LICENSE
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/vercel/micro/main/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/vercel/micro/releases
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/vercel/micro/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/vercel/micro/releases
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/vercel/micro
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/vercel/micro/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/micro
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

Micro is a Node.js library for asynchronous HTTP microservices. A module exports one function that receives each request and returns the response, and the micro command starts that module as a server. It is installed with npm and maintained by Vercel, Inc.

## Worth knowing

The readme says Micro was created for use within containers and is not intended for use in serverless environments. It names micro-dev as the tool for development, since Micro itself is meant for production.
