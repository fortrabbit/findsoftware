---
id: django-vite
name: django-vite
urls:
  repository: https://github.com/MrBin99/django-vite
  docs: https://github.com/MrBin99/django-vite
category:
  - build-tool
description: Django template integration that loads Vite development server assets in dev mode and built Vite manifest assets in production.
status: active
maintainer: MrBin99
maintainerType: individual
firstRelease: 2021
language: python
runtime:
  - python
basedOn:
  - django
templating: django
installMethod: pip install django-vite
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-09-14
githubStargazers: 841
contributors: 21
dependentRepos: 41
dependentPackages: 6
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/MrBin99/django-vite
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/MrBin99/django-vite/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/MrBin99/django-vite/blob/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/MrBin99/django-vite/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/MrBin99/django-vite
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/MrBin99/django-vite/blob/3.2.0/setup.py
    checkedAt: 2026-10-28
  - field: templating
    url: https://github.com/MrBin99/django-vite/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/MrBin99/django-vite/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/MrBin99/django-vite/blob/3.2.0/setup.py
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/MrBin99/django-vite
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/MrBin99/django-vite/3.2.0/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/MrBin99/django-vite/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/MrBin99/django-vite/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/MrBin99/django-vite/releases/tag/3.2.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/MrBin99/django-vite
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/MrBin99/django-vite/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-vite
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-vite
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

django-vite is a Python package that connects Vite, the JavaScript build tool, to Django templates. It is installed with pip. In development mode its template tags include assets from the Vite development server, and in production mode they read the Vite manifest and include the built assets as standard assets.

## Worth knowing

The Vite configuration has to enable the manifest output, since production mode reads the manifest file.
