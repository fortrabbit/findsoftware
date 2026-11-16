---
id: phonenumbers-py
name: phonenumbers
urls:
  repository: https://github.com/daviddrysdale/python-phonenumbers
  docs: https://daviddrysdale.github.io/python-phonenumbers/
category:
  - library
description: Python library for parsing, formatting, storing and validating international phone numbers, a port of Google's libphonenumber.
status: active
maintainer: David Drysdale
maintainerType: individual
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 2.5
installMethod: pip
licenseModel: open-source
license: Apache-2.0
currentMajor: "9"
latestReleaseDate: 2026-11-06
githubStargazers: 3781
contributors: 31
dependentRepos: 6592
dependentPackages: 222
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/daviddrysdale/python-phonenumbers
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/daviddrysdale/python-phonenumbers/blob/dev/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/daviddrysdale/python-phonenumbers/blob/v9.0.43/python/pyproject.toml
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/phonenumbers/json
    checkedAt: 2026-11-16
  - field: category
    url: https://pypi.org/pypi/phonenumbers/json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/daviddrysdale/python-phonenumbers
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/daviddrysdale/python-phonenumbers/blob/dev/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/daviddrysdale/python-phonenumbers/blob/v9.0.43/python/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/daviddrysdale/python-phonenumbers/blob/dev/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/daviddrysdale/python-phonenumbers/blob/v9.0.43/python/pyproject.toml
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/daviddrysdale/python-phonenumbers/tags?per_page=100
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://pypi.org/pypi/phonenumbers/json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/daviddrysdale/python-phonenumbers
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/daviddrysdale/python-phonenumbers/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/phonenumbers
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/phonenumbers
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

phonenumbers is a Python library that parses phone numbers, formats them in national, international and E.164 layouts, and checks whether a number is possible or valid. It also formats a number as a user types it, and finds phone numbers inside a longer block of text. The package is a Python port of Google's libphonenumber, and the metadata that drives parsing ships with it.

The normal metadata loads one region at a time, on first use. Geocoding, carrier and timezone lookups need metadata held in separate packages that the caller imports explicitly. The repository also ships phonenumberslite, a package without those three lookups, for installs that run short of space or memory. The [documentation](https://daviddrysdale.github.io/python-phonenumbers/) describes the API.

## Worth knowing

A number written without a plus sign needs a default region, and parse raises an exception when it has neither. Static type checking works through the type stub files the package includes.
