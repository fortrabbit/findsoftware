---
id: ladle
name: Ladle
urls:
  home: https://ladle.dev
  repository: https://github.com/tajo/ladle
  docs: https://ladle.dev/docs/
category:
  - dev-tool
description: Component workshop that runs React component stories in a Vite dev server and builds them into a static app.
status: active
maintainer: Vojtech Miksu
maintainerType: individual
firstRelease: 2021
language: javascript
runtime:
  - node
runtimeMin: node 20
basedOn:
  - vite
  - react
i18n: right-to-left stories
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2025-11-04
githubStargazers: 2995
npmWeeklyDownloads: 391572
contributors: 61
dependentRepos: 162
dependentPackages: 251
social:
  x: https://twitter.com/ladlejs
  discord: https://discord.gg/H6FSHjyW7e
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://ladle.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/tajo/ladle
    checkedAt: 2026-10-28
  - field: urls
    url: https://ladle.dev/docs/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://ladle.dev/docs/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://ladle.dev/docs/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/tajo/ladle/main/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://ladle.dev/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/tajo/ladle
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/tajo/ladle/%40ladle%2Freact%405.1.1/packages/ladle/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/tajo/ladle/%40ladle%2Freact%405.1.1/packages/ladle/package.json
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://ladle.dev/docs/setup
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://ladle.dev/docs/cli
    checkedAt: 2026-10-28
  - field: renderingModes
    url: https://ladle.dev/docs/cli
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://ladle.dev/docs/setup
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://ladle.dev/docs/setup
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://ladle.dev/docs/setup
    checkedAt: 2026-10-28
  - field: i18n
    url: https://ladle.dev/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/tajo/ladle
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/tajo/ladle/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@ladle%2freact
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/@ladle%2freact/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/tajo/ladle/releases?per_page=100
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/tajo/ladle
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/tajo/ladle/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@ladle/react
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40ladle%2Freact
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40ladle%2Freact
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
hosting: null
packagistDownloads: null
---

Ladle is a workshop for React components. It shows each story file in a browser through a development server, and its build command produces a static production app that can be deployed. It installs from npm as @ladle/react and expects react and react-dom to be installed alongside it.

The docs describe Ladle as a drop-in alternative to Storybook. Its releases are tagged on the GitHub repository tajo/ladle.

## Worth knowing

Ladle supports only React. Stories for other component frameworks are outside what the project covers.
