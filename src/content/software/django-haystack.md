---
id: django-haystack
name: Haystack
urls:
  home: https://haystacksearch.org/
  repository: https://github.com/django-haystack/django-haystack
  docs: https://django-haystack.readthedocs.io/en/master/
category:
  - search
description: Django app that puts one search API in front of pluggable backends such as Solr, Elasticsearch, Whoosh and Xapian.
status: active
maintainer: Daniel Lindsley
firstRelease: 2009
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
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-06-04
githubStargazers: 3723
contributors: 191
dependentRepos: 4650
dependentPackages: 30
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://haystacksearch.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/django-haystack/django-haystack
    checkedAt: 2026-10-28
  - field: urls
    url: https://django-haystack.readthedocs.io/en/master/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/django-haystack/django-haystack/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://pypi.org/pypi/django-haystack/json
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/django-haystack/django-haystack/blob/v3.4.0/pyproject.toml
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/django-haystack/django-haystack/blob/v3.4.0/pyproject.toml
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/django-haystack/django-haystack/blob/v3.4.0/pyproject.toml
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/django-haystack/django-haystack/blob/v3.4.0/pyproject.toml
    checkedAt: 2026-10-28
  - field: category
    url: https://django-haystack.readthedocs.io/en/master/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/django-haystack/django-haystack/blob/v3.4.0/pyproject.toml
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://django-haystack.readthedocs.io/en/master/tutorial.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/django-haystack/django-haystack/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/django-haystack/django-haystack/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/django-haystack/django-haystack
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/django-haystack/django-haystack/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-haystack
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-haystack
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

Haystack is a search app for Django. It describes itself as pluggable search for Django and gives a project one search API over several engines. The project's documentation describes plugging different search backends into that API; the backends it names are Solr, Elasticsearch, Whoosh and Xapian.

## Worth knowing

The name is shared with deepset's Haystack LLM framework, which is a different project. The Solr and Elasticsearch engines run as their own services that Haystack connects to.
