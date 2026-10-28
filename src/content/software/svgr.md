---
id: svgr
name: SVGR
urls:
  home: https://react-svgr.com
  repository: https://github.com/gregberge/svgr
  docs: https://react-svgr.com/docs/getting-started/
category:
  - build-tool
description: Toolbox that transforms SVG files into React components, through a command line tool, webpack, Rollup, Parcel and Node.js integrations.
status: active
maintainer: Greg Bergé
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
runtimeMin: node 14
runsAs:
  - local
installMethod: npm install --save-dev @svgr/cli
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2023-08-15
githubStargazers: 11060
npmWeeklyDownloads: 21580461
contributors: 125
dependentRepos: 1842062
dependentPackages: 805
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://react-svgr.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/gregberge/svgr
    checkedAt: 2026-10-28
  - field: urls
    url: https://react-svgr.com/docs/getting-started/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/gregberge/svgr/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/gregberge/svgr
    checkedAt: 2026-10-28
  - field: category
    url: https://react-svgr.com/docs/what-is-svgr/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://react-svgr.com/docs/node-api/
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/gregberge/svgr/blob/v8.1.0/packages/core/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://react-svgr.com/docs/cli/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://react-svgr.com/docs/cli/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://react-svgr.com/docs/webpack/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://react-svgr.com/docs/node-api/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://react-svgr.com/docs/cli/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/gregberge/svgr
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/gregberge/svgr/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/gregberge/svgr/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/gregberge/svgr/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/gregberge/svgr/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/gregberge/svgr
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/gregberge/svgr/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@svgr/core
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40svgr%2Fcore
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40svgr%2Fcore
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

SVGR takes a raw SVG file and produces a React component from it. The project is a monorepo of packages: a Node.js core package, a command line tool that transforms a file or a directory, and integrations for webpack, Rollup.js, Parcel and Next.js. The core package installs with npm and is released under the MIT license, and the README names Greg Bergé as the copyright holder. The [getting started guide](https://react-svgr.com/docs/getting-started/) directs readers to the integration that fits their build.

## Worth knowing

The command line tool is installed into a project as a development dependency or run with npx, so the React components it writes are the output a site receives. The webpack and Node.js integrations run inside the build, not in the visitor's browser.
