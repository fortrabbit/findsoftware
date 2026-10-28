---
id: mkcert
name: mkcert
urls:
  repository: https://github.com/FiloSottile/mkcert
  docs: https://github.com/FiloSottile/mkcert/blob/master/README.md
category:
  - dev-tool
description: Command-line tool that creates locally trusted development certificates and installs a local certificate authority in the system trust store.
status: stub
maintainer: The mkcert Authors
maintainerType: community
firstRelease: 2018
language: go
runtime:
  - binary
runsAs:
  - local
installMethod: "Homebrew: brew install mkcert"
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2022-04-26
githubStargazers: 59795
contributors: 37
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/FiloSottile/mkcert
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/FiloSottile/mkcert/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/FiloSottile/mkcert/releases
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/FiloSottile/mkcert
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/FiloSottile/mkcert/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/FiloSottile/mkcert
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/FiloSottile/mkcert/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/FiloSottile/mkcert/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/FiloSottile/mkcert/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/FiloSottile/mkcert
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/FiloSottile/mkcert/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

mkcert is a Go command that creates certificates for the host names a developer passes to it, and makes them trusted on the local machine. It installs a local certificate authority in the system trust store and signs the certificates with it. Install routes are Homebrew, MacPorts, Chocolatey, Scoop, the Arch Linux package, a prebuilt binary or a build from source with go build. The copyright line names The mkcert Authors, and the source is on GitHub.

## Worth knowing

The README says mkcert is meant for development purposes, not production, and says it should not be used on end users' machines. On Linux, certutil must be installed first.
