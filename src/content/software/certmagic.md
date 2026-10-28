---
id: certmagic
name: CertMagic
urls:
  repository: https://github.com/caddyserver/certmagic
  docs: https://pkg.go.dev/github.com/caddyserver/certmagic
category:
  - library
  - web-server
description: Go library that obtains and renews TLS certificates from ACME certificate authorities for Go programs.
status: active
maintainer: Matthew Holt
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go-get
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-30
githubStargazers: 5616
contributors: 77
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/caddyserver/certmagic
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/caddyserver/certmagic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/caddyserver/certmagic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/caddyserver/certmagic/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/caddyserver/certmagic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/caddyserver/certmagic
    checkedAt: 2026-10-28
  - field: runtime
    url: https://api.github.com/repos/caddyserver/certmagic
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/caddyserver/certmagic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/caddyserver/certmagic
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/caddyserver/certmagic/blob/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/caddyserver/certmagic/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/caddyserver/certmagic/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/caddyserver/certmagic
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/caddyserver/certmagic/contributors?per_page=1
    checkedAt: 2026-10-28
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

CertMagic is a Go library that obtains and renews TLS certificates from ACME certificate authorities for Go programs. The Caddy web server uses the same library for its automatic HTTPS, and the README describes it as the library Caddy uses.

Its author is Matthew Holt, and the project is licensed under Apache-2.0. It is installed with go get and has no process of its own: it runs inside the Go program that imports it.

## Worth knowing

Because CertMagic is a library, a site served through it runs as the Go program that embeds it, not as a separate service. The module file names a newer Go toolchain than the README's requirements section does.
