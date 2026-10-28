---
id: autoprefixer
name: Autoprefixer
urls:
  home: https://autoprefixer.github.io/
  repository: https://github.com/postcss/autoprefixer
  docs: https://github.com/postcss/autoprefixer/blob/main/README.md
category:
  - build-tool
description: PostCSS plugin that parses CSS and adds vendor prefixes to rules, using browser support data from Can I Use.
status: active
maintainer: Andrey Sitnik
maintainerType: individual
firstRelease: 2013
language: javascript
runtime:
  - node
runtimeMin: node 10
basedOn:
  - postcss
runsAs:
  - local
installMethod: npm install postcss postcss-cli autoprefixer
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-10-26
githubStargazers: 22199
npmWeeklyDownloads: 75611237
contributors: 187
dependentRepos: 3254905
dependentPackages: 90847
social:
  x: https://twitter.com/autoprefixer
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://autoprefixer.github.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/postcss/autoprefixer
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/postcss/autoprefixer/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/postcss/autoprefixer/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/postcss/autoprefixer/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/postcss/autoprefixer
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/postcss/autoprefixer/10.6.2/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/postcss/autoprefixer/10.6.2/package.json
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/postcss/autoprefixer/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/postcss/autoprefixer/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/postcss/autoprefixer/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://registry.npmjs.org/autoprefixer/latest
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/postcss/autoprefixer/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/postcss/autoprefixer/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/postcss/autoprefixer/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/postcss/autoprefixer/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/postcss/autoprefixer
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/postcss/autoprefixer/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/autoprefixer
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/autoprefixer
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/autoprefixer
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/postcss/autoprefixer/blob/main/README.md
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

Autoprefixer is a PostCSS plugin that parses CSS and adds vendor prefixes to its rules, using browser support data from Can I Use. Authors write unprefixed CSS, and the plugin adds the prefixes that current browser popularity and property support call for.

The README's usage sections cover Gulp, webpack through postcss-loader, the postcss-cli command line and other build tools, and the project says it belongs in an assets build step. A standalone build for the browser, or for a runtime other than Node.js, is shipped alongside the npm package.
