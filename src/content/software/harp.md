---
id: harp
name: Harp
urls:
  home: https://harp.sh
  repository: https://github.com/sintaxi/harp
  docs: https://harp.sh/docs/quick-start
category:
  - ssg
description: Node.js static web server that serves Markdown, EJS, Jade, Sass and other source files as HTML, CSS and JavaScript, and compiles them into a static folder.
status: active
maintainer: sintaxi
maintainerType: individual
firstRelease: 2012
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 18
contentStore:
  - flat-file
templating: ejs, jade
runsAs:
  - static
  - always-on
  - local
renderingModes:
  - static
  - server
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-06
githubStargazers: 4996
npmWeeklyDownloads: 270
contributors: 30
dependentRepos: 1109
dependentPackages: 82
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://harp.sh
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/sintaxi/harp
    checkedAt: 2026-10-21
  - field: urls
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/harp
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/sintaxi/harp/blob/master/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/sintaxi/harp
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/sintaxi/harp/blob/master/README.md
    checkedAt: 2026-10-21
  - field: category
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: runtime
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/harp/latest
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: contentStore
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: templating
    url: https://harp.sh/docs
    checkedAt: 2026-10-21
  - field: templating
    url: https://harp.sh/docs
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://harp.sh/docs/quick-start
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://harp.sh/docs
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/sintaxi/harp/blob/master/README.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/harp/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/harp
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://github.com/sintaxi/harp
    checkedAt: 2026-10-21
  - field: contributors
    url: https://github.com/sintaxi/harp
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/harp
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/harp
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/harp
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Harp is a static web server with built-in preprocessing. It compiles Markdown, EJS, Jade, LESS, Sass, Stylus and CoffeeScript into HTML, CSS and JavaScript as the browser needs them. Layouts and partials are supported, and metadata is read from a _data.json file. The same tool can write the compiled output to a flat folder for any static host, or run as the web server itself.

The [quick start](https://harp.sh/docs/quick-start) covers installing the npm package, serving a project and compiling it.

## Worth knowing

Harp does not reload the browser when a file changes. The quick start says to refresh the page by hand.

The [Harp Platform](https://harp.sh/docs/deployment/harp-platform) is a hosted service for Harp apps through Dropbox.
