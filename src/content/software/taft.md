---
id: taft
name: Taft
urls:
  repository: https://github.com/fitnr/taft
  docs: https://github.com/fitnr/taft/blob/master/README.md
category:
  - ssg
description: Command-line tool and Node.js module that generates static HTML files from Handlebars templates with YAML front matter.
status: active
maintainer: Neil Freeman
maintainerType: individual
firstRelease: 2015
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 10
templating: handlebars
runsAs:
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: GPL-3.0
currentMajor: "0"
latestReleaseDate: 2022-10-23
githubStargazers: 11
npmWeeklyDownloads: 12
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/fitnr/taft
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/fitnr/taft/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://registry.npmjs.org/taft/latest
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fitnr/taft
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/fitnr/taft/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/fitnr/taft/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://registry.npmjs.org/taft/latest
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://registry.npmjs.org/taft/latest
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/fitnr/taft/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/fitnr/taft/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/fitnr/taft/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://registry.npmjs.org/taft/latest
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/fitnr/taft/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/taft
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/fitnr/taft/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/fitnr/taft/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fitnr/taft
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fitnr/taft/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/taft
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Taft builds static HTML files from Handlebars templates. Each page is a Handlebars file that starts with a YAML front matter block, which holds the page's values and can name the layout the page uses. The command-line tool writes the result to standard output, to one output file or to a destination directory, and the project also offers a Node.js API for the same build. The output is plain HTML, so a build can be served by any static web server. Taft is installed with npm, globally or inside a project.
