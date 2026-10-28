---
id: vanilla-extract
name: vanilla-extract
urls:
  home: https://vanilla-extract.style
  repository: https://github.com/vanilla-extract-css/vanilla-extract
  docs: https://vanilla-extract.style/documentation/getting-started/
category:
  - css-framework
description: Build-time CSS tool that lets styles be written in TypeScript, with locally scoped class names and CSS variables.
status: active
maintainer: SEEK
firstRelease: 2021
language: javascript
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-08
githubStargazers: 10441
npmWeeklyDownloads: 3193302
contributors: 140
dependentRepos: 8615
dependentPackages: 598
social:
  discord: https://discord.gg/6nCfPwwz6w
  forum: https://github.com/vanilla-extract-css/vanilla-extract/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://vanilla-extract.style/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/vanilla-extract-css/vanilla-extract
    checkedAt: 2026-10-28
  - field: urls
    url: https://vanilla-extract.style/documentation/getting-started/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@vanilla-extract/css
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/vanilla-extract-css/vanilla-extract/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/vanilla-extract-css/vanilla-extract
    checkedAt: 2026-10-28
  - field: category
    url: https://vanilla-extract.style/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://vanilla-extract.style/documentation/getting-started/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/vanilla-extract-css/vanilla-extract/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/vanilla-extract-css/vanilla-extract/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/vanilla-extract-css/vanilla-extract/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/@vanilla-extract/css
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@vanilla-extract/css
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/vanilla-extract-css/vanilla-extract
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/vanilla-extract-css/vanilla-extract
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@vanilla-extract/css
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40vanilla-extract%2Fcss
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40vanilla-extract%2Fcss
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

vanilla-extract lets a project write its styles in TypeScript, which a bundler evaluates at build time into static CSS files. Class names are scoped locally, and CSS variables are available from the same code. The `@vanilla-extract/css` package is installed with npm and connected to the project's bundler through an integration package for Vite, Webpack, Next.js, Astro and other bundlers listed in the [getting started guide](https://vanilla-extract.style/documentation/getting-started/). Sprinkles, Recipes and Dynamic CSS are optional packages in the same repository, and Sprinkles is built on top of vanilla-extract.

## Worth knowing

The package needs a bundler configured to handle CSS before any style file works.
