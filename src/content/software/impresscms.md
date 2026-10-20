---
id: impresscms
name: ImpressCMS
urls:
  home: https://www.impresscms.org
  repository: https://github.com/ImpressCMS/impresscms
  docs: https://www.impresscms.org/modules/simplywiki/
  plugins: https://www.impresscms.org/modules/downloads/
category:
  - cms
description: Community-built PHP and MySQL content management system with multilingual content and a module system.
status: active
maintainer: ImpressCMS community
maintainerType: community
firstRelease: 2008
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
contentStore:
  - database
databases:
  - mysql
  - mariadb
adminUi: true
i18n: multilingual interface and content, built into the core
runsAs:
  - per-request
installMethod: upload the htdocs folder to the web server, then the web installer
licenseModel: open-source
license: GPL-2.0
currentMajor: "2"
latestReleaseDate: 2026-04-13
githubStargazers: 30
contributors: 40
social:
  x: https://www.twitter.com/ImpressCMS
  mastodon: https://phpc.social/@impresscms
  forum: https://www.impresscms.org/modules/iforum/
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://www.impresscms.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/ImpressCMS/impresscms
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/ImpressCMS/impresscms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/ImpressCMS/impresscms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.impresscms.org
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://www.impresscms.org
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://www.impresscms.org/modules/content/content.php?content_id=3&page=history
    checkedAt: 2026-10-20
  - field: category
    url: https://www.impresscms.org
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/ImpressCMS/impresscms
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/ImpressCMS/impresscms/blob/v2.0.3/release_notes.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/ImpressCMS/impresscms/blob/v2.0.3/release_notes.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/ImpressCMS/impresscms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://github.com/ImpressCMS/impresscms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://www.impresscms.org/modules/simplywiki/index.php?page=Installation_Guide
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/ImpressCMS/impresscms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/ImpressCMS/impresscms/blob/main/htdocs/admin.php
    checkedAt: 2026-10-20
  - field: i18n
    url: https://www.impresscms.org
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/ImpressCMS/impresscms/blob/main/README.md
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://www.impresscms.org
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/ImpressCMS/impresscms/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/ImpressCMS/impresscms/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/ImpressCMS/impresscms
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/ImpressCMS/impresscms/contributors?anon=true&per_page=100
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

ImpressCMS is a content management system written in PHP for multilingual websites, and it stores its data in MySQL or MariaDB. The community behind it started the project as a fork of XOOPS. Website content comes from separate modules, so a site adds a forum or an online store by installing the modules it needs. Permissions are set per group.

The [installation guide](https://www.impresscms.org/modules/simplywiki/index.php?page=Installation_Guide) describes uploading the htdocs folder to a web server and then running the web installer.

## Worth knowing

The release notes of the latest stable release still title it a beta, and the homepage points readers to a newer beta for testing.
