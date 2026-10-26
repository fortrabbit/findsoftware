---
id: uadmin
name: uAdmin
urls:
  repository: https://github.com/uadmin/uadmin
  docs: https://uadmin-docs.readthedocs.io/en/latest/
category:
  - framework
description: Go web framework that builds a database-backed admin interface from the models an application registers.
status: stub
maintainer: IntegrityNet Solutions and Services
maintainerType: individual
firstRelease: 2019
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
i18n: yes
runsAs:
  - always-on
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-13
githubStargazers: 356
contributors: 8
social:
  x: https://twitter.com/uAdminio
  forum: https://gophers.slack.com/messages/uadmin/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/uadmin/uadmin
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/uadmin/uadmin/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/uadmin/uadmin
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/uadmin/uadmin/blob/master/db.go
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/uadmin/uadmin/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/uadmin/uadmin/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/uadmin/uadmin/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/uadmin/uadmin/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/uadmin/uadmin/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/uadmin/uadmin/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/uadmin/uadmin
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/uadmin/uadmin/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

uAdmin is a Go web framework whose admin interface is generated from the models an application registers with it. The application calls the framework's register and server functions, and the admin, with its dashboard, lists and forms, is served by the application's own binary. The framework's source names SQLite, MySQL and PostgreSQL as database types.

## Worth knowing

The domain the project's homepage named, uadmin.io, no longer serves the project. Its HTTPS address fails the TLS handshake, and the HTTP address shows a parking page. No homepage is recorded, and the record stays a stub until the project publishes a live site or an announcement.
