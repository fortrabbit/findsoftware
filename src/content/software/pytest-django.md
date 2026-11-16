---
id: pytest-django
name: pytest-django
urls:
  home: https://pytest-django.readthedocs.io/en/latest/
  repository: https://github.com/pytest-dev/pytest-django
  docs: https://pytest-django.readthedocs.io/en/latest/
category:
  - testing
description: pytest plugin that provides tools for testing Django projects and applications.
status: active
maintainer: Andreas Pelme
maintainerType: individual
firstRelease: 2012
language: python
runtime:
  - python
runtimeMin: python 3.10
basedOn:
  - pytest
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2026-08-10
githubStargazers: 1549
contributors: 152
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://pytest-django.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/pytest-dev/pytest-django
    checkedAt: 2026-11-16
  - field: urls
    url: https://pytest-django.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/pytest-dev/pytest-django/blob/v4.14.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/pytest-dev/pytest-django/blob/v4.14.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/pytest-django/json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/pytest-dev/pytest-django/blob/v4.14.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://pytest-django.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/pytest-dev/pytest-django
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/pytest-dev/pytest-django/blob/v4.14.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/pytest-dev/pytest-django/blob/v4.14.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/pytest-dev/pytest-django/blob/main/README.rst
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/pytest-dev/pytest-django/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/pytest-dev/pytest-django/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/pytest-dev/pytest-django/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/pytest-dev/pytest-django
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/pytest-dev/pytest-django/contributors
    checkedAt: 2026-11-16
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
npmWeeklyDownloads: null
---

pytest-django lets a Django project run its tests with pytest. Tests can be plain functions that use pytest fixtures, unittest-style TestCase classes keep working, and the test database can be reused between runs. The README says the suite can run across several processes through the pytest-xdist plugin.

## Worth knowing

Compatibility follows Django and pytest releases: the README says that for older versions one should use previous pytest-django releases.
