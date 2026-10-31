---
id: webmin
name: Webmin
urls:
  home: https://webmin.com
  repository: https://github.com/webmin/webmin
  docs: https://webmin.com/docs/
category:
  - web-server
description: Web-based administration tool for Unix-like servers that configures system files and server applications such as Apache HTTP Server, BIND and MySQL.
status: active
maintainer: Jamie Cameron
maintainerType: individual
firstRelease: 2004
language: perl
runtime:
  - perl
hosting:
  - perl
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
i18n: yes
runsAs:
  - always-on
installMethod: webmin-setup-repo.sh, then apt-get or dnf install webmin
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2026-09-21
githubStargazers: 6120
contributors: 133
social:
  forum: https://forum.virtualmin.com/c/webmin/12
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://webmin.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/webmin/webmin
    checkedAt: 2026-10-31
  - field: urls
    url: https://webmin.com/docs/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/webmin/webmin/blob/master/LICENCE
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://webmin.com/about/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://webmin.com/changelog/
    checkedAt: 2026-10-31
  - field: category
    url: https://webmin.com/
    checkedAt: 2026-10-31
  - field: language
    url: https://webmin.com/about/
    checkedAt: 2026-10-31
  - field: runtime
    url: https://webmin.com/about/
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://webmin.com/about/
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://webmin.com/
    checkedAt: 2026-10-31
  - field: databases
    url: https://webmin.com/about/
    checkedAt: 2026-10-31
  - field: databases
    url: https://webmin.com/docs/
    checkedAt: 2026-10-31
  - field: i18n
    url: https://webmin.com/about/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://webmin.com/download/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://webmin.com/download/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://webmin.com/download/
    checkedAt: 2026-10-31
  - field: license
    url: https://api.github.com/repos/webmin/webmin
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://webmin.com/about/
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/webmin/webmin/releases/tag/2.670
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/webmin/webmin/releases/tag/2.670
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/webmin/webmin
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/webmin/webmin/contributors?per_page=1
    checkedAt: 2026-10-31
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Webmin is a web interface for administering Unix-like servers. It configures system internals and server applications, such as the Apache HTTP Server and BIND DNS Server. The [documentation](https://webmin.com/docs/) lists modules for the Apache and Nginx web servers, PHP and MySQL.

It runs as a server process on the machine it administers. The [download page](https://webmin.com/download/) describes installing it from the project's package repository with a setup script, from downloaded rpm or deb packages, or from a source tarball.

## Worth knowing

Virtualmin, a hosting control panel from the same developers, is a Webmin module. The about page offers paid developer help.
