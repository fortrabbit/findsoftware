---
id: django-lfs
name: Lightning Fast Shop
urls:
  repository: https://github.com/diefenbach/django-lfs
  docs: https://github.com/diefenbach/django-lfs/tree/main/docs
category:
  - e-commerce
description: Django-based online shop with a product catalog, cart, checkout and order handling.
status: stub
maintainer: Kai Diefenbach
maintainerType: individual
firstRelease: 2009
language: python
runtime:
  - python
hosting:
  - python
basedOn:
  - django
databases:
  - postgres
  - mysql
  - sqlite
  - oracle
adminUi: true
runsAs:
  - always-on
installMethod: pip install django-lfs, then a Django project with the lfs apps added to INSTALLED_APPS
licenseModel: open-source
license: BSD-3-Clause, BSD
currentMajor: "0"
latestReleaseDate: 2017-03-09
githubStargazers: 640
contributors: 21
ecosystemsMonthlyDownloads: 209
dependentRepos: 10
social:
  x: https://twitter.com/lfsproject
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/diefenbach/django-lfs
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/docs/index.rst
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/diefenbach/django-lfs
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/setup.py
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/LICENSE.txt
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/LICENSE.txt
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/diefenbach/django-lfs
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/docs/introduction/installation.rst
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/README.rst
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/README.rst
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/docs/introduction/installation.rst
    checkedAt: 2026-10-23
  - field: databases
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/docs/introduction/installation.rst
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/HISTORY.txt
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/django-lfs/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/django-lfs/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/diefenbach/django-lfs
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/diefenbach/django-lfs/contributors
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/docs/introduction/installation.rst
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/diefenbach/django-lfs/main/docs/user/management/shop/index.rst
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-lfs
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-lfs
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

django-lfs, published as Lightning Fast Shop, is an online shop based on Python, Django and jQuery. It installs with pip into a Django project, whose settings and URLs the installation page edits to add the shop's apps. The shop has a management interface, uses PostgreSQL, MySQL, SQLite or Oracle as its database, and the installation page points to uWSGI or Gunicorn for a production setup.

## Worth knowing

The homepage address in the registry metadata now serves unrelated content, and the documentation and demo sites do not answer. The installation page names Python 2.6 and 2.7 while another page in the repository names a newer Python 3, so the supported Python is unclear.
