---
id: buffalo
name: Buffalo
urls:
  home: https://gobuffalo.io/
  repository: https://github.com/gobuffalo/buffalo
  docs: https://gobuffalo.io/documentation/
category:
  - framework
description: Go web development framework and toolkit that generates and runs web applications with routing, a database layer and templates.
status: active
maintainer: Mark Bates
firstRelease: 2016
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
templating: plush, html/template
i18n: yes, translations through go-i18n
runsAs:
  - always-on
installMethod: pre-built release archive or build from source
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-03-20
githubStargazers: 8424
contributors: 143
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://gobuffalo.io/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/gobuffalo/buffalo
    checkedAt: 2026-10-24
  - field: urls
    url: https://gobuffalo.io/documentation/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://raw.githubusercontent.com/gobuffalo/buffalo/main/LICENSE.txt
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/gobuffalo/buffalo
    checkedAt: 2026-10-24
  - field: category
    url: https://gobuffalo.io/
    checkedAt: 2026-10-24
  - field: runtime
    url: https://gobuffalo.io/documentation/getting_started/installation/
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://gobuffalo.io/documentation/getting_started/installation/
    checkedAt: 2026-10-24
  - field: templating
    url: https://gobuffalo.io/
    checkedAt: 2026-10-24
  - field: templating
    url: https://gobuffalo.io/
    checkedAt: 2026-10-24
  - field: databases
    url: https://gobuffalo.io/
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://gobuffalo.io/documentation/deploy/proxy/
    checkedAt: 2026-10-24
  - field: i18n
    url: https://gobuffalo.io/documentation/guides/localization/
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/gobuffalo/buffalo
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://raw.githubusercontent.com/gobuffalo/buffalo/main/LICENSE.txt
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/gobuffalo/buffalo/tags
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/gobuffalo/buffalo/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/gobuffalo/buffalo/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/gobuffalo/buffalo
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/gobuffalo/buffalo/contributors?per_page=1
    checkedAt: 2026-10-24
figure:
  emoji: 🧱
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Go · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Buffalo is a web development framework and toolkit written in Go. It generates a project with the front end and the back end set up together, and projects use Plush templates, with html/template as an option. The supported databases are MySQL and MariaDB, PostgreSQL, CockroachDB and SQLite, and the localization guide describes translations through go-i18n. The project is installed from a pre-built release archive or from source. The build command packs the application into a single binary, and the [deployment guide](https://gobuffalo.io/documentation/deploy/systemd/) runs that binary as a systemd service that starts a process. Mark Bates holds the copyright under the MIT License.

## Worth knowing

The homepage and the installation page name an older Go release than the one the module file of the latest release requires.
