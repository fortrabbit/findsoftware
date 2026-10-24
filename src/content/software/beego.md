---
id: beego
name: Beego
urls:
  repository: https://github.com/beego/beego
  docs: https://github.com/beego/beego-doc
category:
  - framework
description: Go web framework for RESTful APIs, web apps and backend services, with an ORM, session, cache and task modules.
status: stub
maintainer: Beego
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - sqlite
  - postgres
adminUi: true
templating: go templates
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: go get, then go build
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-04-03
githubStargazers: 32429
contributors: 348
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: status
    url: https://beego.wiki/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/beego/beego
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/beego/beego/blob/master/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://raw.githubusercontent.com/beego/beego/master/LICENSE
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/beego/beego
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/beego/beego/blob/master/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/beego/beego/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/beego/beego/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/beego/beego-doc/blob/main/docs/en-US/developing/bee/README.md
    checkedAt: 2026-10-24
  - field: renderingModes
    url: https://github.com/beego/beego-doc/blob/main/docs/en-US/developing/web/README.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/beego/beego-doc/blob/main/docs/en-US/developing/web/grace.md
    checkedAt: 2026-10-24
  - field: databases
    url: https://github.com/beego/beego-doc/blob/main/docs/en-US/developing/orm/db.md
    checkedAt: 2026-10-24
  - field: i18n
    url: https://github.com/beego/beego-doc/blob/main/docs/en-US/developing/i18n/README.md
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://github.com/beego/beego-doc/blob/main/docs/en-US/developing/web/admin/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://raw.githubusercontent.com/beego/beego/master/LICENSE
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://github.com/beego/beego/blob/master/README.md
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/beego/beego/releases
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/beego/beego/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/beego/beego/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/beego/beego
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/beego/beego/contributors?per_page=1
    checkedAt: 2026-10-24
  - field: templating
    url: https://github.com/beego/beego-doc/blob/main/docs/en-US/developing/web/view/README.md
    checkedAt: 2026-10-24
figure:
  emoji: 🧱
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: Go · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Beego is a web framework for Go that builds RESTful APIs, web apps and backend services. Its modules cover MVC routing, an ORM with drivers for MySQL, PostgreSQL, SQLite and TiDB, sessions, caching, background tasks, i18n and a monitoring dashboard. Views render through Go's built-in html/template package. An application is a Go program that imports the framework's web package and starts its own HTTP server, as the [quick start in the README](https://github.com/beego/beego/blob/master/README.md) shows.

## Worth knowing

The documentation source is in the [beego-doc repository](https://github.com/beego/beego-doc), because the documentation site named in the README is listed as unavailable. The graceful restart feature lets old processes keep serving earlier connections while a new process starts, so hosting needs a long-running process rather than static files.
