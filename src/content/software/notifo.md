---
id: notifo
name: Notifo
urls:
  home: https://notifo.io
  repository: https://github.com/notifo-io/notifo
  docs: https://github.com/notifo-io/notifo/blob/main/docs/self-hosting.md
category:
  - email
description: Self-hostable multi-channel notification service that delivers events from an application's API to users by email, SMS, push, messaging and web.
status: active
maintainer: Qaisar Ahmad & Sebastian Stehle
maintainerType: individual
firstRelease: 2022
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
databases:
  - mongodb
  - postgres
  - mysql
  - sqlserver
adminUi: true
headlessApi:
  - rest
templating: mjml, liquid
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-11-30
githubStargazers: 883
contributors: 11
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://notifo.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/notifo-io/notifo
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/notifo-io/notifo/blob/main/docs/self-hosting.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/notifo-io/notifo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/notifo-io/notifo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/notifo-io/notifo/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/notifo-io/notifo
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/notifo-io/notifo/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/notifo-io/notifo
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/notifo-io/notifo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/notifo-io/notifo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/notifo-io/notifo/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/notifo-io/notifo/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/notifo-io/notifo/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/notifo-io/notifo
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/notifo-io/notifo/contributors
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/notifo-io/notifo/blob/main/docs/self-hosting.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/notifo-io/notifo/blob/main/docs/self-hosting.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/notifo-io/notifo/blob/main/README.md
    checkedAt: 2026-11-03
  - field: templating
    url: https://github.com/notifo-io/notifo/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/notifo-io/notifo/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/notifo-io/notifo/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Notifo is a notification service that an application calls through its REST API to create events for users. It delivers notifications through several channels, among them email, SMS, mobile push, messaging apps, web push and an HTTP webhook. An embeddable JavaScript SDK adds a notification overlay to a web application. The project ships as a Docker image, and the [self-hosting guide](https://github.com/notifo-io/notifo/blob/main/docs/self-hosting.md) covers the setup.

## Worth knowing

The software needs one of four databases: MongoDB, PostgreSQL, MySQL or SQL Server. A domain with TLS is effectively required, because web push and the SDK need a secure context. A hosted version runs at app.notifo.io, which the self-hosting guide recommends trying first.
