---
id: django-elasticsearch-dsl
name: Django Elasticsearch DSL
urls:
  repository: https://github.com/django-es/django-elasticsearch-dsl
  docs: https://django-elasticsearch-dsl.readthedocs.io/en/latest/
category:
  - search
description: Django package that indexes Django models into Elasticsearch through elasticsearch-dsl-py, with signal-based sync and management commands.
status: active
maintainer: Sabricot
firstRelease: 2017
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.9
basedOn:
  - django
installMethod: pip
licenseModel: open-source
license: Apache-2.0
currentMajor: "9"
latestReleaseDate: 2025-07-23
githubStargazers: 1057
contributors: 49
dependentRepos: 945
dependentPackages: 3
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/django-es/django-elasticsearch-dsl
    checkedAt: 2026-10-28
  - field: urls
    url: https://django-elasticsearch-dsl.readthedocs.io/en/latest/quickstart.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://pypi.org/pypi/django-elasticsearch-dsl/json
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/django-es/django-elasticsearch-dsl/master/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://pypi.org/pypi/django-elasticsearch-dsl/json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/django-es/django-elasticsearch-dsl/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/django-es/django-elasticsearch-dsl
    checkedAt: 2026-10-28
  - field: runtime
    url: https://pypi.org/pypi/django-elasticsearch-dsl/json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://pypi.org/pypi/django-elasticsearch-dsl/json
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://pypi.org/pypi/django-elasticsearch-dsl/json
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/django-es/django-elasticsearch-dsl/master/README.rst
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://django-elasticsearch-dsl.readthedocs.io/en/latest/quickstart.html
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/django-es/django-elasticsearch-dsl/tags
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://pypi.org/pypi/django-elasticsearch-dsl/json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://pypi.org/pypi/django-elasticsearch-dsl/json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/django-es/django-elasticsearch-dsl
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/django-es/django-elasticsearch-dsl/contributors
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-elasticsearch-dsl
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-elasticsearch-dsl
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Django Elasticsearch DSL is a Django package that indexes Django models into Elasticsearch. Each indexed model gets a Document class, registered with a decorator, that lists the model fields to index. Django signals keep the index in sync on save and delete, and management commands create, delete, rebuild and populate indices.

It is installed with pip and added to the Django INSTALLED_APPS setting, with the Elasticsearch connection set in the ELASTICSEARCH_DSL setting. Sabricot is named as the author on PyPI, and the repository belongs to the django-es GitHub organization.

## Worth knowing

The README asks that the package's major version match the major version of the Elasticsearch server in use.
