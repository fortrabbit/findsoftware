---
id: react-cosmos
name: React Cosmos
urls:
  home: https://reactcosmos.org
  repository: https://github.com/react-cosmos/react-cosmos
  docs: https://reactcosmos.org/docs/getting-started
  plugins: https://reactcosmos.org/docs/plugins
category:
  - dev-tool
description: Sandbox for developing and testing React UI components in isolation, with file-based fixtures, a playground interface and a static export.
status: active
maintainer: Ovidiu Cherecheș
firstRelease: 2014
language: javascript
basedOn:
  - react
runsAs:
  - local
  - static
installMethod: npm i -D react-cosmos react-cosmos-plugin-webpack
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-08-31
githubStargazers: 8692
npmWeeklyDownloads: 67501
contributors: 108
dependentRepos: 1054
dependentPackages: 142
social:
  x: https://twitter.com/ReactCosmos
  discord: https://discord.gg/3X95VgfnW5
  forum: https://github.com/react-cosmos/react-cosmos/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://reactcosmos.org
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/react-cosmos/react-cosmos
    checkedAt: 2026-10-28
  - field: urls
    url: https://reactcosmos.org/docs/getting-started
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/react-cosmos/react-cosmos/main/LICENSE
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://reactcosmos.org
    checkedAt: 2026-10-28
  - field: category
    url: https://reactcosmos.org
    checkedAt: 2026-10-28
  - field: language
    url: https://reactcosmos.org
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://reactcosmos.org/docs/cli
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://reactcosmos.org/docs/static-export
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://reactcosmos.org/docs/getting-started/webpack
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/react-cosmos/react-cosmos
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/react-cosmos/react-cosmos/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/react-cosmos/react-cosmos/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/react-cosmos/react-cosmos/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/react-cosmos/react-cosmos/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/react-cosmos/react-cosmos
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/react-cosmos/react-cosmos/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/react-cosmos
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-cosmos
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-cosmos
    checkedAt: 2026-10-28
  - field: urls
    url: https://reactcosmos.org/docs/plugins
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
runtimeMin: null
packagistDownloads: null
---

React Cosmos renders React UI components outside the app that uses them. Each state of a component is a fixture, defined by a file-system convention. A playground lets a developer browse the fixtures and change their inputs.

The `cosmos` command starts the dev server. The `cosmos-export` command writes a static build of the component library, which the static export page says can be deployed to any static hosting service. The guides cover Vite, Webpack, React Native and Next.js, and the Webpack guide installs the project with npm alongside a plugin.

## Worth knowing

The static export does not have every development feature. The export page says it cannot open the selected fixture in the code editor, but anyone with the export URL can browse fixtures and play with component inputs.
