---
id: sqlite-web
name: sqlite-web
urls:
  repository: https://github.com/coleifer/sqlite-web
category:
  - admin-panel
  - database
description: Python web application for browsing, editing, importing and exporting the tables of SQLite database files from a browser.
status: active
maintainer: Charles Leifer
maintainerType: individual
firstRelease: 2014
language: python
runtime:
  - python
hosting:
  - python
databases:
  - sqlite
adminUi: true
runsAs:
  - local
  - always-on
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-27
githubStargazers: 4179
contributors: 9
dependentRepos: 37
dependentPackages: 2
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://github.com/coleifer/sqlite-web
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/pyproject.toml
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/coleifer/sqlite-web
    checkedAt: 2026-10-30
  - field: runtime
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: databases
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/coleifer/sqlite-web/master/LICENSE
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://pypi.org/pypi/sqlite-web/json
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/coleifer/sqlite-web/tags
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/coleifer/sqlite-web/tags
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/coleifer/sqlite-web
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/coleifer/sqlite-web/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/sqlite-web
    checkedAt: 2026-10-30
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/sqlite-web
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

sqlite-web is a Python web application that opens SQLite database files and shows their tables in a browser, where the data can be browsed, edited, imported and exported. It installs from PyPI with pip and also runs from a Docker image published to GitHub Container Registry.

It is started on the command line with the path of one or more database files, and by default it serves its page on localhost. An optional WSGI server based on gevent is available for running it as a server process.
