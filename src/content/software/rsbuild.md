---
id: rsbuild
name: Rsbuild
urls:
  home: https://rsbuild.rs/
  repository: https://github.com/web-infra-dev/rsbuild
  docs: https://rsbuild.rs/guide/start/quick-start
category:
  - build-tool
description: Build tool for modern web applications that runs on Rspack and supports React, Vue, Svelte and other frameworks.
status: active
maintainer: Bytedance, Inc.
maintainerType: company
parent: Bytedance, Inc.
firstRelease: 2023
language: javascript
runtime:
  - node
  - deno
  - bun
runtimeMin: node 20
basedOn:
  - rspack
runsAs:
  - local
installMethod: npm create, npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-19
githubStargazers: 3412
npmWeeklyDownloads: 2271066
contributors: 171
dependentRepos: 1
dependentPackages: 32
social:
  discord: https://discord.gg/sYK4QjyZ4V
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://rsbuild.rs/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/web-infra-dev/rsbuild
    checkedAt: 2026-10-28
  - field: urls
    url: https://rsbuild.rs/guide/start/quick-start
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/web-infra-dev/rsbuild/blob/v2.2.14/LICENSE
    checkedAt: 2026-10-28
  - field: parent
    url: https://github.com/web-infra-dev/rsbuild/blob/v2.2.14/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/web-infra-dev/rsbuild
    checkedAt: 2026-10-28
  - field: category
    url: https://rsbuild.rs/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://rsbuild.rs/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://rsbuild.rs/guide/start/quick-start
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://rsbuild.rs/guide/start/quick-start
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://rsbuild.rs/guide/start/quick-start
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://rsbuild.rs/guide/start/quick-start
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/web-infra-dev/rsbuild
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://rsbuild.rs/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/web-infra-dev/rsbuild/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/web-infra-dev/rsbuild/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/web-infra-dev/rsbuild/releases/tags/v2.2.14
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/web-infra-dev/rsbuild
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/web-infra-dev/rsbuild/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@rsbuild/core
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40rsbuild%2Fcore
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40rsbuild%2Fcore
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Rsbuild is a build tool for web applications, built on Rspack, the bundler the project's homepage names as its base. It supports React, Vue, Svelte and other frameworks and is set up either with the create-rsbuild scaffolder or by adding the @rsbuild/core package to an existing project. The development server runs locally, and the build writes the application's HTML, JavaScript and CSS to a dist directory.

## Worth knowing

Rsbuild does not ship server-side rendering by default. Its SSR guide says framework developers build SSR on its low-level APIs and recommends full-stack frameworks built on Rsbuild. The deployment guide says HTML files usually need to be deployed on a server, while static assets can also go to a CDN.
