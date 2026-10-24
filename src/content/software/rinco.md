---
id: rinco
name: Rinco
urls:
  home: https://rincojs.github.io/rinco-sg/
  repository: https://github.com/rincojs/rinco-sg
category:
  - ssg
description: Node.js static website generator with its own template tags, data files, a development server and an optional CDNJS library picker.
status: stub
maintainer: Allan Esquina
firstRelease: 2015
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 0.8
templating: mustache
runsAs:
  - static
renderingModes:
  - static
installMethod: npm install -g rinco
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2016-06-17
githubStargazers: 17
npmWeeklyDownloads: 10
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/rincojs/rinco-sg
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/rincojs/rinco-sg/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/rincojs/rinco-sg
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/rincojs/rinco-sg/blob/master/package.json
    checkedAt: 2026-10-23
  - field: runtime
    url: https://registry.npmjs.org/rinco/latest
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://registry.npmjs.org/rinco/latest
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/rincojs/rinco-sg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/rincojs/rinco-sg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/rincojs/rinco-sg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/rincojs/rinco-sg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/rincojs/rinco-sg
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/rincojs/rinco-sg/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/rinco
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/rincojs/rinco-sg/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/rinco
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/rincojs/rinco-sg
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/rincojs/rinco-sg/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/rinco
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Rinco is a static website generator for Node.js. Pages are written as HTML or Markdown files in a templates folder, and files whose names start with an underscore are used as partials and not written to the output. Rinco's own tags include the includes, data imports and inline scripts that fill a page, and the page data is read with mustache syntax.

The r-css and r-js tags compile Sass, Less, Stylus, CoffeeScript and ES6 files into the page, in the order they appear. The rinco server command runs a development server on port 3000 by default, and rinco build writes the static files to a build folder.
