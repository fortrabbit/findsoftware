---
id: django-modeltranslation
name: django-modeltranslation
urls:
  repository: https://github.com/deschler/django-modeltranslation
  docs: https://django-modeltranslation.readthedocs.io/en/latest/
category:
  - library
description: Django app that translates the fields of existing models into several languages through a registration step, without changing the model classes.
status: active
maintainer: Peter Eschler, Dirk Eschler
maintainerType: individual
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
basedOn:
  - django
adminUi: true
i18n: yes
installMethod: source-build
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2026-09-07
githubStargazers: 1484
contributors: 106
dependentRepos: 1018
dependentPackages: 19
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://api.github.com/repos/deschler/django-modeltranslation
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/deschler/django-modeltranslation/blob/master/README.rst
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/deschler/django-modeltranslation/blob/master/README.rst
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://github.com/deschler/django-modeltranslation/blob/master/README.rst
    checkedAt: 2026-11-04
  - field: i18n
    url: https://github.com/deschler/django-modeltranslation/blob/master/README.rst
    checkedAt: 2026-11-04
  - field: adminUi
    url: https://github.com/deschler/django-modeltranslation/blob/master/README.rst
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/deschler/django-modeltranslation
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/deschler/django-modeltranslation/blob/v0.20.6/pyproject.toml
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/deschler/django-modeltranslation/blob/v0.20.6/pyproject.toml
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://django-modeltranslation.readthedocs.io/en/latest/installation.html
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/deschler/django-modeltranslation/blob/v0.20.6/LICENSE.txt
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/deschler/django-modeltranslation/blob/v0.20.6/pyproject.toml
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/deschler/django-modeltranslation/blob/v0.20.6/LICENSE.txt
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/django-modeltranslation/json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/deschler/django-modeltranslation/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/deschler/django-modeltranslation/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/deschler/django-modeltranslation
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/deschler/django-modeltranslation/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-modeltranslation
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-modeltranslation
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

django-modeltranslation adds translated fields to existing Django models without changing their class definitions. Models are registered for translation in a translation module of each app, in the same way the Django admin registers model classes, and the translation fields sit in the same table as the originals. It is fully integrated into the Django admin backend.
