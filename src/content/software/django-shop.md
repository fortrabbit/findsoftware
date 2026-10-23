---
id: django-shop
name: django-SHOP
urls:
  repository: https://github.com/awesto/django-shop
  docs: https://django-shop.readthedocs.io/en/latest/
category:
  - e-commerce
  - framework
description: E-commerce framework for Django, extended by a merchant into their own online shop.
status: stub
maintainer: Jacob Rief
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
basedOn:
  - django
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, translatable product fields
runsAs:
  - always-on
installMethod: cookiecutter template, then pipenv
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2021-02-02
githubStargazers: 3320
contributors: 69
social:
  x: https://twitter.com/djangoSHOP
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://pypi.org/pypi/django-SHOP/json
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/awesto/django-shop
    checkedAt: 2026-10-23
  - field: urls
    url: https://django-shop.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/awesto/django-shop/blob/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://django-shop.readthedocs.io/en/latest/
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/awesto/django-shop
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/awesto/django-shop
    checkedAt: 2026-10-23
  - field: category
    url: https://django-shop.readthedocs.io/en/latest/architecture.html
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://pypi.org/pypi/django-SHOP/json
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/awesto/django-shop/blob/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/django-SHOP/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/django-SHOP/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/django-SHOP/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://django-shop.readthedocs.io/en/latest/tutorial/intro.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://django-shop.readthedocs.io/en/latest/reference/docker.html
    checkedAt: 2026-10-23
  - field: databases
    url: https://django-shop.readthedocs.io/en/latest/reference/docker.html
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://django-shop.readthedocs.io/en/latest/tutorial/intro.html
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://django-shop.readthedocs.io/en/latest/features.html
    checkedAt: 2026-10-23
  - field: i18n
    url: https://django-shop.readthedocs.io/en/latest/features.html
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/awesto/django-shop
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/awesto/django-shop/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: 🛒
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Python · Shop
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

django-SHOP is an e-commerce framework based on Django. It does not ship a finished shop: the [tutorial](https://django-shop.readthedocs.io/en/latest/tutorial/intro.html) starts from a cookiecutter template, and the merchant writes the project on top, including the product models and an administration interface for them. The framework's own pages describe its views as REST based, with translatable product fields.

The [Docker reference](https://django-shop.readthedocs.io/en/latest/reference/docker.html) runs the shop as a uWSGI application server container next to PostgreSQL, Redis and Elasticsearch containers under Docker Compose. Jacob Rief holds the copyright and is the PyPI author.

## Worth knowing

The compatibility table in the docs ends at Django 3.0, and the package metadata limits Django to versions below 3.1.
