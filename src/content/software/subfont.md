---
id: subfont
name: subfont
urls:
  repository: https://github.com/Munter/subfont
  docs: https://github.com/Munter/subfont/blob/master/README.md
category:
  - build-tool
description: Command line tool that subsets web fonts to the characters a page uses, then injects the subsets and preload hints into the page.
status: active
maintainer: Peter Brandt Müller
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
runtimeMin: node 10
runsAs:
  - local
installMethod: npm install -g subfont
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-09-20
githubStargazers: 1636
npmWeeklyDownloads: 4909
contributors: 12
dependentRepos: 174
dependentPackages: 6
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/Munter/subfont
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/Munter/subfont/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/Munter/subfont/blob/master/LICENSE.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/Munter/subfont
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/Munter/subfont/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/Munter/subfont/blob/v7.3.0/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/Munter/subfont/blob/v7.3.0/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Munter/subfont/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/Munter/subfont/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/Munter/subfont
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/Munter/subfont/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/subfont
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/subfont/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/subfont
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/Munter/subfont
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/Munter/subfont/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/subfont
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/subfont
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/subfont
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

subfont is a command line tool that a developer runs on HTML pages to produce font subsets and the markup that loads them. The package is installed globally with npm and runs on Node.js. The project has no site of its own: its [README](https://github.com/Munter/subfont/blob/master/README.md) is the documentation, and the copyright line in its license names Peter Brandt Müller.

## Worth knowing

The tool runs on the developer's machine or in a build step, so the site a visitor receives holds the subsets, not the tool. The README adds that subfont is meant for the files a site deploys to static file hosting, and that characters the page does not show can be added to the subsets by hand.
