---
id: bun
name: Bun
urls:
  home: https://bun.com/
  repository: https://github.com/oven-sh/bun
  docs: https://bun.com/docs
category:
  - build-tool
  - testing
description: Fast all-in-one JavaScript and TypeScript runtime that also ships a package manager, test runner and bundler as one executable.
status: active
maintainer: oven-sh
parent: Anthropic
firstRelease: 2021
language: rust
runtime:
  - bun
hosting:
  - bun
runsAs:
  - local
  - always-on
installMethod: install script
licenseModel: open-source
license: MIT, LGPL-2
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 96446
npmWeeklyDownloads: 4597797
contributors: 448
dependentRepos: 21486
dependentPackages: 108
social:
  x: https://x.com/bunjavascript
  discord: https://bun.com/discord
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://bun.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/oven-sh/bun
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/oven-sh/bun/blob/main/README.md
    checkedAt: 2026-10-28
  - field: parent
    url: https://bun.com/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://api.github.com/repos/oven-sh/bun
    checkedAt: 2026-10-28
  - field: category
    url: https://bun.com/docs
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/oven-sh/bun
    checkedAt: 2026-10-28
  - field: runtime
    url: https://bun.com/docs
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://bun.com/docs
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://bun.com/docs/runtime/http/server
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/oven-sh/bun/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/oven-sh/bun/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/oven-sh/bun/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/oven-sh/bun/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/oven-sh/bun/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/oven-sh/bun/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/oven-sh/bun/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/oven-sh/bun/releases/tags/bun-build-8
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/oven-sh/bun/releases/tag/bun-v1.4.4
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/oven-sh/bun/releases/tag/bun-v1.4.4
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/oven-sh/bun
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/oven-sh/bun/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/bun
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/bun
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/bun
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Bun is a JavaScript and TypeScript runtime written in Rust, shipped as one executable that also contains a package manager, a test runner and a bundler. The runtime is described as a drop-in replacement for Node.js, and the bundler is started with the `bun build` command or the `Bun.build()` API. It is installed with a shell script, npm, Homebrew or a Docker image. The project's homepage states that Bun has joined Anthropic, and the code is maintained in the oven-sh GitHub organization.

## Worth knowing

The LICENSE file describes Bun itself as MIT-licensed and states that Bun statically links JavaScriptCore and WebKit, which it lists under LGPL-2. The file quotes the LGPL-2 wording that covers statically linked libraries.
