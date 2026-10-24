---
id: sitegen
name: SiteGen
urls:
  home: https://altlimit.github.io/sitegen/
  repository: https://github.com/altlimit/sitegen
  docs: https://github.com/altlimit/sitegen/blob/master/README.md
category:
  - ssg
  - cms
description: Go static site generator with incremental builds, a live-reload development server and Go templates.
status: active
maintainer: Faisal Raja
firstRelease: 2026
language: go
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
adminUi: true
templating: go-templates
runsAs:
  - static
renderingModes:
  - static
installMethod: alt install altlimit/sitegen
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-07-02
githubStargazers: 8
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://altlimit.github.io/sitegen/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/altlimit/sitegen
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/altlimit/sitegen
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/docs/CMS.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/altlimit/sitegen/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/altlimit/sitegen/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/altlimit/sitegen/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/altlimit/sitegen/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/altlimit/sitegen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/altlimit/sitegen/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

SiteGen is a single Go binary that builds a site from templates written with Go's html/template package and writes the result to a public directory. The build flags clean that directory first and minify the HTML, JavaScript and CSS output.

The built-in editing UI at /__cms edits the same source files the build reads, with no database and no separate content store. It is available only in serve mode.

## Worth knowing

The -share option relays the development server through the sitegen.dev server, so a public link to a local site depends on that service and runs only with the development server.
