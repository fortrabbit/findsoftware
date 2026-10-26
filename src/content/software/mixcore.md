---
id: mixcore
name: Mixcore CMS
urls:
  home: https://mixcore.org
  repository: https://github.com/mixcore/mix.core
  docs: https://github.com/mixcore/mix.core/blob/master/README.md
category:
  - cms
  - headless-cms
description: Open source content management system built on ASP.NET Core, with a headless API and an administration portal.
status: stub
maintainer: Mixcore Foundation
maintainerType: foundation
firstRelease: 2019
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
databases:
  - mysql
  - sqlserver
  - postgres
  - sqlite
adminUi: true
i18n: multilingual content
installMethod: Docker image (docker pull ghcr.io/mixcore/mix.core)
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-05-01
githubStargazers: 888
contributors: 14
social:
  x: https://twitter.com/mixcore_cms
  forum: https://github.com/orgs/mixcore/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://mixcore.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/mixcore/mix.core
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/mixcore/mix.core/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/mixcore/mix.core
    checkedAt: 2026-10-26
  - field: runtime
    url: https://mixcore.org/
    checkedAt: 2026-10-26
  - field: category
    url: https://mixcore.org/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/mixcore/mix.core/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/mixcore/mix.core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/mixcore/mix.core/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/mixcore/mix.core/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/mixcore/mix.core/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/mixcore/mix.core
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/mixcore/mix.core/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Mixcore CMS is an open source content management system built on ASP.NET Core, which its homepage describes as a headless and decoupled CMS. It runs from a Docker image or from a clone with the .NET SDK, and the README names MySQL, SQL Server, PostgreSQL and SQLite as its databases. The back office is built on Bootstrap 5, and the README lists member roles and permissions and multilingual content migration.

## Worth knowing

The README's two branches differ: master is the 1.0 LTS line and develop is the 2.0 alpha line. The documentation site the README names does not answer, so the README is the only readable documentation.
