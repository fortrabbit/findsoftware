---
id: python-schema
name: schema
urls:
  repository: https://github.com/keleshev/schema
category:
  - library
description: Python library for validating Python data structures, such as data converted from JSON or YAML.
status: active
maintainer: Vladimir Keleshev
maintainerType: individual
firstRelease: 2012
language: python
runtime:
  - python
hosting:
  - python
installMethod: pip, from PyPI
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-10-11
githubStargazers: 2940
contributors: 63
dependentRepos: 2636
dependentPackages: 261
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://github.com/keleshev/schema/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/keleshev/schema
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/keleshev/schema/blob/master/LICENSE-MIT
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/keleshev/schema/commits/0.1.0
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/keleshev/schema/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/keleshev/schema
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/keleshev/schema/blob/v0.7.8/setup.py
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/keleshev/schema/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/keleshev/schema/blob/master/README.rst
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/keleshev/schema/blob/v0.7.8/setup.py
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/keleshev/schema/blob/v0.7.8/setup.py
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/keleshev/schema/releases/tags/v0.7.6
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://pypi.org/pypi/schema/json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/keleshev/schema
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/keleshev/schema/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/schema
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/schema
    checkedAt: 2026-11-16
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
runsAs: null
---

schema is a Python library for validating Python data structures, such as data read from config files, forms, external services or command-line parsing and converted from JSON or YAML. A schema is built from Python types, functions and containers, and validation returns the checked data or raises an error. The README is the library's documentation.

## Worth knowing

A dict schema can generate a draft-07 JSON Schema for use with JSON Schema compatible libraries. The README says that result is not guaranteed to accept the same objects as the library itself.
