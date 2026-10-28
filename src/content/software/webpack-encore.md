---
id: webpack-encore
name: Symfony Webpack Encore
urls:
  home: https://symfony.com/doc/current/frontend.html
  repository: https://github.com/symfony/webpack-encore
  docs: https://symfony.com/doc/current/frontend/encore/index.html
category:
  - build-tool
description: JavaScript wrapper around webpack that bundles modules and compiles and minifies CSS and JavaScript assets, used in Symfony and other applications.
status: active
maintainer: Symfony
firstRelease: 2017
language: javascript
runtime:
  - node
runtimeMin: node 22
basedOn:
  - webpack
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-07-26
githubStargazers: 2220
npmWeeklyDownloads: 252361
contributors: 84
dependentRepos: 12333
dependentPackages: 72
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/symfony/webpack-encore
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/symfony/webpack-encore
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/symfony/webpack-encore/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/symfony/webpack-encore/main/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/symfony/webpack-encore/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/symfony/webpack-encore/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/symfony/webpack-encore
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/symfony/webpack-encore/v7.2.0/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/symfony/webpack-encore/v7.2.0/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://symfony.com/doc/current/frontend/encore/installation.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://symfony.com/doc/current/frontend/encore/installation.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://symfony.com/doc/current/frontend/encore/simple-example.html
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/symfony/webpack-encore
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/symfony/webpack-encore/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/symfony/webpack-encore/releases?per_page=100
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/symfony/webpack-encore/releases?per_page=30
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/symfony/webpack-encore/releases?per_page=30
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/symfony/webpack-encore
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/symfony/webpack-encore/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@symfony/webpack-encore
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40symfony%2Fwebpack-encore
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40symfony%2Fwebpack-encore
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

Symfony Webpack Encore is a wrapper around webpack, with a smaller API for bundling JavaScript modules and for pre-processing and compiling CSS and JavaScript assets. A Symfony application installs it with a Composer bundle, which adds the Node dependencies, an assets directory and a webpack.config.js file; any other project installs the npm package and writes the same configuration by hand. The configuration calls the Encore API, and the example build writes its output to public/build, where the web server serves it. Symfony maintains Encore.

## Worth knowing

Encore is in low-maintenance mode: the project takes bug fixes, security patches and peer dependency updates only. The README recommends Symfony Reprise for projects that need a bundler and names the Symfony AssetMapper component as a simpler alternative that runs entirely in PHP.
