---
id: piccolo
name: Piccolo
urls:
  home: https://piccolo-orm.com/
  repository: https://github.com/piccolo-orm/piccolo
  docs: https://piccolo-orm.readthedocs.io/en/latest/
category:
  - library
description: Python ORM and query builder with asyncio support, for PostgreSQL and SQLite databases.
status: active
maintainer: Daniel Townsend
firstRelease: 2018
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - postgres
  - sqlite
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-28
githubStargazers: 1955
contributors: 59
dependentRepos: 66
dependentPackages: 6
social:
  x: https://twitter.com/piccolo_orm
  discord: https://discord.gg/JbXBgPM2GY
  youtube: https://www.youtube.com/channel/UCE7x5nm1Iy9KDfXPNrNQ5lA
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://piccolo-orm.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/piccolo-orm/piccolo
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/piccolo-orm/piccolo/blob/1.39.0/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/piccolo-orm/piccolo/commits/0.1.0
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/piccolo-orm/piccolo/blob/1.39.0/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/piccolo-orm/piccolo
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/piccolo-orm/piccolo/blob/1.39.0/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://piccolo-orm.readthedocs.io/en/latest/piccolo/getting_started/installing_piccolo.html
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/piccolo-orm/piccolo/blob/1.39.0/setup.py
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/piccolo-orm/piccolo/blob/1.39.0/README.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/piccolo-orm/piccolo/blob/1.39.0/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://piccolo-orm.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/piccolo-orm/piccolo/blob/1.39.0/setup.py
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://api.github.com/repos/piccolo-orm/piccolo
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/piccolo-orm/piccolo/releases/tags/1.39.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/piccolo-orm/piccolo/releases/tags/1.39.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/piccolo-orm/piccolo
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/piccolo-orm/piccolo/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/piccolo
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/piccolo
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

Piccolo is an ORM and query builder for Python that works with asyncio, and its README says it supports sync as well. The README's piccolo asgi new command scaffolds an ASGI web app with Piccolo as its ORM; the README names Starlette, FastAPI and other frameworks as supported.

## Worth knowing

The homepage and README name an admin interface among the features, but it is the separate Piccolo Admin package from the project's ecosystem, not part of the piccolo package. Piccolo API, which exposes tables as REST endpoints, is also a separate package.
