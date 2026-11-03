---
id: smtp4dev
name: smtp4dev
urls:
  repository: https://github.com/rnwood/smtp4dev
  docs: https://github.com/rnwood/smtp4dev/blob/master/docs/README.md
category:
  - dev-tool
  - email
description: Fake SMTP email server for development and testing, with a web interface, IMAP and POP3 access and an API.
status: active
maintainer: smtp4dev project contributors
maintainerType: community
firstRelease: 2017
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
contentStore:
  - database
adminUi: true
headlessApi:
  - rest
runsAs:
  - local
  - always-on
installMethod: winget
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-03-03
githubStargazers: 4018
contributors: 30
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/rnwood/smtp4dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/rnwood/smtp4dev/blob/master/docs/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/rnwood/smtp4dev/releases/tag/v2.0.10
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/rnwood/smtp4dev/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/rnwood/smtp4dev/languages
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/README.md
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://github.com/rnwood/smtp4dev/blob/3.15.0/docs/Installation.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/rnwood/smtp4dev/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/rnwood/smtp4dev/releases/tag/3.15.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/rnwood/smtp4dev/releases/tag/3.15.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/rnwood/smtp4dev
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/rnwood/smtp4dev
    checkedAt: 2026-11-03
ai: authored
databases: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

smtp4dev is a fake SMTP server for development and testing. Applications are configured to send mail to it over SMTP, and the messages appear in a web interface where they can be inspected, composed, relayed or deleted. IMAP and POP3 access lets mail clients read the stored messages, and a REST API documented with OpenAPI lets automated tests and external applications work with them. It runs on Windows, Linux and Mac OS X on .NET and is installed with winget, Docker, the dotnet global tool or a downloaded binary, and the installation guide also covers running it as a Windows service. The README compares it with MailHog and MailDev, among other fake SMTP servers.

## Worth knowing

The Docker image publishes the web interface and the SMTP port on the host, and the project's Docker security guidelines warn that an instance can be exposed to the public by accident.
