---
id: gorm
name: GORM
urls:
  home: https://gorm.io
  repository: https://github.com/go-gorm/gorm
  docs: https://gorm.io/docs/
category:
  - library
description: Go ORM library that maps structs to database tables, with associations, hooks, transactions and auto migrations.
status: active
maintainer: Jinzhu
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
  - sqlserver
  - oracle
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-06-25
githubStargazers: 39988
contributors: 426
social:
  x: https://twitter.com/zhangjinzhu
  forum: https://gitter.im/jinzhu/gorm
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://gorm.io/
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/go-gorm/gorm
    checkedAt: 2026-11-09
  - field: urls
    url: https://gorm.io/docs/
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/go-gorm/gorm/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/go-gorm/gorm
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/go-gorm/gorm/blob/master/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/go-gorm/gorm/blob/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://gorm.io/
    checkedAt: 2026-11-09
  - field: databases
    url: https://gorm.io/docs/connecting_to_the_database.html
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/go-gorm/gorm
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/go-gorm/gorm/tags
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/go-gorm/gorm/releases
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/go-gorm/gorm/releases
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/go-gorm/gorm
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/go-gorm/gorm/contributors?per_page=1
    checkedAt: 2026-11-09
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

GORM is a Go ORM library that maps structs to database tables and provides a query API over them. It covers associations (has one, has many, belongs to and many to many), eager loading with `Preload` and `Joins`, transactions with save points, hooks, batch inserts and auto migrations. The project documents a traditional API and a generics API for type-safe queries and operations. Each database is reached through its own driver module, passed to `gorm.Open` with the connection string.
