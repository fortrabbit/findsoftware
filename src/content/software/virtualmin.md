---
id: virtualmin
name: Virtualmin
urls:
  home: https://www.virtualmin.com/
  repository: https://github.com/virtualmin/virtualmin-gpl
  docs: https://www.virtualmin.com/docs/
  pricing: https://www.virtualmin.com/shop/
category:
  - web-server
description: Web hosting control panel for Linux and BSD servers, installed as a module for Webmin, that manages websites, mail, DNS, databases and backups.
status: active
maintainer: Virtualmin, Inc.
maintainerType: company
firstRelease: 2005
language: perl
runtime:
  - perl
hosting:
  - perl
runtimeMin: perl 5.16
basedOn:
  - webmin
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
  - oracle
adminUi: true
i18n: web interface translations in 16 languages
installMethod: install script
licenseModel: open-core
license: GPL-3.0
currentMajor: "8"
latestReleaseDate: 2026-09-29
githubStargazers: 421
contributors: 47
social:
  forum: https://forum.virtualmin.com
  youtube: https://youtube.com/virtualmin
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.virtualmin.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/virtualmin/virtualmin-gpl
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.virtualmin.com/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://www.virtualmin.com/privacy/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://www.virtualmin.com/privacy/
    checkedAt: 2026-10-30
  - field: category
    url: https://www.virtualmin.com/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/virtualmin/virtualmin-gpl/blob/8.3.0/README.md
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/virtualmin/virtualmin-gpl/blob/8.3.0/README.md
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/virtualmin/virtualmin-gpl/blob/8.3.0/README.md
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://raw.githubusercontent.com/virtualmin/virtualmin-gpl/master/README.md
    checkedAt: 2026-10-30
  - field: databases
    url: https://raw.githubusercontent.com/virtualmin/virtualmin-gpl/master/README.md
    checkedAt: 2026-10-30
  - field: i18n
    url: https://raw.githubusercontent.com/virtualmin/virtualmin-gpl/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.virtualmin.com/download/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.virtualmin.com/docs/installation/automated/
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://www.virtualmin.com/about/
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/virtualmin/virtualmin-gpl/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://www.virtualmin.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.virtualmin.com/shop/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/virtualmin/virtualmin-gpl/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/virtualmin/virtualmin-gpl/releases/latest
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/virtualmin/virtualmin-gpl
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/virtualmin/virtualmin-gpl/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://www.virtualmin.com/
    checkedAt: 2026-10-31
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Virtualmin is a web hosting control panel for Linux and BSD servers. It is a module for Webmin, the web-based system administration tool, and adds hosting tools on top of it for websites, mail, DNS, databases and backups. Plugins for Virtualmin are Webmin modules too. Domain owner and reseller accounts can be given their own access.

The project is mostly written in Perl. Its download page describes an automated install script as the way to get started, and a manual installation guide covers the other route. Administration is available through a web interface, and the project can import cPanel, Plesk and DirectAdmin domain backups.

## Worth knowing

Because it is built on Webmin, the panel depends on that tool, and its plugins extend Webmin as well.
