---
id: django-allauth
name: django-allauth
urls:
  home: https://allauth.org
  repository: https://codeberg.org/allauth/django-allauth
  docs: https://docs.allauth.org/en/latest/
category:
  - auth
description: Integrated set of Django applications for local and social account authentication, registration and account management.
status: active
maintainer: Raymond Penners
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
basedOn:
  - django
adminUi: true
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "65"
latestReleaseDate: 2026-10-30
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://allauth.org
    checkedAt: 2026-11-04
  - field: urls
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/README.rst
    checkedAt: 2026-11-04
  - field: urls
    url: https://docs.allauth.org/en/latest/
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/django-allauth/json
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/LICENSE
    checkedAt: 2026-11-04
  - field: category
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/README.rst
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/README.rst
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/pennersr/django-allauth
    checkedAt: 2026-11-04
  - field: runtime
    url: https://codeberg.org/allauth/django-allauth/raw/tag/65.21.1/pyproject.toml
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/docs/installation/requirements.rst
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/docs/installation/quickstart.rst
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/docs/headless/installation.rst
    checkedAt: 2026-11-04
  - field: license
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/LICENSE
    checkedAt: 2026-11-04
  - field: adminUi
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/README.rst
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://codeberg.org/allauth/django-allauth/raw/branch/main/ChangeLog.rst
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://pypi.org/pypi/django-allauth/json
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

django-allauth is an integrated set of Django applications for authentication, registration and account management. It covers local accounts that sign in with a username or email address, and third-party accounts through social providers. Its `allauth.idp` module adds an OpenID Connect identity provider, and its `allauth.headless` app serves single-page and mobile applications. A Django project installs it with pip, adds the apps to its settings, as the [documentation](https://docs.allauth.org/en/latest/) describes. Raymond Penners and contributors maintain it. The source code is on Codeberg, and a GitHub repository mirrors it.

## Worth knowing

The Django admin login does not go through the django-allauth workflow, so rate limits and two-factor checks do not apply to it by default.
