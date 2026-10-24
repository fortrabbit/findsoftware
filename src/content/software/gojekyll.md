---
id: gojekyll
name: Gojekyll
urls:
  repository: https://github.com/osteele/gojekyll
  docs: https://github.com/osteele/gojekyll/blob/main/README.md
category:
  - ssg
description: Partially Jekyll-compatible static site generator written in Go, with build and serve commands and live reload.
status: active
maintainer: Oliver Steele
maintainerType: individual
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - static
templating: liquid
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-02-27
githubStargazers: 393
contributors: 8
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/osteele/gojekyll
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/osteele/gojekyll/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/osteele/gojekyll
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/osteele/gojekyll/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/osteele/gojekyll
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/osteele/gojekyll/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/osteele/gojekyll/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/osteele/gojekyll/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/osteele/gojekyll/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/osteele/gojekyll
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/osteele/gojekyll/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gojekyll is a partially Jekyll-compatible static site generator written in Go. The `build` command writes the site to a static output directory, and `serve` generates pages on the fly without writing files, reloading the browser when files change. Its templates use Liquid. The [README](https://github.com/osteele/gojekyll/blob/main/README.md) says the project implements Jekyll as its documentation describes, without porting Jekyll's source, and lists pagination and the plugin system as missing.

## Worth knowing

Sass handling needs dart-sass on the PATH, and using a theme needs Ruby and bundler.
