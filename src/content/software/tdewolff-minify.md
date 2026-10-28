---
id: tdewolff-minify
name: minify
urls:
  home: https://go.tacodewolff.nl/minify
  repository: https://github.com/tdewolff/minify
  docs: https://github.com/tdewolff/minify/blob/master/README.md
category:
  - build-tool
description: Go library and command-line tool that minifies HTML, CSS, JavaScript, JSON, SVG and XML.
status: active
maintainer: Taco de Wolff
maintainerType: individual
firstRelease: 2015
language: go
runsAs:
  - local
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-26
githubStargazers: 4149
contributors: 51
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://go.tacodewolff.nl/minify
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/tdewolff/minify
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/tdewolff/minify/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/tdewolff/minify/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/tdewolff/minify/blob/v2.24.24/cmd/minify/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/tdewolff/minify
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/tdewolff/minify
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/tdewolff/minify/v2.24.24/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/v2.24.24/cmd/minify/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/v2.24.24/cmd/minify/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/v2.24.24/cmd/minify/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/v2.24.24/cmd/minify/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tdewolff/minify/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/tdewolff/minify/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/tdewolff/minify/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/tdewolff/minify/releases/latest
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/tdewolff/minify/v2.24.24/LICENSE
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/tdewolff/minify
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/tdewolff/minify/contributors?per_page=1
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
npmWeeklyDownloads: null
---

minify is a Go library and command-line tool that minifies HTML, CSS, JavaScript, JSON, SVG and XML. The library associates media types with minifier functions, so CSS and JavaScript embedded in an HTML file are minified along with it, and a user can add minifiers for other types. The command-line tool is a separate build of the same library, installed through go install, a prebuilt binary, Homebrew, apt, scoop or Docker. Python and JavaScript bindings are published as separate packages on PyPI and npm.

## Worth knowing

The library includes HTTP middleware that minifies responses as they are served, based on the Content-Type header or the file extension. The README says these results should preferably be cached, because the processing happens on the fly for each request.
