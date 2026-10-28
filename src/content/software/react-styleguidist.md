---
id: react-styleguidist
name: React Styleguidist
urls:
  home: https://react-styleguidist.js.org/
  repository: https://github.com/styleguidist/react-styleguidist
  docs: https://react-styleguidist.js.org/docs/getting-started
category:
  - dev-tool
description: Component workshop that runs React components in isolation with a hot reloaded dev server and generates a living style guide from Markdown examples.
status: active
maintainer: Artem Sapegin
firstRelease: 2015
language: javascript
runtime:
  - node
runtimeMin: node 14
basedOn:
  - react
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2025-01-07
githubStargazers: 11048
npmWeeklyDownloads: 67068
contributors: 229
dependentRepos: 2797
dependentPackages: 2231
social:
  x: https://twitter.com/styleguidist
  discord: https://discord.gg/QWsybqJDTA
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://react-styleguidist.js.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/styleguidist/react-styleguidist
    checkedAt: 2026-10-28
  - field: urls
    url: https://react-styleguidist.js.org/docs/getting-started
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/styleguidist/react-styleguidist/blob/v13.1.4/License.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/styleguidist/react-styleguidist
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/styleguidist/react-styleguidist/blob/v13.1.4/Readme.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/styleguidist/react-styleguidist/blob/v13.1.4/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/styleguidist/react-styleguidist/blob/v13.1.4/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://react-styleguidist.js.org/docs/getting-started
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://react-styleguidist.js.org/docs/getting-started
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://react-styleguidist.js.org/docs/cli
    checkedAt: 2026-10-28
  - field: renderingModes
    url: https://react-styleguidist.js.org/docs/cli
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/styleguidist/react-styleguidist
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/styleguidist/react-styleguidist/blob/v13.1.4/License.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/react-styleguidist
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/styleguidist/react-styleguidist/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/styleguidist/react-styleguidist/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/styleguidist/react-styleguidist
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/styleguidist/react-styleguidist/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/react-styleguidist
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-styleguidist
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-styleguidist
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://react-styleguidist.js.org/
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
hosting: null
packagistDownloads: null
---

React Styleguidist runs React components in isolation. It starts a hot reloaded dev server where each component can be viewed with all its variants, and it builds a style guide from the components' props and from Markdown files that hold live, editable usage examples. The style guide is meant to be shared with a team, designers included.

The package is installed into a project as a development dependency and started from the command line or from a package.json script. The [getting started guide](https://react-styleguidist.js.org/docs/getting-started) shows the server and build commands. The build writes the style guide as static HTML, so the output can be published to any web space.

## Worth knowing

The guide asks users to install webpack themselves unless their project uses Create React App, which the homepage says works out of the box. The dev server and the build are run from the command line on a developer's machine.
