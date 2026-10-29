---
id: granian
name: Granian
urls:
  repository: https://github.com/emmett-framework/granian
category:
  - web-server
description: Rust HTTP server that serves Python applications written to the ASGI, RSGI and WSGI interfaces.
status: active
maintainer: Giovanni Barillari
maintainerType: individual
firstRelease: 2022
language: rust
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
runsAs:
  - always-on
installMethod: pip (PyPI package granian)
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2026-10-28
githubStargazers: 5758
contributors: 55
dependentRepos: 45
dependentPackages: 5
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/README.md
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/emmett-framework/granian
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/LICENSE
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/emmett-framework/granian/releases
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/emmett-framework/granian/languages
    checkedAt: 2026-10-29
  - field: category
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/README.md
    checkedAt: 2026-10-29
  - field: runtime
    url: https://raw.githubusercontent.com/emmett-framework/granian/v2.8.7/pyproject.toml
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://raw.githubusercontent.com/emmett-framework/granian/v2.8.7/pyproject.toml
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/README.md
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/LICENSE
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/emmett-framework/granian/master/LICENSE
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/emmett-framework/granian/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/emmett-framework/granian/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/emmett-framework/granian
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/emmett-framework/granian/contributors
    checkedAt: 2026-10-29
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/granian
    checkedAt: 2026-10-29
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/granian
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

Granian is a Rust HTTP server that runs Python applications written for the ASGI, RSGI or WSGI interface. Its HTTP layer is built on the Hyper and Tokio Rust libraries. The package is installed from PyPI with pip, and an application is served with the granian command.

Once started, the server keeps running and answers requests, so a host has to allow a long-running process. Giovanni Barillari maintains the project, which sits in the emmett-framework organization on GitHub.
