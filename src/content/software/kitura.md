---
id: kitura
name: Kitura
urls:
  home: https://www.kitura.dev/
  repository: https://github.com/Kitura/Kitura
  docs: https://www.kitura.dev/getting-started/
category:
  - framework
  - web-server
description: Swift web framework and HTTP server for building web applications and REST APIs.
status: stub
maintainer: IBM Corporation
maintainerType: company
firstRelease: 2016
language: swift
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - sqlite
  - mongodb
templating: stencil
runsAs:
  - always-on
installMethod: kitura CLI (brew install kitura), or a Swift Package Manager dependency
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2022-10-07
githubStargazers: 7582
contributors: 66
social:
  forum: https://forums.swift.org/c/related-projects/kitura
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.kitura.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/Kitura/Kitura
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.kitura.dev/getting-started/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/Kitura/Kitura/master/Sources/Kitura/Kitura.swift
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/Kitura/Kitura
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.kitura.dev/docs/deploying/docker/
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/Kitura/Kitura/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.kitura.dev/docs/getting-started/create-server-cli/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.kitura.dev/docs/getting-started/create-server-spm/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.kitura.dev/docs/deploying/docker/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.kitura.dev/docs/getting-started/hello-world/
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.kitura.dev/docs/databases/what-are-databases/
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.kitura.dev/docs/databases/what-are-databases/
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.kitura.dev/docs/databases/what-are-databases/
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.kitura.dev/docs/databases/what-are-databases/
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.kitura.dev/docs/web/stencil/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/Kitura/Kitura
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/Kitura/Kitura/master/LICENSE.txt
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/Kitura/Kitura/git/refs/tags/3.0.1
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/Kitura/Kitura/commits/b40b156480c2f4b8aef72ae26e9d40e8e7f72c0b
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/Kitura/Kitura/commits/60334372274bd78522af7d488d6eb0920a591a8d
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/Kitura/Kitura
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/Kitura/Kitura/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kitura is a web framework and HTTP server for server-side Swift. A project is set up with the Kitura command-line tool or as a Swift Package Manager dependency. The server is an executable that adds routes and starts listening on a port, and the Kitura guides cover Stencil templating for pages.

Kitura's documentation lists PostgreSQL, MySQL and SQLite as supported SQL databases, and MongoDB through a third-party package. Swift-NIO is the default network engine. The Docker guide separates the Swift compiler image from the run image, because a compiled Kitura application does not need the compiler to run.

## Worth knowing

The homepage describes Kitura as now run by its community. The copyright line in the source names IBM Corporation.
