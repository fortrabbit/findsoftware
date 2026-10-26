---
id: writefreely
name: WriteFreely
urls:
  home: https://writefreely.org
  repository: https://github.com/writefreely/writefreely
  docs: https://writefreely.org/docs
category:
  - cms
description: Open source publishing platform for blogs, written in Go.
status: active
maintainer: Musing Studio LLC
maintainerType: company
firstRelease: 2018
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - sqlite
  - mariadb
i18n: yes
runsAs:
  - always-on
installMethod: release binary download, then writefreely config start
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-08-10
githubStargazers: 5275
contributors: 63
social:
  mastodon: https://writing.exchange/@writefreely
  forum: https://discuss.write.as/c/writefreely
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://writefreely.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/writefreely/writefreely
    checkedAt: 2026-10-26
  - field: urls
    url: https://writefreely.org/docs
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/writefreely/writefreely/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/writefreely/writefreely
    checkedAt: 2026-10-26
  - field: category
    url: https://writefreely.org/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://writefreely.org/about
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://writefreely.org/start
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/writefreely/writefreely/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://writefreely.org/start
    checkedAt: 2026-10-26
  - field: databases
    url: https://writefreely.org/about
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/writefreely/writefreely/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/writefreely/writefreely/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/writefreely/writefreely
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/writefreely/writefreely/develop/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/writefreely/writefreely/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/writefreely/writefreely/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/writefreely/writefreely/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/writefreely/writefreely
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/writefreely/writefreely/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

WriteFreely is an open source platform for building a blog, written in Go. A release is downloaded as a binary and configured with writefreely config start, and the program runs as a standalone server. Its data is kept in SQLite, MySQL or MariaDB. Musing Studio LLC holds the copyright, and the Write.as team behind the project also offers the software as a managed service.

## Worth knowing

Running the software means keeping a server process up. The managed service is run by the Write.as team, and the install guide describes a self-hosted instance as the other route.
