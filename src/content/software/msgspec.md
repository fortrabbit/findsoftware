---
id: msgspec
name: msgspec
urls:
  home: https://msgspec.dev
  repository: https://github.com/msgspec/msgspec
  docs: https://msgspec.dev
category:
  - library
description: Fast serialization and validation library for Python, with built-in JSON, MessagePack, YAML and TOML support.
status: active
maintainer: Jim Crist-Harif
firstRelease: 2021
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
installMethod: pip install msgspec, conda install msgspec -c conda-forge
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2026-09-29
githubStargazers: 4225
contributors: 93
dependentRepos: 235
dependentPackages: 166
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://msgspec.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/msgspec/msgspec
    checkedAt: 2026-11-16
  - field: urls
    url: https://msgspec.dev/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/msgspec/msgspec/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/msgspec/msgspec/releases?per_page=100
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/msgspec/msgspec
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/msgspec/msgspec/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://msgspec.dev/install.html
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://msgspec.dev/install.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://msgspec.dev/install.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://msgspec.dev/install.html
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/msgspec/msgspec
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/msgspec/msgspec/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/msgspec/msgspec/releases?per_page=100
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/msgspec/msgspec/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/msgspec/msgspec
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/msgspec/msgspec/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/msgspec
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/msgspec
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

msgspec is a Python library that encodes and decodes JSON, MessagePack, YAML and TOML, and validates messages against schemas written as Python type annotations while decoding. It has no required dependencies. The project's homepage lists projects that use it, including Litestar and Sanic.

## Worth knowing

The TOML and YAML protocols need optional extras that the install page names: tomli and tomli_w for TOML, and PyYAML for YAML. The docs include a porting guide from orjson.
