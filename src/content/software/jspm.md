---
id: jspm
name: JSPM
urls:
  home: https://jspm.org
  repository: https://github.com/jspm/jspm
  docs: https://jspm.org/docs/cli/
category:
  - build-tool
description: Command-line package manager and development server that generates and maintains browser import maps for ES module projects.
status: active
maintainer: JSPM
firstRelease: 2013
language: javascript
runtime:
  - node
runsAs:
  - local
  - static
installMethod: npm install -g jspm
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-05
githubStargazers: 3867
npmWeeklyDownloads: 16705
contributors: 80
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://jspm.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/jspm/jspm
    checkedAt: 2026-10-28
  - field: urls
    url: https://jspm.org/docs/cli/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://api.github.com/users/jspm
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/jspm/jspm
    checkedAt: 2026-10-28
  - field: category
    url: https://jspm.org/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://jspm.org/getting-started
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://jspm.org/getting-started
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://jspm.org/getting-started
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://jspm.org/getting-started
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/jspm/jspm
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/jspm/jspm/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/jspm
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/jspm/jspm/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/jspm/jspm/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/jspm/jspm
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/jspm/jspm/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/jspm
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

JSPM is a package manager for browser import maps. The jspm command-line tool writes a project's import map to importmap.js, installs packages into it, and resolves each package to a URL on a CDN or to a folder in node_modules. Its development server listens on port 5776, and jspm build runs RollupJS over the entry points and writes the result to a dist folder.

Packages resolve against the jspm.io CDN by default. The [getting-started guide](https://jspm.org/getting-started) describes the other providers it supports, among them unpkg, jsDelivr and local node_modules. After a production build, the dist files go to a web server or hosting provider.

## Worth knowing

An application that loads its packages from jspm.io depends on that hosted CDN at run time. The FAQ describes jspm.io as a production modules CDN with a status page.
