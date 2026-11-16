---
id: ormar
name: ormar
urls:
  home: https://ormar-orm.github.io/ormar/latest/
  repository: https://github.com/ormar-orm/ormar
category:
  - library
description: Async Python ORM that uses pydantic models for validation and is designed for async frameworks such as FastAPI.
status: active
maintainer: Radosław Drążkiewicz
firstRelease: 2020
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
databases:
  - postgres
  - mysql
  - sqlite
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-11-16
githubStargazers: 1797
contributors: 52
dependentRepos: 127
dependentPackages: 10
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://ormar-orm.github.io/ormar/latest/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/ormar-orm/ormar
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/ormar-orm/ormar/blob/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/ormar/json
    checkedAt: 2026-11-16
  - field: category
    url: https://ormar-orm.github.io/ormar/latest/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/ormar-orm/ormar
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/ormar-orm/ormar/blob/0.30.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/ormar-orm/ormar/blob/0.30.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/ormar-orm/ormar/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/ormar-orm/ormar/blob/master/docs/install.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/ormar-orm/ormar
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/ormar-orm/ormar/blob/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/ormar-orm/ormar/releases/tag/0.30.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/ormar-orm/ormar/releases/tag/0.30.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/ormar-orm/ormar
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/ormar-orm/ormar/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/ormar
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/ormar
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

ormar is an async object-relational mapper for Python. Its models are pydantic models, so the same class validates data and can serve as a request or response model in a FastAPI app. It is built on SQLAlchemy core for query building, and a translation tool for existing SQLAlchemy models is documented. The [documentation](https://ormar-orm.github.io/ormar/latest/) covers models, queries, relations and use with FastAPI.

## Worth knowing

The README says the project is still under development and recommends pinning the version. Its versioning note says breaking changes bump the minor number, so a minor update within the 0.x line can carry breaking changes.
