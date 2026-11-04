---
id: django-oauth-toolkit
name: Django OAuth Toolkit
urls:
  home: https://django-oauth-toolkit.readthedocs.io/en/latest/
  repository: https://github.com/django-oauth/django-oauth-toolkit
  docs: https://django-oauth-toolkit.readthedocs.io/en/latest/
category:
  - auth
description: Django app that turns a Django project into an OAuth 2.0 authorization server with endpoints, models and token logic.
status: active
maintainer: Massimiliano Pippi, Federico Frenguelli
firstRelease: 2013
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
basedOn:
  - django
installMethod: pip
licenseModel: open-source
license: BSD-2-Clause-Views
currentMajor: "3"
latestReleaseDate: 2026-08-21
githubStargazers: 3343
contributors: 281
dependentRepos: 3426
dependentPackages: 32
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://django-oauth-toolkit.readthedocs.io/en/latest/index.html
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/django-oauth/django-oauth-toolkit
    checkedAt: 2026-11-04
  - field: urls
    url: https://django-oauth-toolkit.readthedocs.io/en/latest/index.html
    checkedAt: 2026-11-04
  - field: category
    url: https://django-oauth-toolkit.readthedocs.io/en/latest/index.html
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://github.com/django-oauth/django-oauth-toolkit/blob/master/README.rst
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/django-oauth/django-oauth-toolkit
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/django-oauth/django-oauth-toolkit/blob/3.4.1/pyproject.toml
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/django-oauth/django-oauth-toolkit/blob/3.4.1/pyproject.toml
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://django-oauth-toolkit.readthedocs.io/en/latest/install.html
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/django-oauth/django-oauth-toolkit/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/django-oauth/django-oauth-toolkit/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/django-oauth/django-oauth-toolkit/blob/master/README.rst
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/django-oauth-toolkit/json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/django-oauth/django-oauth-toolkit/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/django-oauth/django-oauth-toolkit/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/django-oauth/django-oauth-toolkit
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/django-oauth/django-oauth-toolkit/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-oauth-toolkit
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-oauth-toolkit
    checkedAt: 2026-11-04
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

Django OAuth Toolkit makes an existing Django project an OAuth 2.0 authorization server, so tokens are issued and managed inside the project rather than by a separate service. It provides the endpoints, models and token logic for that, and it makes extensive use of OAuthLib. The toolkit can also act as a resource server that protects a Django or Django REST Framework API.

## Worth knowing

OpenID Connect support is part of the toolkit but is not enabled by default. It needs additional configuration before it runs.
