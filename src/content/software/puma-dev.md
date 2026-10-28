---
id: puma-dev
name: puma-dev
urls:
  home: https://puma.dev/
  repository: https://github.com/puma/puma-dev
  docs: https://github.com/puma/puma-dev/blob/master/README.md
category:
  - dev-tool
description: Zero-config development server for macOS and Linux that starts Rack and Rails apps on demand under local domains such as .test, using Puma.
status: active
maintainer: Evan Phoenix
firstRelease: 2016
language: go
runtime:
  - binary
runsAs:
  - local
installMethod: brew install puma/puma/puma-dev
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2023-02-25
githubStargazers: 1807
contributors: 44
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://puma.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/puma/puma-dev
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/puma/puma-dev/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/puma/puma-dev/master/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/puma/puma-dev/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/puma/puma-dev
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/puma/puma-dev/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/puma/puma-dev/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/puma/puma-dev/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/puma/puma-dev
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/puma/puma-dev/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/puma/puma-dev/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/puma/puma-dev/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/puma/puma-dev/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/puma/puma-dev
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/puma/puma-dev/contributors
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

puma-dev is a development server for macOS and Linux that runs Rack and Rails apps under local domains, such as `.test`, and serves them over HTTPS. An app is added by symlinking its directory into the puma-dev directory, and the server starts it on demand and shuts it down when it is idle. It is installed with Homebrew from a tap, or from a binary the project publishes, and its source is in Go.

Apps are reached through their names as subdomains, and a proxy entry can point a name at another port or host. On Linux, the root certificate and name resolution need extra setup steps that the README describes.

## Worth knowing

On Linux the server does not start in the background by itself. The apps it serves each need the puma gem in their Gemfile.
