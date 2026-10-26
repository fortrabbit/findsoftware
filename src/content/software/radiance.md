---
id: radiance
name: Radiance
urls:
  home: https://shirakumo.org/docs/radiance
  repository: https://codeberg.org/shirakumo/radiance
  docs: https://shirakumo.org/docs/radiance
category:
  - framework
description: Web application environment for Common Lisp, for personal websites and deployable applications.
status: active
maintainer: Yukari Hafner
language: common-lisp
databases:
  - postgres
  - sqlite
templating: clip
runsAs:
  - always-on
installMethod: Quicklisp dist (ql-dist:install-dist, then ql:quickload)
licenseModel: open-source
license: zlib
contributors: 8
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://shirakumo.org/docs/radiance
    checkedAt: 2026-10-26
  - field: urls
    url: https://codeberg.org/api/v1/repos/shirakumo/radiance
    checkedAt: 2026-10-26
  - field: urls
    url: https://shirakumo.org/docs/radiance
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://codeberg.org/shirakumo/radiance/raw/branch/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://codeberg.org/api/v1/repos/shirakumo/radiance/languages
    checkedAt: 2026-10-26
  - field: category
    url: https://codeberg.org/shirakumo/radiance/raw/branch/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://codeberg.org/shirakumo/radiance/raw/branch/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://codeberg.org/shirakumo/radiance/raw/branch/master/radiance.asd
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://codeberg.org/shirakumo/radiance/raw/branch/master/LICENSE
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://codeberg.org/shirakumo/radiance-tutorial/raw/branch/master/Part%207.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://codeberg.org/shirakumo/radiance-tutorial/raw/branch/master/Part%207.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://codeberg.org/shirakumo/radiance-tutorial/raw/branch/master/Part%207.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://codeberg.org/shirakumo/radiance-tutorial/raw/branch/master/Part%201.md
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/Shirakumo/radiance/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Radiance is a web application environment for Common Lisp, described by its authors as sort of like a web framework, but more general. It is installed through Quicklisp and used to write personal websites and deployable applications. The tutorial's deployment part runs Radiance as a long-running Lisp process behind an existing HTTP server, and its templates are written with the Clip system. Its database implementations include PostgreSQL and SQLite.

## Worth knowing

The source moved from GitHub to Codeberg in 2025, and the GitHub repository is archived. The [project documentation](https://shirakumo.org/docs/radiance) is the reference for the standard interfaces.
