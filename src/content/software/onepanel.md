---
id: onepanel
name: 1Panel
urls:
  home: https://1panel.pro
  repository: https://github.com/1Panel-dev/1Panel
  docs: https://1panel.pro/docs/
  pricing: https://1panel.pro/pro-edition
category:
  - web-server
description: Open-source Linux server management panel with a web interface for websites, databases, containers and an app store.
status: active
maintainer: FIT2CLOUD
maintainerType: company
parent: FIT2CLOUD
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
i18n: yes, panel interface in several languages
runsAs:
  - always-on
installMethod: install script
licenseModel: open-core
license: GPL-3.0, GNU General Public License v3.0
currentMajor: "2"
latestReleaseDate: 2026-10-22
githubStargazers: 37313
contributors: 129
social:
  x: https://x.com/lxware_x
  discord: https://discord.gg/bUpUqWqdRr
  forum: https://github.com/1Panel-dev/1Panel/discussions
  youtube: https://www.youtube.com/@1Panel-linux
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://1panel.pro/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/1Panel-dev/1Panel
    checkedAt: 2026-10-30
  - field: urls
    url: https://1panel.pro/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://1panel.pro/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://www.lxware.hk/pages/about
    checkedAt: 2026-10-30
  - field: parent
    url: https://www.lxware.hk/pages/about
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/1Panel-dev/1Panel/releases/tag/v1.0.0
    checkedAt: 2026-10-30
  - field: category
    url: https://1panel.pro/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/1Panel-dev/1Panel
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/1Panel-dev/1Panel/blob/v2.4.1/core/go.mod
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://1panel.pro/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://1panel.pro/docs/v2/installation/cli/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://1panel.pro/
    checkedAt: 2026-10-30
  - field: databases
    url: https://1panel.pro/docs/v2/user_manual/databases/mysql/
    checkedAt: 2026-10-30
  - field: databases
    url: https://1panel.pro/docs/v2/user_manual/databases/postgresql/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/1Panel-dev/1Panel/releases/tag/v2.4.1
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/1Panel-dev/1Panel/releases/tag/v2.4.1
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/1Panel-dev/1Panel
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/1Panel-dev/1Panel
    checkedAt: 2026-10-30
  - field: urls
    url: https://1panel.pro/pro-edition
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/1Panel-dev/1Panel
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/1Panel-dev/1Panel/contributors
    checkedAt: 2026-10-30
  - field: i18n
    url: https://1panel.pro/docs/v2/changelog/
    checkedAt: 2026-10-30
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

1Panel is a Linux server management panel that gives the administrator a web interface for the host, its files, its databases, its containers and its websites. The panel runs as a service on the server it manages, and the project describes it as a panel for websites, databases, containers and an app store. Installation uses a one-command install script run on the server. FIT2CLOUD publishes the project, and LXware, a FIT2CLOUD subsidiary, is named as the commercial support vendor on the project's pages.

The web interface covers host monitoring, file management, database management and container management. The panel's database support covers MySQL, MariaDB and PostgreSQL instances, which appear in its database list when they are installed through the app store.

## Worth knowing

The panel is a long-running service, so a server that runs it keeps a process going at all times and does not behave like a folder of static files or a per-request script.
