---
id: wordops
name: WordOps
urls:
  home: https://wordops.net
  repository: https://github.com/WordOps/WordOps
  docs: https://docs.wordops.net
category:
  - dev-tool
  - web-server
description: Command-line tool that installs an Nginx, PHP, MariaDB and Redis server stack on Ubuntu or Debian and deploys WordPress and other PHP sites on it.
status: active
maintainer: WordOps
firstRelease: 2019
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.4
databases:
  - mariadb
adminUi: true
installMethod: one-step installer script
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-08-07
githubStargazers: 1573
contributors: 36
social:
  x: https://twitter.com/WordOps_
  mastodon: https://mastodon.top/@WordOps
  forum: https://community.wordops.net
  facebook: https://www.facebook.com/WordOps/
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://wordops.net/
    checkedAt: 2026-10-31
  - field: urls
    url: https://wordops.net/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/WordOps/WordOps
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.wordops.net/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/WordOps/WordOps/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: category
    url: https://wordops.net/f-a-q/
    checkedAt: 2026-10-31
  - field: category
    url: https://wordops.net/f-a-q/
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/WordOps/WordOps
    checkedAt: 2026-10-31
  - field: runtime
    url: https://pypi.org/pypi/wordops/json
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/WordOps/WordOps/blob/v3.23.1/setup.py
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.wordops.net/getting-started/installation-guide/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.wordops.net/getting-started/installation-guide/
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://wordops.net/f-a-q/
    checkedAt: 2026-10-31
  - field: databases
    url: https://wordops.net/
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/WordOps/WordOps
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/WordOps/WordOps/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/WordOps/WordOps/releases/tag/v3.23.1
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/WordOps/WordOps/releases/latest
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/WordOps/WordOps/releases/tag/v3.9.3
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/WordOps/WordOps
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/WordOps/WordOps/contributors?per_page=1
    checkedAt: 2026-10-31
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

WordOps is a command-line tool that installs and manages a WordPress server on Ubuntu or Debian. The homepage lists the stack it sets up as Nginx, PHP-FPM, MariaDB and Redis, with WP-CLI, Netdata and phpMyAdmin beside them. The `wo site create` command adds a WordPress site to that stack, and the same command takes a flag for plain PHP or static HTML sites.

WordOps is forked from EasyEngine v3, which the [project's about page](https://docs.wordops.net/about/from-easyengine-to-wordops/) names as its origin. The installer script or a git clone installs it, and the server it sets up gets a web dashboard that shows server metrics.

## Worth knowing

The installation guide marks its manual steps as outdated, so the installer script or the git clone is the documented route.
