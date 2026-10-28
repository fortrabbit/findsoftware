---
id: lando
name: Lando
urls:
  home: https://lando.dev
  repository: https://github.com/lando/lando
  docs: https://docs.lando.dev/getting-started/
category:
  - dev-tool
description: Free, open-source local development tool that runs Docker-based development environments for web projects from a Landofile.
status: active
maintainer: Lando Alliance
maintainerType: foundation
firstRelease: 2020
hqCountry: US
language: javascript
runtime:
  - node
runtimeMin: node 20
runsAs:
  - local
installMethod: setup script for macOS, Linux and WSL (curl piped to bash)
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-08-20
githubStargazers: 4246
contributors: 185
social:
  x: https://twitter.com/devwithlando
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://lando.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/lando/lando
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.lando.dev/getting-started/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/lando/lando/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://lando.dev/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://docs.lando.dev/terms
    checkedAt: 2026-10-28
  - field: category
    url: https://docs.lando.dev/getting-started/
    checkedAt: 2026-10-28
  - field: language
    url: https://raw.githubusercontent.com/lando/core/v3.26.9/package.json
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/lando/core/v3.26.9/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/lando/core/v3.26.9/package.json
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.lando.dev/getting-started/requirements.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.lando.dev/install/macos.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.lando.dev/install/windows.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.lando.dev/install/source.html
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/lando/lando/main/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/lando/lando/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/lando/lando/releases?per_page=100
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/lando/lando/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/lando/lando/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/lando/lando
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/lando/lando/contributors?per_page=1
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
packagistDownloads: null
---

Lando is a free, open-source local development tool for web projects. It runs on the developer's machine and is built on Docker container technology, so Docker Engine must be installed and running. The installers set up Docker when it is missing. The project is run by the Lando Alliance, a nonprofit organization based in Washington, D.C.

Lando installs with a setup script on macOS, Linux and WSL, with a PowerShell script on Windows, or from source. The CLI is written in JavaScript for Node.js. The repository lando/lando holds the releases; its CLI source sits in the lando/core submodule.

## Worth knowing

Lando drives Docker rather than replacing it, so Docker's own requirements apply on each operating system.
