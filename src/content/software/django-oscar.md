---
id: django-oscar
name: Oscar
urls:
  home: https://oscarcommerce.com
  repository: https://github.com/django-oscar/django-oscar
  docs: https://docs.oscarcommerce.com/en/latest/
category:
  - e-commerce
  - framework
description: Domain-driven e-commerce framework for Django, with a catalogue, offers, checkout and a dashboard.
status: active
maintainer: Tangent Communications PLC
firstRelease: 2012
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.8
basedOn:
  - django
databases:
  - postgres
adminUi: true
templating: django-templates
i18n: yes, translations maintained on Transifex
installMethod: pip install django-oscar
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2026-09-29
githubStargazers: 6627
contributors: 288
ecosystemsMonthlyDownloads: 71907
dependentRepos: 319
dependentPackages: 15
social:
  x: https://twitter.com/django_oscar
  discord: https://discord.gg/NMwfZuJnJZ
  forum: https://groups.google.com/forum/?fromgroups#!forum/django-oscar
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/docs/source/index.rst
    checkedAt: 2026-10-23
  - field: urls
    url: https://oscarcommerce.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/django-oscar/django-oscar
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/README.rst
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/django-oscar/django-oscar
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/docs/source/index.rst
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/README.rst
    checkedAt: 2026-10-23
  - field: runtime
    url: https://pypi.org/pypi/django-oscar/json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/django-oscar/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/docs/source/internals/getting_started.rst
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/docs/source/index.rst
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/docs/source/internals/getting_started.rst
    checkedAt: 2026-10-23
  - field: i18n
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/docs/source/topics/translation.rst
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/django-oscar/django-oscar
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/django-oscar/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/django-oscar/django-oscar/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/django-oscar/django-oscar/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/django-oscar/django-oscar
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/django-oscar/django-oscar/contributors
    checkedAt: 2026-10-23
  - field: databases
    url: https://raw.githubusercontent.com/django-oscar/django-oscar/master/docs/source/ref/platform_database_support.rst
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-oscar
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-oscar
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-oscar
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Oscar is an e-commerce framework for building domain-driven applications on Django. It is installed from PyPI as a set of Django apps, and the [documentation](https://docs.oscarcommerce.com/en/latest/) walks through setup. Its dashboard replaces the Django admin for managing the store. The LICENSE names Tangent Communications PLC as the copyright holder.

## Worth knowing

Oscar officially supports PostgreSQL; MySQL and Microsoft Windows are not supported. The deployment guide says Oscar has no special deployment requirements beyond those of a Django project. Extensions such as a REST API and an Elasticsearch integration are separate projects listed on its homepage.
