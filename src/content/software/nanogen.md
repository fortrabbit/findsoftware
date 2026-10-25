---
id: nanogen
name: Nanogen
urls:
  home: https://doug2k1.github.io/nanogen
  repository: https://github.com/doug2k1/nanogen
  docs: https://doug2k1.github.io/nanogen/docs/
category:
  - ssg
description: Static site generator in Node.js that builds HTML pages from EJS and Markdown files.
status: active
maintainer: Douglas Matoso
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 20
templating: ejs
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: npm i -g nanogen
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-01-21
githubStargazers: 204
npmWeeklyDownloads: 1
contributors: 7
dependentRepos: 26
dependentPackages: 4
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://api.github.com/repos/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: urls
    url: https://doug2k1.github.io/nanogen/docs/
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/nanogen
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/doug2k1/nanogen/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/doug2k1/nanogen/languages
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/nanogen/latest
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://doug2k1.github.io/nanogen/docs/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://doug2k1.github.io/nanogen/docs/
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://doug2k1.github.io/nanogen/docs/
    checkedAt: 2026-10-21
  - field: templating
    url: https://github.com/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/doug2k1/nanogen/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/nanogen/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/doug2k1/nanogen/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/doug2k1/nanogen
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/doug2k1/nanogen/contributors?per_page=1&anon=true
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/nanogen
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nanogen
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nanogen
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Nanogen is a Node.js command line tool that turns a folder of EJS, Markdown and HTML pages into a static website. Pages are combined with EJS layouts and partials, and each source file becomes an `index.html` in a folder of its own name. Site-wide data comes from a configuration file, and each page can carry its own YAML front matter.

The [documentation](https://doug2k1.github.io/nanogen/docs/) describes a development server that rebuilds the site on every change. The output folder is cleaned and regenerated on each build, so nothing should be placed there by hand.
