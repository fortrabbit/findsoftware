---
id: drogon
name: Drogon
urls:
  home: https://drogon.org
  repository: https://github.com/drogonframework/drogon
  docs: https://drogonframework.github.io/drogon-docs/
category:
  - framework
description: C++ HTTP application framework for building web application server programs, with asynchronous I/O, routing, views, sessions, WebSockets and database access.
status: active
maintainer: An Tao
firstRelease: 2019
language: cpp
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - mariadb
  - sqlite
templating: csp
runsAs:
  - always-on
renderingModes:
  - server
installMethod: cmake build from source
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-12
githubStargazers: 14369
contributors: 195
social:
  discord: https://discord.com/invite/3DvHY6Ewuj
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://drogon.org
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/drogonframework/drogon
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/drogonframework/drogon/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-01-Overview.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/drogonframework/drogon
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-01-Overview.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-02-Installation.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-02-Installation.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-02-Installation.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-02-Installation.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-01-Overview.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-11-Configuration-File.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-01-Overview.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-01-Overview.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/drogonframework/drogon-docs/blob/master/ENG/ENG-01-Overview.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/drogonframework/drogon
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/drogonframework/drogon/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/drogonframework/drogon/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/drogonframework/drogon/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/drogonframework/drogon/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/drogonframework/drogon/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/drogonframework/drogon
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/drogonframework/drogon/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Drogon is a C++ HTTP application framework for building web application server programs. A project builds the framework with CMake, from source or on the Docker image the installation page describes, then registers controllers, handlers and CSP view templates in its application. Drogon connects to PostgreSQL, MySQL, MariaDB and SQLite through client libraries that are installed at build time, and it can run as a daemon in the background when its configuration file says so.
