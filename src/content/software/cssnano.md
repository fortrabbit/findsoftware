---
id: cssnano
name: cssnano
urls:
  home: https://cssnano.github.io/cssnano/
  repository: https://github.com/cssnano/cssnano
  docs: https://cssnano.github.io/cssnano/docs/getting-started/
category:
  - build-tool
description: Modular CSS minifier, built on the PostCSS ecosystem, that compresses stylesheets with a set of optimizations and presets.
status: active
maintainer: Ben Briggs
firstRelease: 2015
language: javascript
runtime:
  - node
runtimeMin: node 22
basedOn:
  - postcss
runsAs:
  - local
installMethod: npm install cssnano postcss --save-dev
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-10-16
githubStargazers: 4981
npmWeeklyDownloads: 21890437
contributors: 117
dependentRepos: 2638841
dependentPackages: 13557
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://cssnano.github.io/cssnano/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/cssnano/cssnano
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/cssnano/cssnano/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/cssnano/cssnano/main/LICENSE-MIT
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/cssnano/cssnano
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/cssnano/cssnano/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://cssnano.github.io/cssnano/docs/getting-started/
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/cssnano/cssnano/cssnano@9.9.0/packages/cssnano/package.json
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://cssnano.github.io/cssnano/docs/getting-started/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://cssnano.github.io/cssnano/docs/getting-started/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/cssnano/cssnano
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/cssnano/cssnano/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/cssnano/cssnano/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/cssnano/cssnano/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/cssnano/cssnano
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/cssnano/cssnano/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/cssnano
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/cssnano
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/cssnano
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/cssnano/cssnano/blob/main/README.md
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

cssnano is a CSS minifier built on the PostCSS ecosystem. It runs as a PostCSS plugin, so it is installed with npm alongside PostCSS. Its default preset applies safe transforms, and its advanced preset applies more aggressive ones. The [getting-started guide](https://cssnano.github.io/cssnano/docs/getting-started/) recommends running the minifier in the deployment step, so the compressed files are the ones that reach the server or content delivery network.

## Worth knowing

The guide says that in most cases cssnano is not needed on the web server.
