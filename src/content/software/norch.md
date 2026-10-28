---
id: norch
name: Norch
urls:
  repository: https://github.com/fergiemcdowall/norch
  docs: https://fergiemcdowall.github.io/norch/www_root/openapi/
category:
  - search
description: Standalone search server, installed with npm, that indexes JSON documents and answers queries over an HTTP API.
status: active
maintainer: fergiemcdowall
maintainerType: individual
firstRelease: 2013
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: npx
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-08-18
githubStargazers: 657
npmWeeklyDownloads: 16
contributors: 12
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/fergiemcdowall/norch
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://api.github.com/users/fergiemcdowall
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/fergiemcdowall/norch
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/v1.0.1/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/v1.0.1/package.json
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/master/README.md
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/master/README.md
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/v1.0.1/package.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/fergiemcdowall/norch/v1.0.1/package.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/fergiemcdowall/norch/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/fergiemcdowall/norch/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/fergiemcdowall/norch/commits/v0.2.1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/norch
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/fergiemcdowall/norch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/fergiemcdowall/norch/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Norch is a standalone search server that runs on Node.js and stores its data in LevelDB. It is installed from npm and started with a single command in a terminal, after which it serves its own pages for uploading documents and running searches, plus an OpenAPI description of its HTTP endpoints. The query language comes from the search-index package that Norch depends on.

## Worth knowing

Norch is a long-running process that keeps answering requests, so it needs a host that can run a Node.js process; static file hosting does not fit it.
