---
id: django-guardian
name: django-guardian
urls:
  home: https://django-guardian.readthedocs.io/en/stable/
  repository: https://github.com/django-guardian/django-guardian
  docs: https://django-guardian.readthedocs.io/
category:
  - auth
description: Extra authentication backend for Django that grants and checks permissions on individual model objects.
status: active
maintainer: The django-guardian Contributors
maintainerType: community
firstRelease: 2010
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
basedOn:
  - django
installMethod: uv
licenseModel: open-source
license: BSD-2-Clause, CC-BY-4.0
currentMajor: "3"
latestReleaseDate: 2026-10-20
githubStargazers: 3921
contributors: 165
dependentRepos: 3588
dependentPackages: 36
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://django-guardian.readthedocs.io/en/stable/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/django-guardian/django-guardian
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/django-guardian/django-guardian/blob/main/README.md
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/django-guardian/django-guardian/blob/main/README.md
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://django-guardian.readthedocs.io/en/stable/
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/django-guardian/django-guardian
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/django-guardian/django-guardian/blob/3.5.2/pyproject.toml
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/django-guardian/django-guardian/blob/3.5.2/pyproject.toml
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/django-guardian/django-guardian/blob/main/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/django-guardian/django-guardian/blob/main/README.md
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/django-guardian/django-guardian/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/django-guardian/django-guardian/blob/3.5.2/pyproject.toml
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/django-guardian/django-guardian/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/django-guardian/django-guardian/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/django-guardian/json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/django-guardian/django-guardian/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/django-guardian/django-guardian/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/django-guardian/django-guardian
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/django-guardian/django-guardian/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-guardian
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-guardian
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

django-guardian is an extra authentication backend that stores permissions on individual model objects and answers checks for them, so a user can hold a permission on one record without holding it on the model. It builds on the object-level permission facilities that Django's authorization system provides. Projects add it to the authentication backends next to Django's default model backend and run the migrations that create its tables.

## Worth knowing

By default Guardian relates permissions to any Django model through generic foreign keys, which has performance implications. The docs point new projects to their performance tuning and configuration pages.
