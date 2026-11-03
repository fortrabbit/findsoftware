---
id: mailslurper
name: MailSlurper
urls:
  repository: https://github.com/mailslurper/mailslurper
category:
  - dev-tool
  - email
description: Small SMTP mail server that captures test email into a database and shows it in a web interface.
status: active
maintainer: Adam Presley
maintainerType: individual
firstRelease: 2015
language: go
databases:
  - sqlite
  - mysql
  - sqlserver
adminUi: true
runsAs:
  - local
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-08-03
githubStargazers: 1511
contributors: 16
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/mailslurper/mailslurper
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/mailslurper/mailslurper/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/mailslurper/mailslurper/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/mailslurper/mailslurper/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/mailslurper/mailslurper/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mailslurper/mailslurper/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mailslurper/mailslurper/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/mailslurper/mailslurper/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/mailslurper/mailslurper
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/mailslurper/mailslurper/releases/tag/release-1.15.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/mailslurper/mailslurper/releases/tag/release-1.15.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/mailslurper/mailslurper/releases/tag/release-1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/mailslurper/mailslurper
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/mailslurper/mailslurper
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://api.github.com/repos/mailslurper/mailslurper
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/mailslurper/mailslurper/blob/master/pkg/mailslurper/StorageType.go
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://api.github.com/repos/mailslurper/mailslurper
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

MailSlurper is a small SMTP mail server that captures the mail applications send to it, stores it in a database and shows it in a web interface. The repository describes it as a local, web-based mail server application. It is written in Go and can run as a [Docker container](https://github.com/mailslurper/mailslurper/blob/master/README.md) or be compiled from source. Its default configuration stores captured mail in SQLite, and its source also supports MySQL and Microsoft SQL Server.
