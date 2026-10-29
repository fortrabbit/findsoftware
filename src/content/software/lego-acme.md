---
id: lego-acme
name: lego
urls:
  home: https://go-acme.github.io/lego/
  repository: https://github.com/go-acme/lego
  docs: https://go-acme.github.io/lego/install/
category:
  - web-server
description: ACME client and library written in Go that obtains, renews and revokes TLS certificates from Let's Encrypt and other ACME servers.
status: active
maintainer: Ludovic Fernandez
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - scheduled
installMethod: binary download from the release page
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-28
githubStargazers: 9983
contributors: 424
social:
  forum: https://github.com/go-acme/lego/discussions
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://go-acme.github.io/lego/
    checkedAt: 2026-10-29
  - field: urls
    url: https://go-acme.github.io/lego/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/go-acme/lego
    checkedAt: 2026-10-29
  - field: urls
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/go-acme/lego/main/LICENSE
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/go-acme/lego
    checkedAt: 2026-10-29
  - field: runtime
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: category
    url: https://go-acme.github.io/lego/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/go-acme/lego/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/go-acme/lego/releases/tag/v5.6.0
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://github.com/go-acme/lego/releases/tag/v0.1.0
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/go-acme/lego
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/go-acme/lego/main/LICENSE
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/install/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://go-acme.github.io/lego/library/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/go-acme/lego
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/go-acme/lego/contributors
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://go-acme.github.io/lego/advanced/tips/
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

lego is an ACME client and library written in Go. It obtains, renews and revokes certificates from ACME servers such as Let's Encrypt and ZeroSSL, runs as a command line tool, and offers a Go library for programs that call the same client. Users download a binary, pull the goacme/lego Docker image, install a package or run `go install` against the source. The project maintains only the AUR and Snap packages, and the other packages come from their communities. The tips page describes renewal from a cron job or a systemd timer.

## Worth knowing

The project lists the DNS-01, HTTP-01, TLS-ALPN-01 and DNS-PERSIST-01 challenges and more than 200 DNS providers. Building from source needs Go 1.25 or newer. The project asks for support through a sponsorship page and a donate link.
