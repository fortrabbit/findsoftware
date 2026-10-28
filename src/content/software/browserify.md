---
id: browserify
name: Browserify
urls:
  home: https://browserify.org/
  repository: https://github.com/browserify/browserify
  docs: https://github.com/browserify/browserify-handbook
  plugins: https://github.com/browserify/browserify/wiki/browserify-tools
category:
  - build-tool
description: Bundler that lets browser code use Node.js-style require() calls to load npm modules into a single script.
status: active
maintainer: James Halliday
firstRelease: 2011
language: javascript
runtime:
  - node
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "17"
latestReleaseDate: 2024-10-03
githubStargazers: 14693
npmWeeklyDownloads: 1617558
contributors: 170
dependentRepos: 365847
dependentPackages: 31322
social:
  x: https://twitter.com/browserify
  discord: https://discord.gg/V5atDTQSc7
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://browserify.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/browserify/browserify
    checkedAt: 2026-10-28
  - field: urls
    url: https://browserify.org/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/browserify/browserify/master/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://browserify.org/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/browserify/browserify
    checkedAt: 2026-10-28
  - field: runtime
    url: https://browserify.org/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://browserify.org/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/browserify/browserify/blob/master/readme.markdown
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://browserify.org/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/browserify/browserify
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/browserify/browserify/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/browserify
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/browserify/browserify/releases/tag/v17.0.1
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/browserify/browserify/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/browserify/browserify
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/browserify/browserify/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/browserify
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/browserify
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/browserify
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/browserify/browserify/blob/master/readme.markdown
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

Browserify is a bundler that reads the `require()` calls in a project and combines the modules they load, including npm packages, into one bundle for the browser. It runs from the command line on the developer's machine, and it is installed with npm. The README describes the build as a recursive walk of the `require()` graph starting at an entry file, and the project keeps a wiki page that lists the tools built around it.
