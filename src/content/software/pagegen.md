---
id: pagegen
name: Pagegen
urls:
  home: https://pagegen.phnd.net
  repository: https://github.com/oliverfields/pagegen
  docs: https://pagegen.phnd.net/quick-start
category:
  - ssg
description: Python static site generator that builds a website from plain text page files and folders.
status: active
maintainer: Oliver Fields
maintainerType: individual
firstRelease: 2015
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.8
contentStore:
  - flat-file
templating: mako
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install pagegen
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "4"
latestReleaseDate: 2025-04-23
githubStargazers: 26
contributors: 1
ecosystemsMonthlyDownloads: 107
dependentRepos: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://pagegen.phnd.net/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/oliverfields/pagegen
    checkedAt: 2026-10-23
  - field: urls
    url: https://pagegen.phnd.net/quick-start
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/oliverfields/pagegen/master/setup.py
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/oliverfields/pagegen
    checkedAt: 2026-10-23
  - field: category
    url: https://pagegen.phnd.net/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://pypi.org/pypi/pagegen/json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/pagegen/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pagegen.phnd.net/quick-start
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://pagegen.phnd.net/manual/site
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pagegen.phnd.net/manual/site
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pagegen.phnd.net/quick-start
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://pagegen.phnd.net/manual/site
    checkedAt: 2026-10-23
  - field: templating
    url: https://pagegen.phnd.net/manual/site
    checkedAt: 2026-10-23
  - field: license
    url: https://pypi.org/pypi/pagegen/json
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/pagegen/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/oliverfields/pagegen/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/pagegen/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/oliverfields/pagegen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/oliverfields/pagegen/contributors
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/pagegen
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/pagegen
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pagegen is a static site generator written in Python and installed with pip. It keeps its content as flat files, stored in a content directory, and its templates use Mako. The pgn command writes the finished site to a build directory, which is uploaded to a web server, so the live site needs no process of its own.
