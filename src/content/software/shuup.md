---
id: shuup
name: Shuup
urls:
  repository: https://github.com/shuup/shuup
  docs: https://shuup.readthedocs.io/en/latest/
category:
  - e-commerce
description: Open-source e-commerce platform built on Django and Python, with a back-office admin and a theme system for the storefront.
status: stub
maintainer: Shuup Commerce Inc.
maintainerType: company
firstRelease: 2015
hqCountry: CA
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.6
basedOn:
  - django
adminUi: true
templating: jinja2
i18n: yes, model translations through django-parler
installMethod: pip install shuup, then a Django project
licenseModel: open-source
license: OSL-3.0
currentMajor: "3"
latestReleaseDate: 2021-08-17
githubStargazers: 2406
contributors: 52
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/shuup/shuup/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/shuup/shuup
    checkedAt: 2026-10-23
  - field: urls
    url: https://shuup.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/shuup/shuup/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/shuup/shuup/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/shuup/shuup
    checkedAt: 2026-10-23
  - field: runtime
    url: https://shuup.readthedocs.io/en/latest/howto/getting_started.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://shuup.readthedocs.io/en/latest/howto/getting_started.html
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/shuup/shuup/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/shuup/shuup/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: templating
    url: https://shuup.readthedocs.io/en/latest/ref/templates.html
    checkedAt: 2026-10-23
  - field: i18n
    url: https://shuup.readthedocs.io/en/latest/howto/getting_started.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://shuup.readthedocs.io/en/latest/howto/getting_started.html
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://shuup.readthedocs.io/en/latest/howto/getting_started.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/shuup/shuup/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/shuup/shuup/blob/master/doc/shoop-changelog.rst
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/shuup/shuup/releases/tag/v3.1.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/shuup/shuup/releases/tag/v3.1.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/shuup/shuup
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/shuup/shuup/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://github.com/shuup/shuup/blob/master/README.rst
    checkedAt: 2026-10-23
figure:
  emoji: 🛒
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Python · Shop
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Shuup is an e-commerce platform based on Django and Python, published by Shuup Commerce Inc. It is installed as a Python package into a Django project following the [installation guide](https://shuup.readthedocs.io/en/latest/howto/getting_started.html), or started as a demo with Docker Compose. The platform has an administration dashboard, model translations through django-parler, Jinja2 storefront templates, and staff groups that carry admin permissions. One installation can hold several shops.

## Worth knowing

The project's own homepage does not answer over HTTPS, so the state of the company's site cannot be checked from this record. The project was named Shoop before the rename to Shuup.
