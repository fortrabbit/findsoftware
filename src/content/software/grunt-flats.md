---
id: grunt-flats
name: grunt-flats
urls:
  repository: https://github.com/adamduncan/grunt-flats
  docs: https://github.com/adamduncan/grunt-flats/blob/master/README.md
category:
  - ssg
description: Grunt task that renders static HTML pages from Mustache-style partials and layouts.
status: stub
maintainer: Adam Duncan
maintainerType: individual
firstRelease: 2014
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 0.10
basedOn:
  - grunt
templating: mustache
runsAs:
  - static
renderingModes:
  - static
installMethod: npm install --save-dev
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2014-12-15
githubStargazers: 12
npmWeeklyDownloads: 3
contributors: 1
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/adamduncan/grunt-flats
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/adamduncan/grunt-flats/blob/master/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/adamduncan/grunt-flats/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/adamduncan/grunt-flats
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/adamduncan/grunt-flats/blob/master/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://github.com/adamduncan/grunt-flats/blob/master/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/adamduncan/grunt-flats/master/package.json
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://raw.githubusercontent.com/adamduncan/grunt-flats/master/package.json
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://github.com/adamduncan/grunt-flats/blob/master/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://github.com/adamduncan/grunt-flats/blob/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://github.com/adamduncan/grunt-flats/blob/master/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://github.com/adamduncan/grunt-flats/blob/master/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/adamduncan/grunt-flats
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/adamduncan/grunt-flats/master/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/grunt-flats
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/grunt-flats
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/grunt-flats
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/adamduncan/grunt-flats
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/adamduncan/grunt-flats/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/grunt-flats
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

grunt-flats is a Grunt task that renders Mustache-style partials and layouts into static HTML pages. It reads a master page, layouts and partials from a `_templates` folder by default and compiles each layout into a destination directory. Partials can be nested, take their own data object, and carry default values. The task is installed as a development dependency of a project that already uses Grunt and is configured in the Gruntfile under a `flats` key.

## Worth knowing

On each build the task removes every `.html` file from the destination directory, except the master page when it sits there.
