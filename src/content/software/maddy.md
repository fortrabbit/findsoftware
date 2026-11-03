---
id: maddy
name: Maddy
urls:
  home: https://maddy.email
  repository: https://github.com/foxcpp/maddy
  docs: https://maddy.email
category:
  - email
description: Composable all-in-one mail server that sends and receives SMTP mail, stores it for IMAP access and runs DKIM, SPF, DMARC, DANE and MTA-STS.
status: stub
maintainer: Max Mazurov
maintainerType: individual
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
adminUi: false
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: GPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-10-03
githubStargazers: 6116
contributors: 78
social:
  forum: https://lists.sr.ht/~foxcpp/maddy
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://maddy.email
    checkedAt: 2026-11-03
  - field: urls
    url: https://maddy.email
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/foxcpp/maddy
    checkedAt: 2026-11-03
  - field: urls
    url: https://maddy.email
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/foxcpp/maddy/blob/v0.9.6/maddy.go
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://api.github.com/repos/foxcpp/maddy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/foxcpp/maddy/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/foxcpp/maddy/releases/tag/v0.9.6
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/foxcpp/maddy/releases/tag/v0.9.6
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/foxcpp/maddy/blob/v0.9.6/COPYING
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/foxcpp/maddy/blob/v0.9.6/COPYING
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/foxcpp/maddy
    checkedAt: 2026-11-03
  - field: runtime
    url: https://maddy.email/tutorials/setting-up/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://maddy.email/tutorials/setting-up/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://maddy.email/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://maddy.email/tutorials/setting-up/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://maddy.email/tutorials/building-from-source/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://maddy.email
    checkedAt: 2026-11-03
  - field: databases
    url: https://maddy.email/internals/sqlite/
    checkedAt: 2026-11-03
  - field: databases
    url: https://maddy.email/reference/storage/imapsql/
    checkedAt: 2026-11-03
  - field: category
    url: https://maddy.email
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://maddy.email/faq/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/foxcpp/maddy
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/foxcpp/maddy/contributors?per_page=1
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

Maddy is a mail server written in Go. It sends and accepts mail over SMTP, stores messages for IMAP access, and implements DKIM, SPF, DMARC, DANE and MTA-STS in one daemon. The [setup tutorial](https://maddy.email/tutorials/setting-up/) describes the pre-built tarball, which includes a systemd unit, and the [Docker page](https://maddy.email/docker/) describes the official image. The FAQ compares it with MailCow and Mail-in-a-Box, which bundle other software, where Maddy is one program.

Its own pages show mail submitted to the Submission endpoint by Mailman 3, a mailing list manager, with authentication and TLS. SQLite and PostgreSQL hold the mail index, and LDAP can verify passwords.

## Worth knowing

The README calls IMAP storage beta. The project has no admin web interface and no webmail; the FAQ says administration is done with the command-line utility.
