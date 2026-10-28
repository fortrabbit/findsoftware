---
id: bit
name: Bit
urls:
  home: https://bit.dev
  repository: https://github.com/teambit/bit
  docs: https://bit.dev/docs/
category:
  - dev-tool
  - build-tool
description: Open source build toolchain that organizes source code into composable components, with a component workshop and a hosted cloud for sharing them.
status: active
maintainer: Cocycles Ltd
maintainerType: company
firstRelease: 2017
language: javascript
runtime:
  - node
runtimeMin: node 18
runsAs:
  - local
installMethod: npx @teambit/bvm install
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-07-21
githubStargazers: 18500
npmWeeklyDownloads: 12522
contributors: 74
social:
  x: https://x.com/bitdotcloud
  discord: https://discord.bit.cloud
  subreddit: https://www.reddit.com/r/bit_dev
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://bit.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/teambit/bit
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/teambit/bit/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/teambit/bit/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/teambit/bit
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/teambit/bit/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/teambit/bit/v2.0.26/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://registry.npmjs.org/@teambit/bit/latest
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/teambit/bit/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/teambit/bit/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/teambit/bit/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/teambit/bit/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/teambit/bit
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/teambit/bit/releases/tag/v2.0.26
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/teambit/bit/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/teambit/bit
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/teambit/bit/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@teambit/bit
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

Bit organizes source code into components that can be reused across applications. A developer creates components from templates with the Bit command line, groups them in a workspace, and previews them in the Bit UI that `bit start` runs. The README also describes shell applications, which compose components into an app that `bit run` starts locally.

Components are versioned with `bit tag` and exported with `bit export`, either from the developer's machine or from a CI job. By default, the README says, builds run on Ripple CI, and the built components are then available through standard package managers. The README states that Bit fits monorepos, polyrepos and projects without repositories, and that it comes with development environments for Node.js, React, Angular, Vue, React Native and Next.js.

## Worth knowing

Scopes, the places where components are stored and released, can be hosted on Bit Cloud or on a server the team runs itself, and the README links a guide for the self-hosted case.
