---
id: pgbouncer
name: PgBouncer
urls:
  home: https://www.pgbouncer.org
  repository: https://github.com/pgbouncer/pgbouncer
  docs: https://www.pgbouncer.org/config.html
category:
  - database
description: Lightweight connection pooler for PostgreSQL, written in C.
status: active
maintainer: Marko Kreen
maintainerType: individual
firstRelease: 2007
language: c
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: build-from-source-autoconf
licenseModel: open-source
license: ISC
currentMajor: "1"
latestReleaseDate: 2026-10-14
githubStargazers: 4424
contributors: 116
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.pgbouncer.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/pgbouncer/pgbouncer
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.pgbouncer.org/config.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/pgbouncer/pgbouncer/blob/master/COPYRIGHT
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/pgbouncer/pgbouncer/blob/master/COPYRIGHT
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/pgbouncer/pgbouncer
    checkedAt: 2026-10-30
  - field: runtime
    url: https://www.pgbouncer.org/install.html
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/pgbouncer/pgbouncer/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/pgbouncer/pgbouncer/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://www.pgbouncer.org/changelog.html
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/pgbouncer/pgbouncer/blob/master/COPYRIGHT
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/pgbouncer/pgbouncer/blob/master/COPYRIGHT
    checkedAt: 2026-10-30
  - field: category
    url: https://www.pgbouncer.org/
    checkedAt: 2026-10-30
  - field: databases
    url: https://www.pgbouncer.org/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.pgbouncer.org/install.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgbouncer.org/install.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgbouncer.org/install.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgbouncer.org/downloads/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/pgbouncer/pgbouncer
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/pgbouncer/pgbouncer/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

PgBouncer is a connection pooler for PostgreSQL. The project builds it from C source with Autoconf or Meson, and its settings are listed in the [configuration reference](https://www.pgbouncer.org/config.html). The install page describes running it as a Windows service, and it can validate pooler users through LDAP or PAM when built with those libraries.

## Worth knowing

The install page calls Autoconf the recommended choice for production builds and marks the Meson build as experimental.
