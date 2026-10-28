---
id: datasette
name: Datasette
urls:
  home: https://datasette.io
  repository: https://github.com/simonw/datasette
  docs: https://docs.datasette.io/
  plugins: https://datasette.io/plugins
category:
  - admin-panel
description: Open source Python tool for exploring data held in SQLite and publishing it as an interactive website and JSON API.
status: active
maintainer: Simon Willison
maintainerType: individual
firstRelease: 2017
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - sqlite
adminUi: true
templating: jinja
runsAs:
  - always-on
  - local
  - browser
installMethod: pip
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-16
githubStargazers: 11525
contributors: 101
pluginCount: 154
dependentRepos: 285
dependentPackages: 143
social:
  discord: https://datasette.io/discord
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://datasette.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/simonw/datasette
    checkedAt: 2026-10-28
  - field: urls
    url: https://datasette.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://datasette.io/
    checkedAt: 2026-10-28
  - field: pluginCount
    url: https://datasette.io/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/simonw/datasette/blob/0.65.5/setup.py
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/simonw/datasette/blob/0.65.5/setup.py
    checkedAt: 2026-10-28
  - field: category
    url: https://datasette.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/simonw/datasette
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/simonw/datasette/blob/0.65.5/setup.py
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/simonw/datasette/blob/0.65.5/setup.py
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://docs.datasette.io/en/stable/getting_started.html
    checkedAt: 2026-10-28
  - field: databases
    url: https://docs.datasette.io/en/stable/deploying.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.datasette.io/en/stable/installation.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.datasette.io/en/stable/installation.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.datasette.io/en/stable/installation.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.datasette.io/en/stable/installation.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.datasette.io/en/stable/deploying.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.datasette.io/en/stable/installation.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.datasette.io/en/stable/getting_started.html
    checkedAt: 2026-10-28
  - field: templating
    url: https://docs.datasette.io/en/stable/custom_templates.html
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/simonw/datasette
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://api.github.com/repos/simonw/datasette
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/simonw/datasette/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/simonw/datasette/releases/tags/0.65.5
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/simonw/datasette/releases/tags/0.65.5
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/simonw/datasette
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/simonw/datasette/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/datasette
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/datasette
    checkedAt: 2026-10-28
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Datasette is an open source Python tool for exploring data held in SQLite and publishing it as an interactive website with a JSON API. It serves SQLite files from a directory or from an application deployed with its publish command. It is installed with pip, Homebrew, a Docker image or a Mac app, and a plugin ecosystem extends it. Simon Willison maintains it on GitHub.

Datasette Lite packages the same software for WebAssembly, so it runs in the browser without a Python server. A normal server install runs as a single process that listens on a port.

## Worth knowing

The deployment guide says Datasette is not designed to run as root. It recommends a proxy such as nginx, Apache or HAProxy to serve ports 80 and 443 and forward traffic to the process.
