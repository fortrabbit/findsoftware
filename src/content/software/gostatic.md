---
id: gostatic
name: Gostatic
urls:
  repository: https://github.com/sansolovyov/gostatic
  docs: https://github.com/sansolovyov/gostatic/blob/master/README.md
category:
  - ssg
description: Static site generator written in Go that re-renders only the pages affected by a change, configured through a Makefile-style file.
status: active
maintainer: Alexander Solovyov
maintainerType: individual
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: go templates
runsAs:
  - static
renderingModes:
  - static
installMethod: binary download from the releases page
licenseModel: open-source
license: ISC
currentMajor: "2"
latestReleaseDate: 2023-02-28
githubStargazers: 440
contributors: 22
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/sansolovyov/gostatic
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/sansolovyov/gostatic/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/sansolovyov/gostatic
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/sansolovyov/gostatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/sansolovyov/gostatic
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/sansolovyov/gostatic/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/sansolovyov/gostatic/releases?per_page=100
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/sansolovyov/gostatic/releases?per_page=100
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/sansolovyov/gostatic/releases?per_page=100
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/sansolovyov/gostatic
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/sansolovyov/gostatic/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gostatic is a static site generator written in Go that re-renders only the pages affected by a change. Its configuration uses Makefile-style syntax, its templates are Go templates, and site sources are files in a `src` directory. The [README](https://github.com/sansolovyov/gostatic/blob/master/README.md) describes a single binary with no run-time dependencies, downloaded from the releases page, and gives `go get` as the way to compile it from source.

## Worth knowing

The README also describes an HTTP server and watcher that render changes instantly. The generated content is what gets deployed.
