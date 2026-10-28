---
id: django-compressor
name: Django Compressor
urls:
  home: https://django-compressor.readthedocs.io/en/latest/
  repository: https://github.com/django-compressor/django-compressor
  docs: https://django-compressor.readthedocs.io/en/latest/
category:
  - build-tool
description: Django app that combines, minifies and caches linked and inline JavaScript and CSS from Django templates into static files.
status: active
maintainer: Mathieu Pillard
firstRelease: 2010
language: python
runtime:
  - python
runtimeMin: python 3.10
basedOn:
  - django
templating: django, jinja2
runsAs:
  - local
installMethod: pip install django-compressor
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2025-11-10
githubStargazers: 2869
contributors: 183
dependentRepos: 6524
dependentPackages: 69
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://django-compressor.readthedocs.io/en/latest/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/django-compressor/django-compressor
    checkedAt: 2026-10-28
  - field: urls
    url: https://django-compressor.readthedocs.io/en/latest/
    checkedAt: 2026-10-28
  - field: category
    url: https://django-compressor.readthedocs.io/en/latest/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/django-compressor/django-compressor/blob/4.6/README.rst
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/django-compressor/django-compressor
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/django-compressor/django-compressor/blob/4.6/pyproject.toml
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/django-compressor/django-compressor/blob/4.6/pyproject.toml
    checkedAt: 2026-10-28
  - field: templating
    url: https://django-compressor.readthedocs.io/en/latest/jinja2.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://django-compressor.readthedocs.io/en/latest/usage.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://django-compressor.readthedocs.io/en/latest/quickstart.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/django-compressor/django-compressor/blob/4.6/pyproject.toml
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/django-compressor/django-compressor/blob/4.6/pyproject.toml
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/django-compressor/django-compressor/4.6/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://pypi.org/pypi/django-compressor/json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://pypi.org/pypi/django-compressor/json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://pypi.org/pypi/django-compressor/json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/django-compressor/django-compressor
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/django-compressor/django-compressor/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-compressor
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-compressor
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Django Compressor is a Django app that combines and minifies the linked and inline JavaScript and CSS used in Django templates, and writes the result to cacheable static files. It is a Python package installed with pip. Templates can also use it through Jinja2, which the project supports through an extension.

Compression can run during a request, or offline: offline compression runs the compress management command during deployment, as a build step.

## Worth knowing

The pip package is named django_compressor, and the Python module is named compressor.
