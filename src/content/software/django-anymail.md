---
id: django-anymail
name: Anymail
urls:
  home: https://anymail.dev
  repository: https://github.com/anymail/django-anymail
  docs: https://anymail.dev/en/stable/
category:
  - email
description: Django email integration that sends and receives mail through transactional email service providers.
status: active
maintainer: Anymail Contributors
maintainerType: community
firstRelease: 2016
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
license: BSD-3-Clause
currentMajor: "15"
latestReleaseDate: 2026-09-05
githubStargazers: 1915
contributors: 69
social:
  forum: https://github.com/anymail/django-anymail/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://anymail.dev
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/anymail/django-anymail
    checkedAt: 2026-11-04
  - field: urls
    url: https://anymail.dev/en/stable/
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/django-anymail/json
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/anymail/django-anymail/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/anymail/django-anymail/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://github.com/anymail/django-anymail/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/anymail/django-anymail
    checkedAt: 2026-11-04
  - field: runtime
    url: https://raw.githubusercontent.com/anymail/django-anymail/v15.2/pyproject.toml
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://raw.githubusercontent.com/anymail/django-anymail/v15.2/pyproject.toml
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/anymail/django-anymail/blob/main/README.rst
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/anymail/django-anymail/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/anymail/django-anymail/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/anymail/django-anymail/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/anymail/django-anymail
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/anymail/django-anymail/contributors
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

Anymail is Django email integration for transactional email service providers. It lets a Django project send and receive email through the provider it chooses, using Django's built-in email functions, and it exposes common provider features such as tags, metadata and tracking behind one API. Inbound email arrives through a provider's webhooks, which connect to Django signals. A project installs it with pip and sets one backend per provider in its settings, as the [documentation](https://anymail.dev/en/stable/) describes. The Anymail Contributors maintain it, and the source is on [GitHub](https://github.com/anymail/django-anymail).

## Worth knowing

Sending depends on an account with the chosen provider. The provider is a third-party hosted service that the library calls.
