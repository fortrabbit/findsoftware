---
id: broccoli
name: Broccoli
urls:
  repository: https://github.com/broccolijs/broccoli
  docs: https://github.com/broccolijs/broccoli/blob/main/README.md
  plugins: https://www.npmjs.org/browse/keyword/broccoli-plugin
category:
  - build-tool
description: Asset pipeline for Node that builds a tree of files from build definitions in a Brocfile, with plugins for each transformation.
status: stub
maintainer: Jo Liss
firstRelease: 2013
language: javascript
runtime:
  - node
runtimeMin: node 20
runsAs:
  - local
  - static
installMethod: npm install --save-dev broccoli
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2025-11-11
githubStargazers: 3323
npmWeeklyDownloads: 285685
contributors: 53
dependentRepos: 6376
dependentPackages: 570
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: status
    url: https://www.broccoli.build/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/broccolijs/broccoli
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/broccolijs/broccoli/v4.0.0-broccoli/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/broccolijs/broccoli
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/broccolijs/broccoli/v4.0.0-broccoli/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/broccolijs/broccoli/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/broccolijs/broccoli
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/broccolijs/broccoli/v4.0.0-broccoli/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/broccoli
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/broccolijs/broccoli/releases/tag/v4.0.0-broccoli
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/broccolijs/broccoli/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/broccolijs/broccoli
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/broccolijs/broccoli/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/broccoli
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/broccoli
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/broccoli
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

Broccoli is an asset pipeline that runs on Node and is backend-agnostic. A project describes its build in a `Brocfile.js`, which exports a function that returns a tree: either a directory path or a graph of plugin nodes that transform and combine other trees. The function receives the options the command line passes, including the environment.

The command line is a separate package, broccoli-cli. Its `broccoli build` command writes the output once, and `broccoli serve` runs a development server. The README advises against running the server on a production host and suggests serving the built files from a web server instead. Plugins are published on npm under the broccoli-plugin keyword, and a `Builder` class lets other Node code run a graph directly.
