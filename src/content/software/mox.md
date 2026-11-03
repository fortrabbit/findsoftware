---
id: mox
name: Mox
urls:
  home: https://www.xmox.nl
  repository: https://github.com/mjl-/mox
  docs: https://www.xmox.nl/install/
category:
  - email
description: Full-featured mail server for sending and receiving email, with IMAP, SMTP, webmail and an HTTP/JSON webapi.
status: active
maintainer: Mechiel Lukkien
maintainerType: individual
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - flat-file
adminUi: true
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: MIT, MPL-2.0
currentMajor: "0"
latestReleaseDate: 2026-08-19
githubStargazers: 5928
contributors: 26
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.xmox.nl
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/mjl-/mox
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.xmox.nl/install/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/mjl-/mox/blob/main/LICENSE.MIT
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/mjl-/mox/blob/main/LICENSE.MIT
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/mjl-/mox
    checkedAt: 2026-11-03
  - field: category
    url: https://www.xmox.nl
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.xmox.nl/install/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.xmox.nl/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.xmox.nl/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.xmox.nl/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.xmox.nl/install/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.xmox.nl/install/
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://www.xmox.nl/faq/
    checkedAt: 2026-11-03
  - field: license
    url: https://www.xmox.nl
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/mjl-/mox/blob/main/LICENSE.MPLv2.0
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.xmox.nl
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/mjl-/mox
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/mjl-/mox
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/mjl-/mox/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/mjl-/mox/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/mjl-/mox/releases
    checkedAt: 2026-11-03
ai: authored
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Mox is a mail server that sends and receives email over SMTP and IMAP4, with a webmail interface and an admin web interface. It is written in Go and ships as a single binary that the install guide runs as a service on Linux. Applications can send transactional mail through the HTTP/JSON webapi.

## Worth knowing

The source is MIT-licensed. The Public Suffix List it bundles is under MPL-2.0. Stored messages are individual files, with an embedded index database beside them.
