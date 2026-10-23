---
id: django-distill
name: django-distill
urls:
  repository: https://github.com/meeb/django-distill
  docs: https://github.com/meeb/django-distill/blob/master/README.md
category:
  - ssg
description: Static site generator and publisher for Django that renders URLs to HTML files.
status: active
maintainer: meeb
maintainerType: individual
firstRelease: 2016
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.10
basedOn:
  - django
i18n: urls only
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install
licenseModel: open-source
license: BSD-3-Clause, MIT
currentMajor: "4"
latestReleaseDate: 2026-09-30
githubStargazers: 519
contributors: 21
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/meeb/django-distill
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/meeb/django-distill/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/meeb/django-distill
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://pypi.org/pypi/django-distill/json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/django-distill/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/meeb/django-distill/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/meeb/django-distill
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/meeb/django-distill/master/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://pypi.org/pypi/django-distill/json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/meeb/django-distill/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/django-distill/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/meeb/django-distill/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/meeb/django-distill/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/meeb/django-distill
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/meeb/django-distill/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

django-distill is a static site generator and publisher for Django. It renders the URLs of an existing Django site into HTML files and writes them to a local directory, or uploads them to Amazon S3, Google Cloud Storage or Azure Blob Storage. The process can run in CI/CD to deploy a site on each commit. It is installed with pip.

The project has no website of its own, so the [README](https://github.com/meeb/django-distill/blob/master/README.md) in the repository is its documentation.

## Worth knowing

Internationalization covers URLs only; the tool does not translate page content. The README describes the current release line as a ground-up rebuild that is not guaranteed to be compatible with older releases.
