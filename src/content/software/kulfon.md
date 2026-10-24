---
id: kulfon
name: Kulfon
urls:
  repository: https://github.com/kulfonjs/kulfon
category:
  - ssg
description: JavaScript static site generator that builds HTML pages from Nunjucks templates and Markdown or Org Mode content.
status: stub
maintainer: Zaiste
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 12
templating: nunjucks
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: npm install -g
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2020-07-16
githubStargazers: 118
npmWeeklyDownloads: 37
contributors: 3
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: status
    url: https://kulfon.org/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/kulfonjs/kulfon
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/package.json
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/kulfonjs/kulfon
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/package.json
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/package.json
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://registry.npmjs.org/kulfon/latest
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/kulfonjs/kulfon/master/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/kulfon
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/kulfon/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/kulfon
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/kulfonjs/kulfon
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/kulfonjs/kulfon/contributors?per_page=1
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/kulfon
    checkedAt: 2026-10-22
ai: authored
packagistDownloads: null
---

Kulfon is a JavaScript static site generator, installed as a single command with npm. It combines data sources with templates to produce HTML pages, and it supports Nunjucks templates and Org Mode content. The kulfon serve command starts a local server, and the build writes a public directory of compiled content.

The package has a deploy command that copies the public directory to a server over rsync and SSH, using a server and path set in config.yml.

## Worth knowing

The README describes the software as under active development and not feature complete or ready for consumption by anyone other than software developers. The project's own site does not answer, so its pages are not described here. The repository moved from the zaiste account to kulfonjs.
