---
id: inbucket
name: Inbucket
urls:
  home: https://inbucket.org
  repository: https://github.com/inbucket/inbucket
category:
  - dev-tool
  - email
description: Email testing server that accepts mail for any address over SMTP and shows it in a web interface, with REST and POP3 access.
status: active
maintainer: James Hillyerd
maintainerType: individual
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - binary
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT, MIT License
currentMajor: "3"
latestReleaseDate: 2026-10-10
githubStargazers: 2311
contributors: 29
social:
  forum: https://github.com/inbucket/inbucket/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://inbucket.org
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/inbucket/inbucket
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/inbucket/inbucket/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/inbucket/inbucket/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://inbucket.org/news/2014/04/one-point-oh.html
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/inbucket/inbucket
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/inbucket/inbucket/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/inbucket/inbucket/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/inbucket/inbucket/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://inbucket.org
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://inbucket.org
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/inbucket/inbucket/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://inbucket.org
    checkedAt: 2026-11-03
  - field: category
    url: https://inbucket.org
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/inbucket/inbucket/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/inbucket/inbucket
    checkedAt: 2026-11-03
  - field: license
    url: https://inbucket.org
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/inbucket/inbucket/releases/tag/v3.2.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/inbucket/inbucket/releases/tag/v3.2.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/inbucket/inbucket
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/inbucket/inbucket
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Inbucket is an email testing server. It accepts mail for any address over SMTP, stores each message as a file on disk, and shows the messages in a web interface with REST and POP3 access. Applications send their mail to its built-in SMTP server, and developers read the result in the browser. It is written in Go, and the project's pages describe running it as a daemon, from a compiled binary or from a Docker image.

## Worth knowing

The project calls itself an [email testing application](https://inbucket.org), written for web developers who want to see the emailed output of their applications.
