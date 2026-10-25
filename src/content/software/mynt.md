---
id: mynt
name: mynt
urls:
  home: https://mynt.uhnomoli.com/
  repository: https://github.com/uhnomoli/mynt
  docs: https://mynt.uhnomoli.com/docs/quickstart/
category:
  - ssg
description: Python static site generator with automatic archive and tag pages, built on Jinja templates.
status: stub
maintainer: Andrew Fricke
maintainerType: individual
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.5
contentStore:
  - flat-file
templating: jinja2
i18n: .mo locale files in a locales directory
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: pip install mynt
licenseModel: open-source
license: BSD
currentMajor: "0"
latestReleaseDate: 2020-05-18
githubStargazers: 362
contributors: 2
ecosystemsMonthlyDownloads: 102
dependentRepos: 45
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://mynt.uhnomoli.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/uhnomoli/mynt
    checkedAt: 2026-10-23
  - field: urls
    url: https://mynt.uhnomoli.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/uhnomoli/mynt/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/uhnomoli/mynt
    checkedAt: 2026-10-23
  - field: category
    url: https://mynt.uhnomoli.com/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://mynt.uhnomoli.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/uhnomoli/mynt/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://mynt.uhnomoli.com/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://mynt.uhnomoli.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://mynt.uhnomoli.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: license
    url: https://pypi.org/pypi/mynt/json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/uhnomoli/mynt/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/mynt/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/mynt/json
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/mynt/json
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/uhnomoli/mynt/contributors
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/uhnomoli/mynt
    checkedAt: 2026-10-23
  - field: runtime
    url: https://mynt.uhnomoli.com/miscellany/changelog/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://mynt.uhnomoli.com/miscellany/changelog/
    checkedAt: 2026-10-23
  - field: templating
    url: https://mynt.uhnomoli.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://mynt.uhnomoli.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://mynt.uhnomoli.com/docs/quickstart/
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/mynt
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/mynt
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

mynt is a Python static site generator that builds a site from posts, pages, templates and assets kept as plain files in a project directory. Jinja is the default renderer, and the docs describe tag and archive pages generated automatically, content containers handled like posts, and localization through .mo files.

It installs with pip, with an optional extra for reStructuredText. The gen command writes the site to a destination directory and watch regenerates it on changes. The quickstart says to upload the generated site to a host such as GitHub Pages or a VPS.

## Worth knowing

The docs say the serve command is for local development and testing only, not for hosting a site publicly. The project has no GitHub release; its release history here comes from PyPI.
