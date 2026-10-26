---
id: ginrpc
name: ginrpc
urls:
  repository: https://github.com/xxjwxc/ginrpc
category:
  - framework
description: Go library that adds automatic parameter binding and annotation routing to Gin handlers, with Swagger and Markdown doc export.
status: stub
maintainer: xxjwxc
maintainerType: individual
firstRelease: 2019
language: go
runtime:
  - binary
hosting:
  - binary
basedOn:
  - gin
installMethod: go get
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2019-08-05
githubStargazers: 304
contributors: 2
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/xxjwxc/ginrpc
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/xxjwxc/ginrpc
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/xxjwxc/ginrpc/blob/master/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/xxjwxc/ginrpc/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/xxjwxc/ginrpc/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/xxjwxc/ginrpc/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/xxjwxc/ginrpc
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://api.github.com/users/xxjwxc
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://proxy.golang.org/github.com/xxjwxc/ginrpc/@v/list
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://proxy.golang.org/github.com/xxjwxc/ginrpc/@v/v1.0.0.info
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://proxy.golang.org/github.com/xxjwxc/ginrpc/@v/v1.0.0.info
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/xxjwxc/ginrpc
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/xxjwxc/ginrpc/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

ginrpc is a Go library that extends the Gin web framework with automatic parameter binding. Handlers take a Gin context and a request struct, and the library fills the struct from the request before the handler runs. Methods on an object can be registered as routes with annotation comments that set the path and HTTP methods, and the library can export Swagger and Markdown documentation from the same code. A project adds it with go get and registers its routes on a Gin router. The repository is published under the GitHub account xxjwxc.

## Worth knowing

The repository has no GitHub release and no tag. Its only published version is a Go module release from 2019, so the release dates on the record come from the Go module proxy.
