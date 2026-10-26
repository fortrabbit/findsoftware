---
id: goravel
name: Goravel
urls:
  home: https://www.goravel.dev
  repository: https://github.com/goravel/framework
  docs: https://www.goravel.dev
  plugins: https://www.goravel.dev/getting-started/packages
category:
  - framework
description: Go web application framework with routing, an ORM, queues, sessions and a console, organized in the structure of Laravel.
status: active
maintainer: goravel
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlserver
  - sqlite
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: go install github.com/goravel/installer/goravel@latest, then goravel new blog
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-07-05
githubStargazers: 529
contributors: 45
social:
  x: https://x.com/goravelgolang
  discord: https://discord.gg/cFc5csczzS
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.goravel.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/goravel/framework
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/goravel/goravel/blob/v1.18.x/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/goravel/goravel/v1.18.x/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/goravel/framework
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.goravel.dev/getting-started/installation
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.goravel.dev/getting-started/installation
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/goravel/goravel/blob/v1.18.x/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/goravel/goravel/blob/v1.18.x/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.goravel.dev/getting-started/configuration
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/goravel/framework
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/goravel/goravel/blob/v1.18.x/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.goravel.dev/database/getting-started
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.goravel.dev/database/getting-started
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.goravel.dev/database/getting-started
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.goravel.dev/database/getting-started
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/goravel/goravel/blob/v1.18.x/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/goravel/goravel/blob/v1.18.x/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/goravel/framework/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/goravel/framework/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/goravel/framework/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/goravel/framework
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/goravel/framework/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Goravel is a Go web application framework that provides routing, an ORM, validation, queues, events, cache and a console in one framework. Projects are created with the goravel installer, which runs `goravel new`, and when the application starts, the framework runs the HTTP server among the runners it starts automatically.

The project's own comparison page sets Goravel side by side with Laravel and says that Goravel follows Laravel's structure. Templates for HTML responses are rendered by a view engine, and a localization module handles translation. Database drivers exist for MySQL, PostgreSQL, SQL Server and SQLite.
