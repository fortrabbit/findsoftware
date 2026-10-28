---
id: rspress
name: Rspress
urls:
  home: https://rspress.rs
  repository: https://github.com/web-infra-dev/rspress
  docs: https://rspress.rs
category:
  - ssg
description: Static site generator built on Rsbuild that turns Markdown and MDX files into documentation websites.
status: active
maintainer: ByteDance Inc.
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
  - deno
  - bun
hosting:
  - static
runtimeMin: node 20
basedOn:
  - rsbuild
  - react
contentStore:
  - flat-file
i18n: yes
runsAs:
  - static
renderingModes:
  - static
installMethod: npm create rspress
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-29
githubStargazers: 2351
npmWeeklyDownloads: 40723
contributors: 158
dependentRepos: 1
dependentPackages: 2
social:
  discord: https://discord.gg/XsaKEEk4mW
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/web-infra-dev/rspress
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/web-infra-dev/rspress
    checkedAt: 2026-10-22
  - field: urls
    url: https://rspress.rs/guide/start/getting-started
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://rspress.rs/
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/@rspress/core
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/web-infra-dev/rspress/blob/main/README.md
    checkedAt: 2026-10-22
  - field: category
    url: https://rspress.rs/
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://github.com/web-infra-dev/rspress/blob/main/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://rspress.rs/guide/start/introduction
    checkedAt: 2026-10-22
  - field: contentStore
    url: https://rspress.rs/guide/basic/conventional-route
    checkedAt: 2026-10-22
  - field: i18n
    url: https://rspress.rs/guide/start/introduction
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/web-infra-dev/rspress
    checkedAt: 2026-10-22
  - field: runtime
    url: https://rspress.rs/guide/start/getting-started
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://rspress.rs/guide/start/getting-started
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://rspress.rs/guide/start/getting-started
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://github.com/web-infra-dev/rspress/blob/main/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://rspress.rs/guide/basic/deploy
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/web-infra-dev/rspress
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/web-infra-dev/rspress/main/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/@rspress/core/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@rspress/core
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/web-infra-dev/rspress
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/web-infra-dev/rspress/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@rspress/core
    checkedAt: 2026-10-22
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40rspress%2Fcore
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40rspress%2Fcore
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Rspress is a React-based static site generator built on Rsbuild, made for documentation sites. Pages are Markdown and MDX files, and each file path maps to a route. Sites can carry several languages. A new project starts from the create-rspress scaffold, and the build runs on Node.js, Deno or Bun. The production output is HTML files plus static assets, and the [deployment guide](https://rspress.rs/guide/basic/deploy) puts them on static hosts such as GitHub Pages, with no server to run. Rspress is part of Rstack, a family of JavaScript tools.

## Worth knowing

The unscoped npm package named rspress holds the older major line. The current line is published as @rspress/core.
